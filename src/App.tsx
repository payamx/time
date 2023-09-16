import React, {useState,useEffect} from 'react';
import './App.css';
import Header from "./component/Header";
import Home from "./page/Home";
import Footer from "./component/Footer";

function App() {


    return (

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
  );
}

export default App;
