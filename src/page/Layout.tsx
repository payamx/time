import React from 'react';
import Header from "../component/Header";
import Home from "./Home";
import Footer from "../component/Footer";

const Layout = () => {
    return (
        <>
            <div className="">

                <div dir="rtl"  className="App bg-mainbody dark:bg-darkback   ">
                    <div className="  ">
                        <Header/>

                    </div>
                    <div className=" -mt-14  ">
                        {/*<Home/>*/}

                    </div>
                    <div className=" " >
                        <Footer/>
                    </div>

                </div>


            </div>

        </>
    );
};

export default Layout;
