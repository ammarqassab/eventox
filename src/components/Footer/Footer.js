/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import Link from 'next/link'
import { appName } from '../../Api/AuthApi'
import ApplicationLogo from '../ApplicationLogo'

const Footer = () => {
    return (
        <footer className="padding textc-2" >
            <hr className=' borderc-4'/>
            <div className='row' >
                <div className='col m50 padding' >
                    <h1 className=' xxlarge textc-4'><ApplicationLogo/></h1>
                </div>
                <div className='col m50 user-select padding' >
                    <h1 className="textc-4 hover-textc-4 xlarge" >Contact us :</h1>
                    <a href='https://wa.me/+963943435682' target='_blank' className="textc-2 hover-textc-4 large text-decoration-none display-block margin-top" >+963943435682</a>
                    <a href='mailto:ammarqassab1997@gmail.com' target='_blank' className="textc-2 hover-textc-4 large text-decoration-none display-block margin-top" >ammarqassab1997@gmail.com</a>
                </div>
                <div className='col s100' >
                    {/* <hr className=' borderc-4'/> */}
                </div>
                <div className='col m50 padding' >
                    <h1 className=' xlarge'>About :</h1>
                    <p className=' large'>
                        We are a leading software company creates innovative, effective applications that capture your brand and maximize your revenue .
                    </p>
                </div>
                <div className='col m50 padding margin-top display-container' >
                    <div className="row-padding display-middle width-100 center">
                        <div className="col s25 xxlarge" ><a href='https://wa.me/+963943435682' target='_blank' className="fab fa-facebook-f hover-textc-4 text-decoration-none" style={{color:"#0070b1"}}></a></div>
                        <div className="col s25 xxlarge" ><a href='https://wa.me/+963943435682' target='_blank' className="fab fa-whatsapp hover-textc-4 text-decoration-none"  style={{color:"#2de92d"}}></a></div>
                        <div className="col s25 xxlarge" ><a href='https://wa.me/+963943435682' target='_blank' className="fab fa-github hover-textc-4 text-decoration-none" ></a></div>
                        <div className="col s25 xxlarge" ><a href='https://wa.me/+963943435682' target='_blank' className="fab fa-linkedin hover-textc-4 text-decoration-none"  style={{color:"#39c7da"}}></a></div>
                    </div>
                    {/* <div className="row-padding center margin-top" >
                        <div className="col s25 hover-textc-4 xxlarge" ><span className="fab fa-cc-visa" ></span></div>
                        <div className="col s25 hover-textc-4 xxlarge" ><span className="fab fa-cc-amazon-pay" ></span></div>
                        <div className="col s25 hover-textc-4 xxlarge" ><span className="fab fa-cc-paypal" ></span></div>
                        <div className="col s25 hover-textc-4 xxlarge" ><span className="fab fa-cc-mastercard" ></span></div>
                    </div> */}
                </div>
            </div>
            <hr className=' borderc-4'/>
            <div className='large center'>Copyright © 2022 {appName} All Rights Reserved</div>
        </footer>
)
}

export default Footer