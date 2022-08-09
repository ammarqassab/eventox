/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Head from 'next/head'
import Header from '../Header/Header'
// import Footer from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addAuth, addMiddleware } from '../../Store/AuthSlice'
import Upscroll from '../Upscroll/Upscroll'
import { Middleware } from '../../Api/AuthApi'
import { useRouter } from 'next/router';
import { complaintsApi } from '../../Api/HelperApi'
import { addcommenthelper, addhelper, addposthelper, adduserhelper } from '../../Store/HelperSlice'
import { complaintsAdminApi, helperAdminApi } from '../../Api/AdminApi'

const AppLayout = ({ children }) => {

    const Auth = useSelector(state => state.auth.data)
    const router = useRouter();
    const dispatch = useDispatch();

    const logout = () => {

        dispatch(addAuth(null));
        dispatch(addMiddleware(null));
        localStorage.clear();
        router.push('/');
    }

    React.useEffect(() => {

        const token = localStorage.getItem("token");

        if(token) {
            Middleware(token)
            .then((res) => {
                dispatch(addMiddleware(res.data.message));
            })
            .catch((err) => logout());
        }
    
    })

    React.useEffect(() => {

        if(localStorage.getItem("token")) {
            const address = localStorage.getItem("address");
            const dateBirth = localStorage.getItem("dateBirth");
            const email = localStorage.getItem("email");
            const fullname = localStorage.getItem("fullname");
            const gender = localStorage.getItem("gender");
            const id = localStorage.getItem("id");
            const location = localStorage.getItem("location");
            const phone = localStorage.getItem("phone");
            const profile_image = localStorage.getItem("profile_image");
            const role_as = localStorage.getItem("role_as");
            const token = localStorage.getItem("token");

            dispatch(addAuth({address, dateBirth, email, fullname, gender, id, location, phone, profile_image, role_as, token}));

            if(role_as == 1) {
                complaintsAdminApi(token)
                .then((res) => {
                    dispatch(adduserhelper(res.data.UserHelper))
                    dispatch(addposthelper(res.data.PostHelper))
                    dispatch(addcommenthelper(res.data.CommentHelper))
                })
                .catch((err) => {console.error(err.message)});

                helperAdminApi(token)
                .then((res) => {
                    dispatch(addhelper(res.data))
                })
                .catch((err) => {console.error(err.message)});
            }

            if(role_as == 2 ||role_as == 3 ||role_as == 4) {
                complaintsApi(token)
                .then((res) => {
                    dispatch(addhelper(res.data))
                })
                .catch((err) => {console.error(err.message)});
            }

        } else {router.push('/')}

    },[])

    return (
        <div className=' display-container bgc-1 height-100vh'>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header/>
            <Upscroll/>
            <main>
                {children}
            </main>
            {/* <Footer/> */}
        </div>
    )
}

export default AppLayout