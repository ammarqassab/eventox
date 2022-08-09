import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addAuth, addMiddleware } from '../src/Store/AuthSlice';
import { appName, loginuserApi, Middleware } from '../src/Api/AuthApi';
import { complaintsApi } from '../src/Api/HelperApi';
import { addcommenthelper, addhelper, addposthelper, adduserhelper } from '../src/Store/HelperSlice';
import { complaintsAdminApi, helperAdminApi } from '../src/Api/AdminApi';

const Login = () => {

    const router = useRouter();
    const dispatch = useDispatch();

    const [email,setemail] = React.useState("");
    const [password,setpassword] = React.useState("");
    const [err,seterr] = React.useState("");

    async function login(e) {
        e.preventDefault();

        if(email =='' || email.includes('@') == false) return seterr('Enter the email');
        if(password =='' || password.length < 8) return seterr('Enter a password greater than 8 numbers or letters');

        seterr('')
        
        let formData = new FormData();

        formData.append("email", email);
        formData.append("password", password);

        loginuserApi(formData)
        .then( (responsee) => {
            if (responsee.data.data.token){
                localStorage.setItem("address", responsee.data.data.address);
                localStorage.setItem("dateBirth", responsee.data.data.dateBirth);
                localStorage.setItem("email", responsee.data.data.email);
                localStorage.setItem("fullname", responsee.data.data.fullname);
                localStorage.setItem("gender", responsee.data.data.gender);
                localStorage.setItem("id", responsee.data.data.id);
                localStorage.setItem("location", responsee.data.data.location);
                localStorage.setItem("phone", responsee.data.data.phone);
                localStorage.setItem("profile_image", responsee.data.data.profile_image);
                localStorage.setItem("role_as", responsee.data.data.role_as);
                localStorage.setItem("token", responsee.data.data.token);

                dispatch(addAuth(responsee.data.data));

                Middleware(responsee.data.data.token)
                .then((res) => {
                    dispatch(addMiddleware(res.data.message));
                    router.push('/dashboard')
                })
                .catch((err) => console.error(err.message));

                if(responsee.data.data.role_as == 1) {
                    complaintsAdminApi(responsee.data.data.token)
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

                if(responsee.data.data.role_as == 2 ||responsee.data.data.role_as == 3 ||responsee.data.data.role_as == 4) {
                    complaintsApi(responsee.data.data.token)
                    .then((res) => {
                        dispatch(addhelper(res.data))
                    })
                    .catch((err) => {console.error(err.message)});
                }

            }

        })
        .catch( () => {seterr('email or Password does not exist')});
        
    }

    return (
        <form>
            <Head>
                <meta name="keywords" content={`Login to ${appName} , Login to App, Login to Programming`}></meta>
                <meta name="description" content={`Login to ${appName} : We are a company interested in programming and developing website and mobile applications`} />
                <title>Login to {appName}</title>
                <meta property="og:description" content={`Login to ${appName} : We are a company interested in programming and developing website and mobile applications`} />
                <meta property="og:title" content={`Login to ${appName}`} />
            </Head>
            <div className="container height-con"  style={{maxWidth:'1000px',margin:'5% auto'}} >
                <div className=" margin padding app-box-shadow" >
                    <div className="center" >
                        <div className="bar margin display-container" >
                            <div className="bar-item xlarge textc-5 bottombar borderc-5">Login</div>
                        </div>
                    </div>
                    <div className="row-padding">
                        <div className="col s100 padding" >
                            <input type="email" className="input transparent round textc-2" placeholder="Email" name="email" value={email} onChange={e => setemail(e.target.value) }/>
                        </div>
                        <div className="col s100 padding" >
                            <input type="password" className="input transparent round textc-2" placeholder="Password" name="password" value={password} onChange={e => setpassword(e.target.value) }/>
                        </div>
                        {err != '' ?
                            <div className="col s100 " >
                                <div className="large textc-4"> * {err}</div>
                            </div>
                        :
                        null
                        }
                        <div className="col s100 padding" >
                            <button type="submit" className="btn round-large display-block" name="signup_button" onClick={(e) => login(e)} >Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default Login