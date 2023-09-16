import React, { useState } from 'react';
// @ts-ignore
import moment from 'moment-jalaali';

const PersianCalendar = () => {
    let moment = require('moment-jalaali');

    const [selectedDate, setSelectedDate] = useState(moment());

    const handlePrevMonth = () => {
        setSelectedDate(moment(selectedDate).subtract(1, 'jMonth'));
    };

    const handleNextMonth = () => {
        setSelectedDate(moment(selectedDate).add(1, 'jMonth'));
    };

    const renderCalendar = () => {
        const startOfMonth = moment(selectedDate).startOf('jMonth');
        const endOfMonth = moment(selectedDate).endOf('jMonth');
        const startDate = moment(startOfMonth).startOf('week');
        const endDate = moment(endOfMonth).endOf('week');
        const calendar = [];

        let currentDate = moment(startDate);
        while (currentDate.isSameOrBefore(endDate)) {
            // @ts-ignore
            const isCurrentMonth = currentDate.isSame(selectedDate, 'jMonth');
            const isToday = currentDate.isSame(moment(), 'day');

            calendar.push(
                <div
                    key={currentDate.format('jYYYY-jMM-jDD')}
                    className={`calendar-day ${isCurrentMonth ? 'current-month' : 'other-month'} ${isToday ? 'today' : ''}`}
                >
                    {currentDate.format('jD')}
                </div>
            );

            currentDate.add(1, 'day');
        }

        return calendar;
    };
    return (
        <div className="">
            <div className="">
                <button onClick={handlePrevMonth}>Previous Month</button>
                <div className="">{selectedDate.format('jMMMM jYYYY')}</div>
                <button onClick={handleNextMonth}>Next Month</button>
            </div>
            <div className="">{}</div>
        </div>
    );
};

export default PersianCalendar;