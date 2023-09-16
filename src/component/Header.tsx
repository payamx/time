import React from "react";
import ToggleDarkMode from "./ToggleDarkMode";

const Header = () => {
    return (
        <>
            <div>

                <div className="  " id="header ">
                    <div className="bg-[url('/public/time.jpg')]   bg-no-repeat   h-40  ">
                        <div className="  flex  items-center   md:mx-10  justify-between md:pt-10 ">
                            <div className="">
                                <ToggleDarkMode/>
                            </div>

                            <div className=" flex flex-row  text-white  ">
                                <img className="bottom" src={'/download.png'}  width="200px" height="100px"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default Header;
