// 컴포넌트 선언
import React, {useEffect, useState} from 'react';

// 1. jsx 파일 불러오기 [ 해당 컴포넌트 선언 ]
import Signup from './member/Signup'; /* 회원가입 */
/* 로그인 */
/* 가게 등록 */
/* 가게 목록 */
/* 상품 등록 */
/* 상품 목록  */
/* 고객 주문 */
/* 고객 주문목록 */

// ** 라우터 설치
import { HashRouter, BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import axios from "axios";

// 2.
export default function Main( props ){
    return(
        <>
            <BrowserRouter>
                <Header/>
                    <h3> Main 페이지 </h3>
                </Footer>
                <Routes>
                    <Route path="/" />
                    {/* 회원가입 */}
                    <Route path={"/member/signup"} element={ <Signup /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
} // end