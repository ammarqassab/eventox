import React from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { appName } from '../../../Api/AuthApi';
import { acceptPostApi, ignorePostApi } from '../../../Api/HelperApi';
import { deletehelper, deleteposthelper } from '../../../Store/HelperSlice';
import { deletePostAdminApi, ignorePostAdminApi } from '../../../Api/AdminApi';
import Image from 'next/image'

const HelperPost = () => {
    
    const Auth = useSelector(state => state.auth.data);
    const middleware = useSelector(state => state.auth.middleware);
    const helper = useSelector(state => state.helper.data);
    const posthelper = useSelector(state => state.helper.posthelper);
    const dispatch = useDispatch();

    const [title, settitle] = React.useState('');

    let searchusers = helper || [];

    if(middleware == 'Admin' && posthelper) {
        searchusers = posthelper || [];
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
        for(let i in posthelper) {
            if(posthelper[i].content.toLowerCase().includes(title.toLowerCase()) == true) {
                searchusers.push(posthelper[i]);
            }
        }
    }

    const ignorePost= (id, index) => {

        ignorePostApi(Auth.token, id)
        .then(() => {
            dispatch(deletehelper(index));
        })
        .catch(() => console.log("حدث خطأ في تجاهل المستخدم"));
        
    };

    const acceptPost = (id, index) => {

        acceptPostApi(Auth.token, id)
        .then(() => {
            dispatch(deletehelper(index));
        })
        .catch(() => console.log("حدث خطأ في إرسال المستخدم"));
        
    };

    const ignorePostAdmin= (id, index) => {

        ignorePostAdminApi(Auth.token, id)
        .then(() => {
            dispatch(deleteposthelper(index));
        })
        .catch(() => console.log("حدث خطأ في تجاهل المستخدم"));
        
    };

    const deletePostAdmin = (id, index) => {

        deletePostAdminApi(Auth.token, id)
        .then(() => {
            dispatch(deleteposthelper(index));
        })
        .catch(() => console.log("حدث خطأ في حذف المستخدم"));
        
    };

    return (
        <>
            <div className=' animate-top'>
                <Head>
                    <title>Helper Post - {appName}</title>
                </Head>

                {Auth  ?
                <>
                    <div className=' center margin padding'>
                        <span className=' width-fit-content bottombar borderc-4 textc-4 xxlarge'>Helper Post</span>
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
                                    <th>Count= {middleware == 'Admin' && posthelper ? posthelper.length :middleware != 'Admin' && helper ? helper.length : 0}</th>
                                    <th>Photo</th>
                                    <th>Content</th>
                                    <th>Body</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchusers.length > 0 ? searchusers.map((iteme, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <span style={{width:'50px',height:'50px'}} >
                                            {iteme.post_id ? <Image src={`/imagepost/${iteme.post_id}`} width={`100%`} height={`100%`} layout="responsive" alt={iteme.post_id}  empty="true"/>:'No Image'}
                                        </span>
                                    </td>
                                    <td>{iteme.content}</td>
                                    <td>{iteme.Content ? iteme.Content : "No Body"}</td>
                                    <td>
                                        <span className=" button bgc-4 hover-bgc-2 round-large margin"><span className="fas fa-sync-alt textc-1" onClick={() => {middleware == 'Admin' ? ignorePostAdmin(iteme.id, index): acceptPost(iteme.id, index)}}></span></span>
                                        <span className=" button bgc-4 hover-bgc-2 round-large margin"><span className="fas fa-trash-alt textc-1" onClick={() => {middleware == 'Admin' ? deletePostAdmin(iteme.id, index): ignorePost(iteme.id, index)}}></span></span>
                                    </td>
                                </tr>
                                )
                                : <tr><td>No post</td></tr>
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

export default HelperPost