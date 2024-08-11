import { useState } from "react";
import React from "react";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineWorkHistory } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaServer } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import MapComponent from "./map";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { IoCalendarSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";


export default function Dashboard(){
    const [selectedOption, setSelectedOption] = useState('About');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [result, setResult] = React.useState("");

  const options = ['About', 'Resume', 'Portfolio', 'Contact'];

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8a4f7bff-6b97-4bcd-bcbe-6cbbb1714868");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleFaceBook = () => {
    window.open('https://www.facebook.com/manohar.bandaru.35', '_blank', 'noopener,noreferrer')
}
const handleInstagram = () => {
    window.open('https://www.instagram.com/the____manohar/', '_blank', 'noopener,noreferrer')
}
const handleTwitter = () => {
    window.open('https://x.com/ManoharBandar16', '_blank', 'noopener,noreferrer')
}
const handleLinkedIn = () => {
    window.open('https://linkedin.com/in/manohar-bandaru-2a7a881b3', '_blank', 'noopener,noreferrer')
}

  const renderContent = () => {
    switch (selectedOption) {
      case 'About':
        return (
          <div className="about">
            <div className="heading-div">
            <h2>About Me</h2>
            <div className="gold-und"></div></div>
            <p className="para">I am a seasoned Frontend Developer with a distinguished two-year track record of excelling in crafting dynamic and user-friendly interfaces. My comprehensive skill set includes <span className="high">HTML, CSS, JavaScript, ReactJS, Redux, and Bootstrap</span>, enabling me to meticulously create engaging and responsive web applications. I bring specialized expertise in version control through GitLab and leverage TypeScript to elevate code quality and maintainability. Beyond technical acumen, my reputation for strong communication skills and adept multitasking positions me as an asset, fostering seamless collaboration within professional landscapes. I am eager to contribute my seasoned experience and technical prowess to a forward-thinking company, delivering impactful solutions and driving innovation in the realm of Frontend Development.</p>
            <h2 className="what">What I'm Doing</h2>
            <div className="sides-div">
                <div className="sides"><div className="sides-img"><CgWebsite/></div><div className="sides-text"><p className="sides-head">Frontend Development</p><p className="sides-para">It focuses on creating the visual and interactive aspects and ensures a seamless and engaging user experience by designing responsive and intuitive interfaces.</p></div></div>
                <div className="sides"><div className="sides-img"><FaServer/></div><div className="sides-text"><p className="sides-head">Backend Development</p><p className="sides-para">It handles server-side logic, databases, and application architecture. It ensures data processing, storage, and communication between the server and frontend.</p></div></div>
                <div className="sides"><div className="sides-img"><FaLaptopCode/></div><div className="sides-text"><p className="sides-head">Full Stack Development</p><p className="sides-para">It involves creating a complete web application, managing everything from user interfaces to server infrastructure and databases.</p></div></div>
                <div className="sides"><div className="sides-img"><FaLaptopCode/></div><div className="sides-text"><p className="sides-head">Full Stack Development</p><p className="sides-para">It involves creating a complete web application, managing everything from user interfaces to server infrastructure and databases.</p></div></div>
            </div>
            <h2 className="what">All My Skills</h2>
            <div className="skills-div">
                <div className="skill-box"><img className="skill-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/195px-HTML5_logo_and_wordmark.svg.png" alt="html"/><p>HTML</p></div>
                <div className="skill-box"><img className="skill-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/180px-CSS3_logo_and_wordmark.svg.png" alt="css"/><p>CSS</p></div>
                <div className="skill-box"><img className="skill-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/330px-Unofficial_JavaScript_logo_2.svg.png" alt="javascript"/><p>JAVASCRIPT</p></div>
                <div className="skill-box"><img className="skill-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/180px-React_Logo_SVG.svg.png" alt="react"/><p>REACT JS</p></div>
                <div className="skill-box"><img className="skill-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/180px-Bootstrap_logo.svg.png" alt="bootstrap"/><p>BOOTSTRAP</p></div>
                <div className="skill-box"><img className="skill-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/180px-Node.js_logo.svg.png" alt="node"/><p>NODE JS</p></div>
                <div className="skill-box"><img className="skill-img" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="express"/><p>EXPRESS JS</p></div>
                <div className="skill-box"><img className="skill-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/375px-MongoDB_Fores-Green.svg.png" alt="mongo"/><p>MONGO DB</p></div>
                <div className="skill-box"><img className="skill-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/150px-MySQL_logo.svg.png" alt="mysql"/><p>MY SQL</p></div>
                <div className="skill-box"><img className="skill-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/GitLab_logo_%282%29.svg/330px-GitLab_logo_%282%29.svg.png" alt="gitlab"/><p>GIT LAB</p></div>
            </div>
          </div>
        );
      case 'Resume':
        return (
          <div className="resume">
            <div className="heading-div">
            <h2>Resume</h2>
            <div className="gold-und"></div>
            </div>
            <div className="edu">
                <div className="ed-head"><div className="ed-icon"><IoBookSharp/></div><h2>Education</h2></div>
                <div className="ed-det">
                    <div className="ed-line">
                        <div className="line-block"><div className="gold-dot"></div><div className="vert-line"></div></div>
                        <div className="line-block"><div className="gold-dot"></div><div className="vert-line"></div></div>
                        <div className="line-block"><div className="gold-dot"></div><div className="vert-line"></div></div>
                    </div>
                    <div className="ed-text">
                        <div className="ed-list">
                            <h3 className="inst">NADIMPALLI SATYANARAYANA RAJU INSTITUTE OF TECHNOLOGY</h3>
                            <p className="degree">Mechanical Engineering <span className="c-du">2018 - 2021</span></p>
                            <p className="score">7.3 CGPA</p>
                        </div>
                        <div className="ed-list">
                            <h3 className="inst">GOVERNMENT POLYTECHNIC PITHAPURAM</h3>
                            <p className="degree">Diploma In Mechanical Engineering <span className="c-du">2015 - 2018</span></p>
                            <p className="score">74.61%</p>
                        </div>
                        <div className="ed-list">
                            <h3 className="inst">MINERVA PUBLIC SCHOOL</h3>
                            <p className="degree">SSC <span className="c-du">2014 - 2015</span></p>
                            <p className="score">9.3 CGPA</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="exp">
            <div className="ed-head"><div className="ed-icon"><MdOutlineWorkHistory/></div><h2>Experience</h2></div>
            <div className="ed-det">
                    <div className="ed-line">
                        <div className="line-block"><div className="gold-dot"></div><div className="vert-line-exp"></div></div>
                        </div>
                    <div className="ed-text">
                        <div className="exp-list">
                            <h3 className="inst">SmartGen Technologies Pvt Ltd</h3>
                            <p className="degree">Junior Full Stack Web Developer <span className="c-du">Jan 2022 - Jan 2024</span></p>
                            <p className="exp-des">As a Full Stack Developer at SmartGen Technologies Pvt Ltd, I actively participated in the initial development of version 2 of the "My Professor Web Application" contributing significantly to the creation of critical modules. Additionally, I played a key role in the backend development of the application. My involvement extended to the successful advancement of version 3, where I contributed to both UI and functionality enhancements. Furthermore, I played a pivotal part in developing the official website for My Professor as part of SmartGen Technologies, demonstrating a commitment to comprehensive software solutions. Proficient in JavaScript, HTML, CSS, React.js, and Node.js, my collaborative approach ensured the timely delivery of scalable and innovative software solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
      case 'Portfolio':
        return (
            <div className="portfolio">
            <div className="heading-div">
            <h2>Portfolio</h2>
            <div className="gold-und"></div></div>
            <div className="proj">
                <h2>All My Projects</h2>
                <div className="proj-div">
                    <div className="proj-card"><p className="proj-name">My Professor Version 2</p></div>
                    <div className="proj-card"><p className="proj-name">My Professor Version 3</p></div>
                    <div className="proj-card"><p className="proj-name">My Professor Official Website</p></div>
                    <div className="proj-card"><p className="proj-name">My Own Website</p></div>
                </div>
            </div>
          </div>
        );
      case 'Contact':
        return (
          <div className="contact">
            <div className="heading-div">
            <h2>Contact</h2>
            <div className="gold-und"></div></div>
            <div className="cont">
                <div className="map">
                    <MapComponent/>
                </div>
                <div className="cont-form">
                    <h2>Contact Form</h2>
                    <form className="contact-form" onSubmit={onSubmit}>
                        <div className="form-t-div">
                            <input type="text" placeholder="Your Name" name="name"/>
                            <input type="email" placeholder="Your E-Mail" name="email"/>
                        </div>
                        <textarea className="messagebox" placeholder="Your Message" name="message"></textarea>
                        <button className="cont-btn" type="submit"><RiSendPlaneFill/> Send Message</button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>
          </div>
        );
      default:
        return <div>Select an option</div>;
    }
  };

    return(
        <div className="dash-board">
             <nav className="header">
             <img 
          src="https://w0.peakpx.com/wallpaper/592/1017/HD-wallpaper-memoji-emoji-album-artwork-cover-art-emoji-stickers-iphone-boy-emoji.jpg" 
          alt="img"
          className="header-img"
          onClick={toggleSidebar}
        />
        {options.map(option => (
          <button
            key={option}
            onClick={() => setSelectedOption(option)}
            className={selectedOption === option ? 'active' : ''}
          >
            {option}
          </button>
        ))}
      </nav>
      <div className="content">
        {renderContent()}
      </div>
      <div className="sidebarr">
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
                <div className="sb-sm">
                   <div className="soc-card" onClick={handleFaceBook}><FaFacebookSquare/></div>
                   <div className="soc-card" onClick={handleInstagram}><FaInstagram/></div>
                   <div className="soc-card" onClick={handleTwitter}><FaXTwitter/></div>
                   <div className="soc-card" onClick={handleLinkedIn}><FaLinkedin/></div>
                </div>
            </div>
        </div>
      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
        </div>
    )
}