import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HelperComment from './HelperComment/HelperComment';
import HelperPost from './HelperPost/HelperPost';
import HelperUser from './HelperUser/HelperUser';
import Siderbar from './Siderbar/Siderbar'

const DashboardHelper = () => {

    const Auth = useSelector(state => state.auth.data);
    const middleware = useSelector(state => state.auth.middleware);
    const dispatch = useDispatch();

    return (
        <>
            {middleware == 'Helper User' || middleware == 'Helper Post' || middleware == 'Helper Comment' ? <Siderbar user={null} />:null}
            {middleware == 'Helper User' ? <HelperUser/> :middleware == 'Helper Post' ? <HelperPost/> :middleware == 'Helper Comment' ? <HelperComment/> :null}
        </>
    )
}

export default DashboardHelper