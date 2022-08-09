import React from 'react'
import { useSelector } from 'react-redux'
import HelperComment from '../../src/components/Dashboard/HelperComment/HelperComment'
import Siderbar from '../../src/components/Dashboard/Siderbar/Siderbar'

const Helprecomment = () => {
    
    const Auth = useSelector(state => state.auth.data)
    const middleware = useSelector(state => state.auth.middleware)

    return (
        <>
            {Auth && middleware == 'Admin' ? <Siderbar user='Admin' />:null}
            {Auth && middleware == 'Admin' && <HelperComment/>}
        </>
    )
}

export default Helprecomment