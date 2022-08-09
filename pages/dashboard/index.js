import React from 'react'
import { useSelector } from 'react-redux'
import DashboardHelper from '../../src/components/Dashboard/DashboardHelper'
import HelperUser from '../../src/components/Dashboard/HelperUser/HelperUser'
import Siderbar from '../../src/components/Dashboard/Siderbar/Siderbar'

const Dashboard = () => {

    const Auth = useSelector(state => state.auth.data)
    const middleware = useSelector(state => state.auth.middleware)

    return (
        <>
            {Auth && (middleware == 'Helper User' || middleware == 'Helper Comment' || middleware == 'Helper Post') ? <DashboardHelper/> : null}
            {Auth && middleware == 'Admin' ? <Siderbar user='Admin' />:null}
            {Auth && middleware == 'Admin' && <HelperUser/>}
        </>
    )
}

export default Dashboard