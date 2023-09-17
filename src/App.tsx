import React from 'react';
import './App.css';
import layout from "./page/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
function App() {


    return (

    <>
        <div >

            <div className="">

                <div dir="rtl"  className="App bg-mainbody dark:bg-darkback   ">
                    <div className="  ">
                        <Header/>

                    </div>
                    <div className=" -mt-14  ">
                        <Home/>

                    </div>
                    <div className=" " >
                        <Footer/>
                    </div>

                </div>


            </div>



        </div>
    </>

  );
}

export default App;
