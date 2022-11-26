import React from 'react'
import spinlogo from './image/well 2.png'
import copy from "copy-to-clipboard";  

export default function Win() {
    const copyCode = ()=>{
        copy('XAXPDF20');
    }



    return (
        <div className='conatiner'>

            <div className='winlogo'>
                <img className='spinlogo' src={spinlogo}></img>
            </div>

            <div>
                <div className='first widthSet'>Congrats! You Won:</div>
                <div className='first widthSet'>20% off Coupon</div>
                <div className='first widthSet'>on Best Sellers</div>
                <button className='copybtn'>XAXPDF20 <span className='copyBtnnSpan' onClick={copyCode}>COPY</span></button>
                <button className='greenBtn' onClick={copyCode}>Close Panel & Copy</button>
                
            
            </div>
        </div>
    )
}
