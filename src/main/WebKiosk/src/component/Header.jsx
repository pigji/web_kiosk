// 컴포넌트 호출
import React from 'react';
/* css */
/* 이미지 적용 */
import { HashRouter, BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";

// 2.
export default function Header( props ) {
    return(
        <div>
            <img className="logo" src={logo}  />
            <h3 className="header_name"> 헤더 </h3>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/"> Home </Link></li>
            </ul>
        </div>
    );
}