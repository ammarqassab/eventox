import React from 'react'
import Link from 'next/link'
import { appName } from '../Api/AuthApi';

const ApplicationLogo = () => {
    return (
    <span className="pointer hover-textc-2 animate-opacity" >
        <span className="fas fa-play fa-rotate-270"></span>
        <Link href='/' >
            <span className='text-decoration-none sofia margin-left ripple'> {appName}</span>
        </Link>
    </span>
    );
}

export default ApplicationLogo
