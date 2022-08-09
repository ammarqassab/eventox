import React from 'react';
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { appName } from '../../src/Api/AuthApi';
import { edithelperAdminApi } from '../../src/Api/AdminApi';
import Siderbar from '../../src/components/Dashboard/Siderbar/Siderbar';

const Helpers = () => {
    
    const auth = useSelector(state => state.auth.data);
    const helper = useSelector( (state) => state.helper.data);
    const dispatch = useDispatch();
    const middleware = useSelector(state => state.auth.middleware);

    const [title, settitle] = React.useState('');

    let searchusers = helper || [];

    if(title != '') {
        searchusers = [] ;
        for(let i in helper) {
            if(helper[i].fullname.toLowerCase().includes(title.toLowerCase()) == true) {
                searchusers.push(helper[i]);
            }
        }
    }

    // const edithelper = (id, index) => {

    //     edithelperAdminApi(auth.token, id)
    //     .then(() => {
    //         dispatch(deleteusers(index));
    //     })
    //     .catch(() => console.log("حدث خطأ في حذف المستخدم"));
        
    // };

    const [id,setid] = React.useState(null);
    const [fullname,setfullname] = React.useState("");
    const [password,setpassword] = React.useState("");
    const [cpassword,setcpassword] = React.useState("");
    const [err,seterr] = React.useState("");
    const [handleForm,sethandleForm] = React.useState(false);

    const edithelper = (e) => {
        e.preventDefault();

        if(fullname =='') return seterr('Enter the Full Name');
        if(password =='' || password.length < 8) return seterr('Enter a password greater than 8 numbers or letters');

        seterr('')
        
        let formData = new FormData();

        formData.append("fullname", fullname);
        formData.append("password", password);
        formData.append("c_password", cpassword);

        edithelperAdminApi(auth.token, id, formData)
        .then((res) => {
            // dispatch(deleteusers(index));
            seterr(res.data.message)
        })
        .catch((err) => {seterr(err.message)});
        
    }

    const handle = (iteme) => {

        if(handleForm == false) {
            sethandleForm(true)
        } else {
            setid(null)
            setfullname('')
            setpassword('')
            setcpassword('')
            seterr('')
            return sethandleForm(false)
        }
        setid(iteme.id)
        setfullname(iteme.fullname)
        window.scrollTo({top:0,behavior:"smooth",});
    }

    return (
        <>
            {auth && middleware == 'Admin' ?
            <>
            <Head>
                <title>Helpers - {appName}</title>
            </Head>

            <Siderbar user='Admin' />

            {handleForm ?
            <div className='animate-top'>
                <form>
                    <div className="container"  style={{maxWidth:'1000px',margin:'5% auto'}} >
                        <div className=" margin padding app-box-shadow" >
                            <div className="center" >
                                <div className="bar margin display-container" >
                                    <div className="bar-item xlarge textc-5 bottombar borderc-5">Edit Helper</div>
                                </div>
                            </div>
                            <div className="row-padding">
                                <div className="col s100 padding" >
                                    <input type="email" className="input transparent round textc-2" placeholder="Full Name" name="email" value={fullname} onChange={e => setfullname(e.target.value) }/>
                                </div>
                                <div className="col s100 padding" >
                                    <input type="password" className="input transparent round textc-2" placeholder="Password" name="password" value={password} onChange={e => setpassword(e.target.value) }/>
                                </div>
                                <div className="col s100 padding" >
                                    <input type="password" className="input transparent round textc-2" placeholder="c_Password" name="c_password" value={cpassword} onChange={e => setcpassword(e.target.value) }/>
                                </div>
                                {err != '' ?
                                    <div className="col s100 " >
                                        <div className="large textc-4"> * {err}</div>
                                    </div>
                                :
                                null
                                }
                                <div className="col s100 padding" >
                                    <button type="submit" className="btn round-large display-block" name="signup_button" onClick={(e) => edithelper(e)} >Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            :null
            }

            <div className='height-con animate-top'>
                <div className=' center margin padding'>
                    <span className=' width-fit-content bottombar borderc-4 textc-4 xxlarge'>Helpers</span>
                </div>

                <div className="transparent margin padding textc-2">
                    <div className='display-container margin-bottom padding'>
                        <div className=' display-middle width-50'>
                            <input type="text" className="input transparent round textc-2 " placeholder="Search Full Name" onChange={(e) => settitle(e.target.value)} />
                            <br/>
                        </div>
                    </div>

                    <div className='responsive margin-top user-select'>
                        <table className="table-all">
                        <thead>
                            <tr>
                                <th>index= {helper ? helper.length : 0}</th>
                                <th>Id</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchusers.length > 0 ? searchusers.map((iteme, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{iteme.id}</td>
                                <td>{iteme.fullname}</td>
                                <td>{iteme.email}</td>
                                <td><span className=" button bgc-4 hover-bgc-2 round-large margin" onClick={() => handle(iteme)}><span className="fas fa-edit textc-1" onClick={() => handle(iteme)} ></span></span></td>
                            </tr>
                            )
                            : <tr><td>no Users</td></tr>
                            }
                        </tbody>
                        </table>
                    </div>

                </div>
            </div>

            </>
            :null
            }

        </>
    );
}
export default Helpers