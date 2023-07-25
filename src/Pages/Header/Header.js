import React from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import { format } from "date-fns"
import './Header.css'
import { useNavigate } from "react-router-dom";
import { faCalendar, faBed, faCalendarDays, faPlane, faCar, faTaxi, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = ({ type }) => {
    const navigate =useNavigate();
    const [destination, setDestination]=useState('')
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const handleSearch=()=>{
        navigate("/hotels" , {state:{destination, date,options}})
    }
    return (
        <div className='header'>
            <div
                className={
                    type === "list" ? "headerContainer listMode" : "headerContainer"
                }
            >
                <div className='headerlist'>
                    <div className='headerlistItem active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className='headerlistItem'>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className='headerlistItem'>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className='headerlistItem'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className='headerlistItem'>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" && (
                    <>
                        <h1>A lifetime of discount? It's Genius</h1>
                        <p className='headerDesc'>
                            Get rewarded for your travels  unlock instant saving of 10% or
                            width a free lamabooking accont
                        </p>
                        <button className='headerBtn'>Sign in / Register</button>

                        <div className='headerSearch'>
                            <div className='headerSearchItem'>
                                <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
                                <input type='text'         onChange={(e) => setDestination(e.target.value)} placeholder='What are you going?' className='headerSearchText noBorder' />
                            </div>

                            <div className='headerSearchItem'>
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span onClick={() => setOpenDate(!openDate)} className='headerSearchText' > {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                                {
                                    openDate && <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="date"
                                        miDate={new Date()}
                                    />
                                }
                            </div>
                            <div className='headerSearchItem'>
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText' > {`${options.adult} adult. ${options.children} children .${options.room} room`} </span>
                                {openOptions && <div className='options'>
                                    <div className='optionsItem'>
                                        <span className='optionText'>Adult</span>
                                        <div className='optionCounter'>
                                            <button disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")} className='optionCounterButton'>-</button>
                                            <span className='optionCounterNumber'>{options.adult}</span>
                                            <button onClick={() => handleOption("adult", "i")} className='optionCounterButton'>+</button>
                                        </div>
                                    </div>

                                    <div className='optionsItem'>
                                        <span className='optionText'>children</span>
                                        <div className='optionCounter'>
                                            <button disabled={options.children <= 1} onClick={() => handleOption("children", "d")} className='optionCounterButton'>-</button>
                                            <span className='optionCounterNumber'>{options.children}</span>
                                            <button onClick={() => handleOption("children", "i")} className='optionCounterButton'>+</button>
                                        </div>
                                    </div>

                                    <div className='optionsItem'>
                                        <span className='optionText'>Room</span>
                                        <div className='optionCounter'>
                                            <button disabled={options.room <= 1} onClick={() => handleOption("room", "d")} className='optionCounterButton'>-</button>
                                            <span className='optionCounterNumber'>{options.room}</span>
                                            <button onClick={() => handleOption("room", "i")} className='optionCounterButton'>+</button>
                                        </div>
                                    </div>
                                </div>
                                }
                            </div>
                            <div className='headerSearchItem'>
                                <button onClick={handleSearch} className='headerBtn'>Search</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;