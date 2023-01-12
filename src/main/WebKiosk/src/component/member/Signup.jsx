import React , { useState , useEffect } from 'react'
/* CSS */
import axios from 'axios';

export default function Signup( props ){

    const setmember = () => {

        let info = {
            mname : document.querySelector('.mname').value ,
            memail : document.querySelector('.memail').value ,
            mpassword : document.querySelector('.mpassword').value ,
            mphone : document.querySelector('.mphone').value,
        }

        //  @CrossOrigin(origins = "http://localhost:3000")
        axios           // 3. axios 비동기통신 이용한 서버[spring] 통신
            .post( "http://localhost:8080/member/setmember" ,  info ) // 요청
            .then( res => { alert( res.data ) } )                    // 응답
    }

    return(
        <>
            <h3> 회원가입 페이지 </h3>
            <div>
                이름 : <input type="text" className="mname">
                이메일 : <input type="text" className="memail">
                비밀번호 : <input type="text" className="mpassword">
                전화번호 : <input type="text" className="mphone">
            </div>
            <button type="button" onClick={ setmember } > 가입하기 </button>
        </>
    );

} // end