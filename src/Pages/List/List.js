import React, { useState } from 'react';
import Navber from '../Navber/Navber';
import Header from '../Header/Header';
import './List.css'
import { format } from "date-fns";
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import SearchItem from '../SearchItem/SearchItem';

const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options);
    const [openDate, setOpenDate] = useState()
    return (
        <div>
            <Navber></Navber>
            <Header type="list"></Header>
            <div className='listContainer'>
                <div className='listWrapper'>
                    <div className='listSearch'>
                        <h1 className='listTitle'>Search</h1>
                        <div className='listItem'>
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className='listItem'>
                            <label>Check In Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(
                                date[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && (
                                <DateRange
                                    ranges={date}
                                    onChange={item => setDate([item.selection])}
                                    miDate={new Date()}
                                />
                            )}
                        </div>
                        <div className='lsItem'>
                            <label>Options</label>
                            <div className='isOptions'>
                            <div className='lsOptionItem'>
                                <span className='lsOptionText'>Min price <small>per night</small></span>
                                <input type='number' className='lsOptionInput' />
                            </div>
                            <div className='lsOptionItem'>
                                <span className='lsOptionText'>Max price <small>per night</small></span>
                                <input type='number' className='lsOptionInput' />
                            </div>
                            <div className='lsOptionItem'>
                                <span className='lsOptionText'>Adult</span>
                                <input type='number' min={1} className='lsOptionInput' placeholder={options.adult}/>
                            </div>
                            <div className='lsOptionItem'>
                                <span className='lsOptionText'>children</span>
                                <input type='number' min={0} className='lsOptionInput' placeholder={options.children}/>
                            </div>
                            <div className='lsOptionItem'>
                                <span className='lsOptionText'>Room</span>
                                <input type='number' min={1} className='lsOptionInput' placeholder={options.room} />
                            </div>
                        </div>
                        </div>
                        <button className='btnSearch'>Search</button>
                    </div>
                    <div className='listResult'>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                        <SearchItem></SearchItem>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;