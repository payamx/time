import React from 'react';
import { ImDownload,ImAndroid } from "react-icons/im";
import { BsFillBasket3Fill } from "react-icons/bs";

const DownloadPage = () => {

    return (
        <>

            <div className=" ">
                <div className=" inline-block font-extrabold border-b-4 py-4 text-browntime  "> معرفی کتابِ روشنفکران
                </div>
                <div className="  w-full flex justify-center py-11">
                    <img src="book.jpg" />
                </div>
                <div className="  px-6 tracking-normal text-right">
                    در حدود 200 سال از زمانی می‌گذرد که روشنفکرانِ غیرِ روحانی به عنوان راهنما و آموزگار بشریت، جانشینِ
                    دانش آموختگانِ قدیم شدند. ما به شماری از مواردِ فردی کسانی که می‌خواستند به بشریت اندرز دهند نگاهی
                    انداختیم. بویژه نگرش آنان نسبت به حقیقت، شیوه‌ی جستجو و ارزیابی شواهد از سوی آنان، واکنش آنان نه
                    تنها در برابر بشریت به طور کلی، بلکه در برابرِ انسان‌ها به طور خاص، و طرز رفتارشان را با دوستان،
                    همکاران، خدمتکاران، بویژه خانواده‌ی خویش بررسی کردیم؛ و به اختصار به پیامدهای اجتماعی و سیاسی پیروی
                    از اندرزِ آنان پرداختیم.

                    چه نتایجی باید گرفت؟ خوانندگان خود داوری خواهند کرد. اما به گمان من، اینک در میان مردم در قبال
                    روشنفکرانی که می‌خواهند برای ما موعظه کنند، نوعی تردید وجود دارد؛ و مردمِ عادی گرایشی روز افزون
                    یافته‌اند که به حق و صلاحیتِ دانشگاهیان، نویسندگان و فیلسوفان، هر اندازه هم که برجسته باشند، در
                    اینکه به ما بگویند امور خود را چگونه اداره کنیم با نظرِ مخالف بنگرند. چنین می‌نماید که اکنون این
                    باور رواج می‌یابد که روشنفکران، آموزگارانی خردمندتر یا سرمشق‌هایی با ارزشتر از جادوگران و کشیشانِ
                    قدیم نیستند. من در این شک، سهیم هستم. ده دوازده تن از مردمی‌که به طور اتفاقی از کوچه و خیابان
                    برگزیده شده باشند، احتمالا بیش از گروهِ نمونه‌ای از روشنفکران درباره‌ی مسائل اخلاقی و سیاسی عقایدِ
                    معقول ابراز خواهند کرد. اما من از این فراتر می‌روم. یکی از درس های اصلی قرن غم انگیز ما، که شاهد
                    قربانی شدن میلیون‌ها انسانِ بیگناه در طرح‌هایی برای بهبودِ سرنوشت بشریت بوده، این است: از روشنفکران
                    بپرهیزید. نه تنها باید آن‌ها را از اهرم‌های قدرت دور نگاه داشت، بلکه هنگامی‌که می‌خواهند اندرز جمعی
                    بدهند باید هدف بدگمانی ویژه‌ای قرار گیرند. از کمیته‌ها، کنفرانس‌ها و مجامع روشنفکران بپرهیزید. به
                    بیانیه‌های عمومی‌که از صفوفِ فشرده‌ی آنان صادر می‌شود، اعتماد نکنید. داوری آن‌ها را درباره رهبرانِ
                    سیاسی و حوادثِ مهم بی‌اعتبار بشمارید. زیرا روشنفکران نه تنها مردمانی بسیار فردگرا و تکرو نیستند،
                    بلکه از الگوهای رفتاری معین و منظمی‌پیروی می‌کنند. به عنوان یک گروه، در محافلِ کسانی که تأییدشان را
                    می‌جویند و ارج می‌گذارند غالبا فوق‌العاده همرنگِ جماعت هستند؛ و این است آنچه آن‌ها را در حالتِ جمعی،
                    آن همه خطرناک می‌سازد. زیرا فضایی از اندیشه و عقاید رایج به وجود می‌آورد که اغلب به شیوه‌های عملیِ
                    خردستیز و ویرانگر منجر می‌شود.

                    از همه مهمتر، باید در همه حال چیزی را که روشنفکران از روی عادت فراموش می‌کنند به خاطر داشته باشیم و
                    آن این است که "مردم" از برداشت‌ها و مفاهیم مهمترند و باید الویت داشته باشند.
                </div>


                {/*wrap all downloads*/}
                <div className="mx-4 py-8 ">
                            {/*first*/}

                    <div className="md:flex  rounded mb-5   md:justify-between bg-darkgrey dark:bg-darkapp

                     ">

                        <div className="   text-greytext  p-8 md:px-10  text-xl self-center mx-auto dark:text-gray-400
                                                font-bold
                         ">اپلیکیشن Time.ir</div>

                        <div className="md:flex bg-mainbody  w-full py-5 dark:bg-darkback">

                            <p className="   text-center  md:text-start self-center mx-8 flex-grow py-5">
                                 نسخه‌ی اندروید اپلیکیشن تایم را می‌توانید از لینک روبرو دانلود
                                کنید
                            </p>

                            <div className="   flex-col text-white font-extrabold space-y-6 my-2   ">

                                <button className=" flex px-8  py-3 md:mx-2 bg-browntime  block  mx-auto rounded
                                 dark:text-gray-700
                                 " >
                                    <a>دانلود از کافه بازار</a>
                                    <span className="px-2"><BsFillBasket3Fill size={20}/></span>
                                </button>

                                <button className=" px-8   py-3 md:mx-2  bg-browntime   block  mx-auto flex rounded
                                dark:text-gray-700
                                ">
                                    <a > دانلود مستقیم </a>
                                    <span className="px-4 "><ImAndroid size={20} /></span>
                                </button>

                            </div>
                        </div>
                    </div>

                        {/*seconde*/}
                    <div className="md:flex    md:justify-between bg-mainbody mb-4 items-center rounded pb-7
                    dark:bg-darkback
                    md:pb-0">
                        <div className="bg-darkgrey text-greytext text-xl py-3 px-8 dark:bg-darkapp dark:text-gray-400">تقویم چاپی ۱۴۰۲</div>
                        <div className="  justify-start  py-5">تقویم چاپی سال 1402 خورشیدی نسخه A3</div>

                        <button className="px-9 py-3  bg-browntime text-white m-2 font-extrabold flex
                         rounded mx-auto md:mx-2 dark:text-gray-700" >
                            <a> دانلود نسخه A3 </a>
                            <span className="px-2 "><ImDownload size={20}/></span></button>

                    </div>

                            {/*thirth*/}

                    <div className="md:flex  md:justify-between bg-mainbody mb-2  items-center rounded w-full pb-7
                    dark:bg-darkback
                    md:pb-0">
                        <div className="bg-darkgrey text-greytext text-xl py-3 px-8 rounded
                        dark:bg-darkapp dark:text-gray-400
                        ">تقویم چاپی ۱۴۰۲</div>
                        <div className="py-5 ">تقویم چاپی سال 1402خورشیدی نسخه A4</div>

                        <button className="px-9 py-3  bg-browntime text-white m-2 font-extrabold flex self-center
                         rounded mx-auto md:mx-2 dark:text-gray-700" >
                            <a>  دانلود نسخه A4   </a>
                            <span className="px-2 "><ImDownload size={20}/></span>
                        </button>

                    </div>
                </div>

            </div>
        </>
    );
};

export default DownloadPage;
