import React from "react";
import "./header.css";
import Netflix from "../../asset/images/Netflix.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
function Header() {
    return (
        <>
        <div className="header_outer_container">
            <div className="header_container">
            <div className="header_left">
                <ul>
                <li>
                    <img src={Netflix} alt="Netflix Logo" width="100" />
                </li>
                <li> Home</li>
                <li> TVShows</li>
                <li> Movies</li>
                <li>Latest</li>
                <li> MyList</li>
                <li> Browse by Language</li>
                </ul>
            </div>
            <div className="header_right">
                <ul>
                <li><SearchIcon /></li>
                <li><NotificationsNoneIcon /></li>
                <li><AccountBoxIcon /></li>
                <li><ArrowDropDownCircleIcon /></li>
                </ul>
            </div>
            </div>
        </div>
        </>
    );
}

export default Header;
