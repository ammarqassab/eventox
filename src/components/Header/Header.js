import React from 'react'
import { useSelector } from 'react-redux'
// import Link from 'next/link'
import ApplicationLogo from '../ApplicationLogo'

const Header = () => {

  const Auth = useSelector(state => state.auth.data)

  return (
    <header className=' row border-bottom borderc-4'>
        <div className=' col m66 text-decoration-none xxlarge sofia textc-4' style={{padding:'16px 32px'}} ><ApplicationLogo/></div>
        {Auth != null ? <div className=' col m33 textc-4 center large pointer' style={{padding:"28px 0px"}} >{`${Auth.fullname.toUpperCase() || Auth.fullname}`}</div>:null}
    </header>
  )
}

export default Header