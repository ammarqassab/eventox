import React from 'react'
import { useSelector } from 'react-redux'
import HelperPost from '../../src/components/Dashboard/HelperPost/HelperPost'
import Siderbar from '../../src/components/Dashboard/Siderbar/Siderbar'

const Helprepost = () => {

    const Auth = useSelector(state => state.auth.data)
    const middleware = useSelector(state => state.auth.middleware)

    return (
        <>
            {Auth && middleware == 'Admin' ? <Siderbar user='Admin' />:null}
            {Auth && middleware == 'Admin' && <HelperPost/>}
        </>
    )
}

export default Helprepost