import './App.css';
import React from "react";
import LoginForm from "./component/login/LoginForm";
import Header from "./component/Header";
import {Routes, Route} from "react-router";
import Footer from "./component/Footer";
import Home from "./component/Home";

function App() {
    return (
        <>
            <Header/>
            <div style={{minHeight: "97.5vh"}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<LoginForm/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
