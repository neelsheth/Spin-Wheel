import React, { useState } from 'react'
import spinlogo from './image/offer.png'
import Win from './Win'
import gift from './image/gift.png'

export default function Spin() {
    const[win,setWin] =  useState(false)


    const spin = ()=>{
        let element = document.getElementById("circle")
        let deg = 0;
        element.style.pointerEvents = 'none';
        deg = Math.floor(100 + Math.random() * 1000)
        element.style.transition = 'all 5s ease-out';
        element.style.transform = `rotate(${deg}deg)`
        let num = 13 - ((deg % 360) / 360) * 5;
        console.log(num)
        spinwin();
        
        
    }

    function spinwin(){
        setTimeout(()=>{
            setWin(true)
        },5000)
    }



  return (
    <>
    {win ? <Win></Win> :
    <div className='flex'>
     
      <img className='offerLogo' id='circle' src={spinlogo}></img>
      <img className='gift' src={gift}></img>
      <button className='greenBtnSmall' onClick={spin}>SPIN</button>
    </div>
}
    
    </>

  )
}
