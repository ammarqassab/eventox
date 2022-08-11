import React from 'react'
import Head from 'next/head'
import { appName } from '../../../Api/AuthApi';
import { useDispatch, useSelector } from 'react-redux';
import { acceptCommentApi, ignoreCommentApi } from '../../../Api/HelperApi';
import { deletecommenthelper, deletehelper } from '../../../Store/HelperSlice';
import { deleteCommentAdminApi, ignoreCommentAdminApi } from '../../../Api/AdminApi';

const HelperComment = () => {

    const Auth = useSelector(state => state.auth.data);
    const middleware = useSelector(state => state.auth.middleware);
    const helper = useSelector(state => state.helper.data);
    const commenthelper = useSelector(state => state.helper.commenthelper);
    const dispatch = useDispatch();

    const [title, settitle] = React.useState('');

    let searchusers = helper || [];

    if(middleware == 'Admin' && commenthelper) {
        searchusers = commenthelper || [];
    }

    if(title != '' && middleware != 'Admin') {
        searchusers = [] ;
        for(let i in helper) {
            if(helper[i].content.toLowerCase().includes(title.toLowerCase()) == true) {
                searchusers.push(helper[i]);
            }
        }
    }

    if(title != '' && middleware == 'Admin') {
        searchusers = [] ;
        for(let i in commenthelper) {
            if(commenthelper[i].content.toLowerCase().includes(title.toLowerCase()) == true) {
                searchusers.push(commenthelper[i]);
            }
        }
    }

    const ignoreComment= (id, index) => {

        ignoreCommentApi(Auth.token, id)
        .then(() => {
            dispatch(deletehelper(index));
        })
        .catch(() => console.log("حدث خطأ في تجاهل المستخدم"));
        
    };

    const acceptComment = (id, index) => {

        acceptCommentApi(Auth.token, id)
        .then(() => {
            dispatch(deletehelper(index));
        })
        .catch(() => console.log("حدث خطأ في إرسال المستخدم"));
        
    };

    const ignoreCommentAdmin= (id, index) => {

        ignoreCommentAdminApi(Auth.token, id)
        .then(() => {
            dispatch(deletecommenthelper(index));
        })
        .catch(() => console.log("حدث خطأ في تجاهل المستخدم"));
        
    };

    const deleteCommentAdmin = (id, index) => {

        deleteCommentAdminApi(Auth.token, id)
        .then(() => {
            dispatch(deletecommenthelper(index));
        })
        .catch(() => console.log("حدث خطأ في حذف المستخدم"));
        
    };

    return (
        <>
            <div className=' animate-top'>
                <Head>
                    <title>Helper Comment - {appName}</title>
                </Head>

                {Auth  ?
                <>
                    <div className=' center margin padding'>
                        <span className=' width-fit-content bottombar borderc-4 textc-4 xxlarge'>Helper Comment</span>
                    </div>

                    <div className="transparent margin padding textc-2">
                        <div className='display-container margin-bottom padding'>
                            <div className=' display-middle width-50'>
                                <input type="text" className="input transparent round textc-2 " placeholder="Search Content" onChange={(e) => settitle(e.target.value)} />
                                <br/>
                            </div>
                        </div>

                        <div className='responsive margin-top user-select'>
                            <table className="table-all">
                            <thead>
                                <tr>
                                    <th>Count= {middleware == 'Admin' && commenthelper ? commenthelper.length :middleware != 'Admin' && helper ? helper.length : 0}</th>
                                    <th>Comment</th>
                                    <th>Content</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchusers.length > 0 ? searchusers.map((iteme, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{iteme.comment}</td>
                                    <td>{iteme.content}</td>
                                    <td>
                                        <span className=" button bgc-4 hover-bgc-2 round-large margin"><span className="fas fa-sync-alt textc-1" onClick={() => {middleware == 'Admin' ? ignoreCommentAdmin(iteme.id, index): acceptComment(iteme.id, index)}}></span></span>
                                        <span className=" button bgc-4 hover-bgc-2 round-large margin"><span className="fas fa-trash-alt textc-1" onClick={() => {middleware == 'Admin' ? deleteCommentAdmin(iteme.id, index): ignoreComment(iteme.id, index)}}></span></span>
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

export default HelperComment