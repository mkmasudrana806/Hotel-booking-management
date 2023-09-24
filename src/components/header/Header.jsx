import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPerson,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const navigate = useNavigate();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 0,
  });

  // handle increament and decrement adult children room option
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // handle search
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  return (
    <div>
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          {/* header list container  */}
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Airport taxis</span>
            </div>
          </div>
          {type !== "list" && (
            <>
              <h1 className="headerTitle">
                A lifetime of discounts? It`s Genius.
              </h1>
              <p className="headerDesc">
                Get rewarded for your travels. unlocak instant savingof 10% or
                make with a free booking account
              </p>
              <button className="headerBtn">Sign in / Register</button>
              <div className="headerSearchContainer">
                <div className="headerSearch">
                  <div className="headerSearchItem">
                    <FontAwesomeIcon className="headerIcon" icon={faBed} />
                    <input
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      type="text"
                      placeholder="Where are you going?"
                      className="headerSearchInput"
                    />
                  </div>
                  <div className="headerSearchItem">
                    <FontAwesomeIcon
                      className="headerIcon"
                      icon={faCalendarDays}
                    />
                    <span
                      onClick={() => setOpenDate(!openDate)}
                      className="headerSearchText"
                    >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                      date[0].endDate,
                      "MM/dd/yyyy"
                    )}`}</span>
                    {openDate && (
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                      />
                    )}
                  </div>
                  <div
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchItem"
                  >
                    <FontAwesomeIcon className="headerIcon" icon={faPerson} />
                    <span className="headerSearchText">
                      {`${options.adult} adults ${options.children} children ${options.room} room`}
                    </span>
                    {openOptions && (
                      <div className="options">
                        <div className="optionItem">
                          <div className="optionText">Adult</div>
                          <div className="optionCounter">
                            <button
                              disabled={options.adult <= 1}
                              onClick={() => {
                                handleOption("adult", "d");
                              }}
                              className="optionCounterButton"
                            >
                              -
                            </button>
                            <div className="optionCounterNumber">
                              {options.adult}
                            </div>
                            <button
                              onClick={() => handleOption("adult", "i")}
                              className="optionCounterButton"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <div className="optionText">Children</div>
                          <div className="optionCounter">
                            <button
                              disabled={options.children <= 1}
                              onClick={() => handleOption("children", "d")}
                              className="optionCounterButton"
                            >
                              -
                            </button>
                            <div className="optionCounterNumber">
                              {options.children}
                            </div>
                            <button
                              onClick={() => handleOption("children", "i")}
                              className="optionCounterButton"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <div className="optionText">Room</div>
                          <div className="optionCounter">
                            <button
                              disabled={options.room <= 1}
                              onClick={() => handleOption("room", "d")}
                              className="optionCounterButton"
                            >
                              -
                            </button>
                            <div className="optionCounterNumber">
                              {options.room}
                            </div>
                            <button
                              onClick={() => handleOption("room", "i")}
                              className="optionCounterButton"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="headerSearchItem">
                    <button onClick={handleSearch} className="headerBtn">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
