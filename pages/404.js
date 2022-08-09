import React from 'react';
import { useRouter } from 'next/router'

const Custom404 = () => {

    const router = useRouter();

    React.useEffect(() => {
        setTimeout(() => {router.push('/')},5000)
    },[]);

    return (
        <div className=' height-con display-container' >
            <div className=' display-middle xlarge textc-2'>404 | Not Found</div>
        </div>
    );
}

export default Custom404
