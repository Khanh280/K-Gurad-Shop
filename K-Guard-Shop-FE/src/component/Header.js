import "bootstrap/dist/css/bootstrap-grid.css"
import React from "react";
import {Link, NavLink} from "react-router-dom";

export default function Header() {
    return (
        <div id="header-nav" className="row">
            <div id="header-nav-logo" className="col-md-2">
                <img src="/anh/KGuard3.png" alt="" style={{height: "13vh", width: "13vh"}}/>
            </div>
            <div id="header-nav-option" className="col-md-10">
                <ul>
                    <li>
                        <NavLink to="/"
                                 style={({isActive}) => {
                                     return {
                                         backgroundColor: isActive ? "#F4882F" : "   ",
                                         color: isActive ? "black" : "",
                                         borderRadius: "10px",
                                     }
                                 }}
                        >Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/b"
                                 style={({isActive}) => {
                                     return {
                                         backgroundColor: isActive ? "#F4882F" : "   ",
                                         color: isActive ? "black" : "",
                                         borderRadius: "10px",
                                     }
                                 }}
                        >Giới thiệu</NavLink>
                    </li>
                    <li id="nav-product">
                        <NavLink to="/c"
                                 style={({isActive}) => {
                                     return {
                                         backgroundColor: isActive ? "#F4882F" : "   ",
                                         color: isActive ? "black" : "",
                                         borderRadius: "10px",
                                     }
                                 }}
                        >Sản phẩm
                        </NavLink>
                        <ul id="sub-nav-product">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/d"
                                 style={({isActive}) => {
                                     return {
                                         backgroundColor: isActive ? "#F4882F" : "   ",
                                         color: isActive ? "black" : "",
                                         borderRadius: "10px",
                                     }
                                 }}
                        >Thương hiệu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/e"
                                 style={({isActive}) => {
                                     return {
                                         backgroundColor: isActive ? "#F4882F" : "   ",
                                         color: isActive ? "black" : "",
                                         borderRadius: "10px",
                                     }
                                 }}
                        >Liên hệ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className="me-5"
                                 style={({isActive}) => {
                                     return {
                                         backgroundColor: isActive ? "#F4882F" : "   ",
                                         color: isActive ? "black" : "",
                                         borderRadius: "10px",
                                     }
                                 }}
                        >Đăng nhập
                            <i style={{marginLeft: "0.5rem"}}
                               className="fa-regular fa-user"></i>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}