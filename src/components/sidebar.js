import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { IoCalendarSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";


export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="top-sb">
                <div className="img-box"><img src="https://w0.peakpx.com/wallpaper/592/1017/HD-wallpaper-memoji-emoji-album-artwork-cover-art-emoji-stickers-iphone-boy-emoji.jpg" alt="img"/></div>
                <div className="tb-det">
                <h2 className="my-name">MANOHAR BANDARU</h2>
                <p className="fsd">Full Stack Developer</p></div>
            </div>
            <div className="bot-sb">
                <div className="sb-det"><div className="sb-det-img"><IoIosMail/></div><div className="sb-det-text"><p>Email</p><p>manoharbandaru1960@gmail.com</p></div></div>
                <div className="sb-det"><div className="sb-det-img"><FaMobileAlt/></div><div className="sb-det-text"><p>Phone</p><p>+91 9704621960</p></div></div>
                <div className="sb-det"><div className="sb-det-img"><IoCalendarSharp/></div><div className="sb-det-text"><p>Date Of Birth</p><p>20 Feb 2000</p></div></div>
                <div className="sb-det"><div className="sb-det-img"><IoLocationSharp/></div><div className="sb-det-text"><p>Location</p><p>Visakhapatnam, India</p></div></div>
                <div className="sb-sm"><FaInstagram/><FaFacebookSquare/><FaLinkedin/><FaXTwitter/></div>
            </div>
        </div>
    )
}