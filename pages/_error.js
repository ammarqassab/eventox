import React from 'react';
import { useRouter } from 'next/router'

function Error({ statusCode }) {

    const router = useRouter();

    React.useEffect(() => {
        setTimeout(() => {router.push('/')},5000)
    },[]);

    // <p>
    // {statusCode
    //     ? `An error ${statusCode} occurred on server`
    //     : 'An error occurred on client'}
    // </p>

    return (
        <div className=' height-con display-container' >
            <div className=' display-middle xlarge textc-2'>404 | Not Found :\ Error</div>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error