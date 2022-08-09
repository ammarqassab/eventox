import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addAuth, addMiddleware } from '../../../Store/AuthSlice';
import { addhelper } from '../../../Store/HelperSlice';

const Siderbar = ({user}) => {

    const Auth = useSelector(state => state.auth.data);
    const middleware = useSelector(state => state.auth.middleware);
    const dispatch = useDispatch();

    const [hideshow, sethideshow] = React.useState(false)

    const funhideshow = () => {
        hideshow ? sethideshow(false) : sethideshow(true);
    }

    const logout = () => {

        dispatch(addAuth(null));
        dispatch(addMiddleware(null));
        dispatch(addhelper(null))
        localStorage.clear();
    }

    return (
        <>
            <div className=' center'>
                <div className="sidebar-sticky transparent center">
                    <div className="bar margin-top" >
                        <div className="dropdown-click bar-item large padding-0 margin">
                            <div onClick={() => funhideshow()} className="fas fa-user-cog btn round-xlarge" style={{padding:'6px 16px'}} > {Auth ? ' ' + middleware :' admin'}{user =='Admin' ?<span className='arrow'></span>:null}</div>
                            {user =='Admin' ?
                            <div className={`dropdown-content bar-block ${hideshow?' show':''}`}>
                                <Link href="/dashboard" ><span className="fas fa-users bar-item btn margin-top round-xlarge bgc-1"> Helpre User</span></Link>
                                <Link href="/dashboard/helprepost" ><span className="fas fa-table bar-item btn margin-top round-xlarge bgc-1"> Helpre Post</span></Link>
                                <Link href="/dashboard/helprecomment" ><span className="fas fa-comment-alt bar-item btn margin-top round-xlarge bgc-1"> Helpre Comment</span></Link>
                                <Link href="/dashboard/helpers" ><span className="fas fa-users bar-item btn margin-top round-xlarge bgc-1"> Helpre</span></Link>
                            </div>
                            :null
                            }
                        </div>
                        <Link href="/" ><span className="fas fa-sign-out-alt bar-item btn margin round-xlarge large" onClick={() => logout()}> Logout</span></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Siderbar;