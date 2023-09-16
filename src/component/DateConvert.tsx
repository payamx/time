import React, {ChangeEvent, useCallback, useEffect, useId, useRef, useState} from 'react';
import moment from "jalali-moment";
import {datetype} from "../Type/ApiTypes";
const DateConvert = () => {
    const selectYear = [
        {key: "jalali", name: "خورشیدی به میلادی و قمری"},
        {key: "gregorian" ,name: "میلادی به خورشیدی و قمری"},
        {key: "hijri", name: "قمری به خورشیدی و میلادی "}
    ];

    const yearid = useId();

    let hijri = require('moment-hijri');
    const dayRef = useRef<HTMLSelectElement | null>(null);
    const monthRef = useRef<HTMLSelectElement | null>(null);
    const yearRef = useRef<HTMLInputElement | null>(null);

    //single convert state
    const d = new Date();
    const [date, setDate] = useState<datetype>({year: "", month: "", day: ""});


    //form switch between year state
    const [YearName, setYearName] = useState("jalali");

    // multi convert state

    const [convert, setConvert] = useState({
        val1: "", val2: "", val3: "",
        val4: "", val5: "", val6: "",

    });
    // input validation error
    // const [error, setError] = useState<string>('');
    // const validateDate = (year: string, month: string, day: string) => {
    //     if (!year || !month || !day) {
    //         setError('Please fill in all fields.');
    //         return false;
    //     }


    //form 31 days number
    const numbers = Array.from({length: 31}, (_, i) => i + 1);
    const months = Array.from({length: 12}, (_, i) => i + 1);

//convert  select form to jalali gregorian hijri by gregorian date
    const selectChange = (event: { target: { value: string } }) => {
        const yearValue = event.target.value;
        setYearName(yearValue)
        switch (yearValue) {

            case "jalali":


                const jyear = moment(d, "YYYY/MM/DD").locale("fa").format("YYYY");
                const jmonth = moment(d, "YYYY/MM/DD").locale("fa").format("MM");
                const jday = moment(d, "YYYY/MM/DD").locale("fa").format("DD");
                setDate({year: jyear, month: jmonth, day: jday})

                break;

            case "gregorian":


                const gyear = moment(d, "YYYY/MM/DD").format("YYYY");
                const gmonth = moment(d, "YYYY/MM/DD").format("MM");
                const gday = moment(d, "YYYY/MM/DD").format("DD");
                setDate({year: gyear, month: gmonth, day: gday})

                break;

            case  "hijri":


                const hyear = hijri().format("iYYYY");
                const hmonth = hijri().format("iMM");
                const hday = hijri().format("iD");
                setDate({year: hyear, month: hmonth, day: hday})

                break;
        }


    }


    //convert MULTIPLE date by input
    const handleButtonClick = () => {

        const getDayRef = dayRef.current?.value;
        const getMonthRef = monthRef.current?.value;
        const getYearRef = yearRef.current?.value;
        console.log(getDayRef,getMonthRef,getYearRef)

        switch (YearName) {
            case "jalali":


                const j_to_m_Number = moment.from(`${getYearRef}/${getMonthRef}/${getDayRef}`, "fa", "YYYY/MM/DD")
                    .locale("en").format("YYYY-MM-DD");

                const j_to_m_word = moment.from(`${getYearRef}/${getMonthRef}/${getDayRef}`, "fa", "YYYY/MM/DD")
                    .locale("en").format('YYYY,MMMM dddd,D');

                const j_to_j_Number = moment.from(`${getYearRef}/${getMonthRef}/${getDayRef}`, "fa", "YYYY/MM/DD")
                    .locale("fa").format("YYYY-MM-DD");

                const j_to_j_word = moment.from(`${getYearRef}/${getMonthRef}/${getDayRef}`, "fa", "YYYY/MM/DD")
                    .locale("fa").format("YYYY,MMMM dddd,D");

                const hijriDateObj = hijri(j_to_m_Number);
                const j_to_h_number = hijriDateObj.format('iYYYY/iMM/iDD ');
                const j_to_h_word = hijriDateObj.format('iYYYY/iMMMM/dddd ');


                setConvert({
                    val1: j_to_j_Number,
                    val2: j_to_j_word,
                    val3: j_to_m_Number,
                    val4: j_to_m_word,
                    val5: j_to_h_number,
                    val6: j_to_h_word
                })



                break;


            case "gregorian":


                const m_to_m_Number = moment.from(`${getYearRef}/${getMonthRef}/${getDayRef}`, "en", "YYYY/MM/DD")
                    .locale("en").format("YYYY-MM-DD");

                const m_to_m_word = moment.from(`${getYearRef}/${getMonthRef}/${getDayRef}`, "en", "YYYY/MM/DD")
                    .locale("en").format('YYYY,MMMM dddd,D');

                const m_to_j_Number = moment.from(`${getYearRef}/${getMonthRef}/${getDayRef}`, "en", "YYYY/MM/DD")
                    .locale("fa").format("YYYY-MM-DD");

                const m_to_j_word = moment.from(`${getYearRef}/${getMonthRef}/${getDayRef}`, "en", "YYYY/MM/DD")
                    .locale("fa").format("YYYY,MMMM dddd,D");

                const m_to_h_number = hijri(m_to_m_Number).format('iYYYY/iMM/iDD ');
                const m_to_h_word = hijri(m_to_m_Number).format('iYYYY/iMMMM/dddd ');
                setConvert({
                    val1: m_to_j_Number,
                    val2: m_to_j_word,
                    val3: m_to_m_Number,
                    val4: m_to_m_word,
                    val5: m_to_h_number,
                    val6: m_to_h_word
                })


                break;

            case "hijri":

                const h_to_h_number = hijri(`${getYearRef}/${getMonthRef}/${getDayRef}`, "iYYYY/iMM/iDD").format('iYYYY/iMM/iDD ');
                const h_to_h_word = hijri(`${getYearRef}/${getMonthRef}/${getDayRef}`, "iYYYY/iMM/iDD").format('iYYYY/iMMMM/iDD dddd، D MMMM ', 'ar');
                const h_to_m_number = hijri(`${getYearRef}/${getMonthRef}/${getDayRef}`, "iYYYY/iMM/iDD").format('YYYY/MM/DD ');
                const h_to_m_word = hijri(`${getYearRef}/${getMonthRef}/${getDayRef}`, "iYYYY/iMM/iDD").format('YYYY/MMMM/dddd ');
                const h_to_j_number = hijri(`${getYearRef}/${getMonthRef}/${getDayRef}`, "iYYYY/iMM/iDD").locale('fa').format('jYYYY/jMM/jDD ');
                const h_to_j_Number = moment.from(h_to_m_number, "en", "YYYY/MM/DD")
                    .locale("fa").format("YYYY-MM-DD");

                const h_to_j_word = moment.from(h_to_m_number, "en", "YYYY/MM/DD")
                    .locale("fa").format("YYYY,MMMM dddd,D");


                setConvert({
                    val1: h_to_j_Number,
                    val2: h_to_j_word,
                    val3: h_to_m_number,
                    val4: h_to_m_word,
                    val5: h_to_j_Number,
                    val6: h_to_j_word
                })


                break;


        }



    };
    useEffect(() => {

        selectChange({ target: { value: YearName } });

        handleButtonClick()

    }, []);

    return (
        <>

            <div className=" bg-white   my-6 py-12 border-2 border-gray-300 dark:bg-darktop dark:text-white
             dark:border-darkback
             ">

                            {/*date select change*/}
                <div className=" inline-block font-extrabold border-b-4  py-2 px-6 text-browntime  "> تبدیل تاریخ</div>

                <div className="md:flex md:justify-around items-center mb-4  flex-wrap">
                    <div className="my-6 ">
                        <label className="block md:text-start "> نوع تبدیل </label>

                        <select  className="px-4  border-2  border-gray-300 dark:border-gray-600 rounded bg-white py-1 hover:bg-grey
                        dark:bg-darktop dark:text-white

                        "

                                defaultValue={YearName} onChange={selectChange} name="selectedYear">

                            {selectYear?.map((item, index) =>

                                <option key={index} value={item.key}>{item.name}</option>
                            )}
                        </select>


                    </div>

                                {/*day input*/}
                    <div className="my-6">
                        <label className="block md:text-start"> روز </label>
                        <select className=" px-24  md:px-16   border-2  border-gray-300 dark:border-gray-600 rounded bg-white py-1
                         dark:bg-darktop dark:text-white hover:bg-grey"
                                ref={dayRef}>
                            <option defaultValue={date.day || ''}>{date.day}</option>
                            {numbers.map((number) => (
                                <option key={number} defaultValue={number || ''}>
                                    {number}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="my-6">
                        <label className="block md:text-start">ماه</label>
                        <select
                            className="md:px-16 px-24 border-2  border-gray-300 dark:border-gray-600 rounded bg-white py-1hover:bg-grey
                            hover:bg-grey dark:bg-darktop dark:text-white"
                                ref={monthRef} defaultValue={date.month || ''}>


                            <option defaultValue={date.month || ''}>{date.month}</option>
                            {months?.map((month,index) => (
                                <option key={index} defaultValue={month || ''}>
                                    {month}
                                </option>))
                            }

                        </select>

                    </div>

                    <div className="my-6   mx-24 md:mx-0">
                        <label className="block md:text-start ">سال </label>
                        <input dir="ltr"
                               className=" hover:bg-grey block px-12 md:px-7  border-2 border-gray-300
                               dark:border-gray-600
                               rounded bg-white py-1 text-center dark:bg-darktop dark:text-white"
                               type="text" defaultValue={date.year || ''}  ref={yearRef}/>
                    </div>
                    <div className="  mt-5   ">

                        <button className="px-16 border-2 py-2 border-gray-300 rounded-2xl bg-browntime
                        dark:border-gray-600"
                                    onClick={handleButtonClick}
                        >تبدیل</button>
                    </div>
                </div>


                <div className="  md:flex justify-evenly bg-newgrey border border-2 m-6
                 dark:border-gray-600 dark:bg-darkback dark:text-white">


                    <div className="  border-b-2 md:border-b-0 md:border-l-2  md:pe-16 border-gray-300 my-6 pb-5
                    dark:border-gray-600">
                        <h5 className=" py-3 ">خورشیدی</h5>
                        <span className=" py-3 block font-bold"> {convert.val1}</span>
                        <span className=" py-3 block font-bold">{convert.val2}</span>
                    </div>

                    <div className="  border-b-2 md:border-l-2 md:border-b-0  md:pe-16 border-gray-300 my-6  pb-5
                    dark:border-gray-600">
                        <h5 className=" py-3">میلادی </h5>
                        <span className=" py-3 block font-bold"> {convert.val3}</span>
                        <span className=" py-3 block font-bold">{convert.val4}</span>
                    </div>

                    <div className="  my-6   pb-5">
                        <h5 className=" py-3">هجری </h5>
                        <span className=" py-3 block font-bold"> {convert.val5}</span>
                        <span className=" py-3 block font-bold">{convert.val6}</span>
                    </div>

                </div>

            </div>
        </>
    );
};

export default DateConvert;

