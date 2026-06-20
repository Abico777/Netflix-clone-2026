import React from 'react';
import './footer.css'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
    return (
        <>
            <div className="footer_outer_container">
                <div className="footer_inner_container">
                    <div className="footer_icon">
                        <FacebookIcon />
                        <InstagramIcon />
                        <YouTubeIcon />
                    </div>
                    <div className="footer_data">
                    <div>
                        <ul>
                            <li>Audio Description</li>
                            <li> Investor Relations</li>
                            <li>Legal Relations</li>
                        </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Help Center</li>
                                <li>Jobs</li>
                                <li>Cookie Preferences</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Gift Cards</li>
                                <li>Term of Use</li>
                                <li>Corporate Information</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Media Center</li>
                                <li>Privacy</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_service">
                        <p>Service Code</p>
                    </div>
                    <div className="footer_copyright">
                        <p>© 1997-2026 Netflix, Inc.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;