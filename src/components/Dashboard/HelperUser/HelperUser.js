import React from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { appName } from '../../../Api/AuthApi';
import { acceptUserApi, ignoreUserApi } from '../../../Api/HelperApi';
import { deletehelper, deleteuserhelper } from '../../../Store/HelperSlice';
import { deleteUserAdminApi, ignoreUserAdminApi } from '../../../Api/AdminApi';

const HelperUser = () => {

    const Auth = useSelector(state => state.auth.data);
    const middleware = useSelector(state => state.auth.middleware);
    const helper = useSelector(state => state.helper.data);
    const userhelper = useSelector(state => state.helper.userhelper);
    const dispatch = useDispatch();

    const [title, settitle] = React.useState('');

    let searchusers = helper || [];

    if(middleware == 'Admin' && userhelper) {
        searchusers = userhelper || [];
    }

    if(title != '' && middleware != 'Admin') {
        searchusers = [] ;
        for(let i in helper) {
            if(helper[i].fullname.toLowerCase().includes(title.toLowerCase()) == true) {
                searchusers.push(helper[i]);
            }
        }
    }

    if(title != '' && middleware == 'Admin') {
        searchusers = [] ;
        for(let i in userhelper) {
            if(userhelper[i].fullname.toLowerCase().includes(title.toLowerCase()) == true) {
                searchusers.push(userhelper[i]);
            }
        }
    }

    const ignoreUser= (id, index) => {

        ignoreUserApi(Auth.token, id)
        .then(() => {
            dispatch(deletehelper(index));
        })
        .catch(() => console.log("حدث خطأ في تجاهل المستخدم"));
        
    };

    const acceptUser = (id, index) => {

        acceptUserApi(Auth.token, id)
        .then(() => {
            dispatch(deletehelper(index));
        })
        .catch(() => console.log("حدث خطأ في إرسال المستخدم"));
        
    };

    const ignoreUserAdmin= (id, index) => {

        ignoreUserAdminApi(Auth.token, id)
        .then(() => {
            dispatch(deleteuserhelper(index));
        })
        .catch(() => console.log("حدث خطأ في تجاهل المستخدم"));
        
    };

    const deleteUserAdmin = (id, index) => {

        deleteUserAdminApi(Auth.token, id)
        .then(() => {
            dispatch(deleteuserhelper(index));
        })
        .catch(() => console.log("حدث خطأ في حذف المستخدم"));
        
    };

    return (
        <>
            <div className=' animate-top'>
                <Head>
                    <title>Helper User - {appName}</title>
                </Head>

                {Auth  ?
                <>
                    <div className=' center margin padding'>
                        <span className=' width-fit-content bottombar borderc-4 textc-4 xxlarge'>Helper User</span>
                    </div>

                    <div className="transparent margin padding textc-2">
                        <div className='display-container margin-bottom padding'>
                            <div className=' display-middle width-50'>
                                <input type="text" className="input transparent round textc-2 " placeholder="Search Full Name" onChange={(e) => settitle(e.target.value)} />
                                <br/>
                            </div>
                        </div>

                        <div className='responsive margin-top user-select'>
                            <table className="table-all">
                            <thead>
                                <tr>
                                    <th>Count= {middleware == 'Admin' && userhelper ? userhelper.length :middleware != 'Admin' && helper ? helper.length : 0}</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Content</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchusers.length > 0 ? searchusers.map((iteme, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{iteme.fullname}</td>
                                    <td>{iteme.email}</td>
                                    <td>{iteme.content}</td>
                                    <td>
                                        <span className=" button bgc-4 hover-bgc-2 round-large margin"><span className="fas fa-sync-alt textc-1" onClick={() => {middleware == 'Admin' ? ignoreUserAdmin(iteme.id, index): acceptUser(iteme.id, index)}}></span></span>
                                        <span className=" button bgc-4 hover-bgc-2 round-large margin"><span className="fas fa-trash-alt textc-1" onClick={() => {middleware == 'Admin' ? deleteUserAdmin(iteme.id, index): ignoreUser(iteme.id, index)}}></span></span>
                                    </td>
                                </tr>
                                )
                                : <tr><td>no Users</td></tr>
                                }
                            </tbody>
                            </table>
                        </div>

                    </div>
                </>
                :null
                }

            </div>
        </>
    )
}

export default HelperUser