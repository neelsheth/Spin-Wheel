import React, { useRef, useState } from 'react'
import './style.css'
import spinlogo from './image/well 2.png'
import emailLogo from './image/email.png'
import phoneLogo from './image/phone.png'
import Spin from './Spin'

export default function Home() {
    const [clicked, setClicked] = useState(false)
    const numRef= useRef();
    const emailRef = useRef();

    const openSpin = ()=>{
        if(numRef.current.value == "" || emailRef.current.value == ""){
            alert('Enter all input');
        }
        else{
            setClicked(true)
        }
    }







    return (
        <>
            {!clicked && <div className='conatiner'>
                <div className='logo'>
                    <img className='spinlogo' src={spinlogo}></img>
                </div>
                <div>
                    {/* ---------------------------------- ----------------------------------*/}
                    <div className='first widthSet'>This is how EngageBud looks like in action!</div>
                    <div>

                        {/* ---------------------------------- ----------------------------------*/}

                        <div className='flexRow widthSet'>

                            <div className='marginRight'>
                                <img src={emailLogo} width='20px' height='20px'></img>
                            </div>
                            <div className='widthSet'>
                                <div>Email</div>
                                <input type='email' placeholder='joe@gmail.com' ref={emailRef} required></input>
                            </div>
                        </div>

                        {/* ---------------------------------- ----------------------------------*/}

                        <div className='flexRow widthSet'>

                            <div className='phoneNum marginRight'>
                                <img src={phoneLogo} width='20px' height='20px'></img>
                            </div>
                            <div>
                                <div>Phone number</div>
                                <input placeholder='+91 98256 XXXXX' ref={numRef} required></input>
                            </div>
                        </div>


                        <div className='checkBox widthSet'>
                            <input className='checkboxLogo' type='checkbox' value={true}></input>
                            <div>
                                I agree to receiving recurring automated messages at the number I have provided.
                                Consent is not a condition to purchase.
                            </div>
                        </div>



                        <button className='greenBtn' onClick={openSpin}>Try Your luck</button>

                        <div className='tnc'>*You can spin the wheel only once! *If you win, you can claim your coupon for 10 minutes only! </div>

                        <div className='flexRight'>

                            <div>No, I don’t feel lucky <span className='noLucky'> X</span></div>
                        </div>


                    </div>
                </div>
            </div>}

            {clicked && <Spin></Spin>}
        </>
    )
}
