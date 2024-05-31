import React from "react";
import "./content.css";
import logo1 from "./os1.svg";
import logo2 from "./os2.svg";
import logo3 from "./os3.svg";
import logo4 from "./os4.svg";
import img from "./img2.webp";
import img3 from "./img3.webp";

function Content() {
  return (
    <>
      <div id="about" className="content1">
        <h2>Welcome To</h2>
        <h2>DATAINT SOFTWARE TECHNOLOGIES PRIVATE LIMITED</h2>
        <p>
          Dataint Software Technologies Private Limited founded in the year 2022
          in Chennai. Dataint Software Technologies private limited is notable
          software development and product development company. M.Gnanavel is the
          Managing Director of the company established it with the purpose of
          professional services deliver strategic value to customers, through
          project management, systems design, applications development and
          implementation, strategic outsourcing and process management. These
          services allow our customers to be more competitive in their
          marketplace, as well as focus on their core competencies.
        </p>
      </div>
      <div className="content2">
        <h1>What we're <span className="hl1"> good</span> at?</h1>
        <p>We believe in your success and that we can help you achieve the best results for your business, regardless of your field.</p>
        <h1>Our <span className="hl1">Services</span></h1>
      </div>
      <div id="services" className="ourservices">
        <div className="os1">
          <img src={logo1} alt="Web Development" />
          <h2>Web Development</h2>
          <p>If you want a brand new website or already have one and you need upgrading, no matter what your need is we come with a website that truly reflects your business. Our web development services are fully compliant with SEO and other requirements.</p>
        </div>
        <div className="os1">
          <img src={logo2} alt="Mobile App Development" />
          <h2>Mobile App Development</h2>
          <p>We offer high end mobile app development services. Whether it is a consumer oriented app or enterprise app with solution, we have all the expertise you need to produce fully reliable mobile application.</p>
        </div>
        <div className="os1">
          <img src={logo3} alt="IT Services" />
          <h2>IT Services</h2>
          <p>We offered a wide range of IT services in Domain Registration and Hosting with website with annual maintenance 24 x7 with low cost.</p>
        </div>
        <div className="os1">
          <img src={logo4} alt="ERP Application Development" />
          <h2>ERP Application Development</h2>
          <p>ERP Application Development is a wide range automation process for enterprise application of optimizing any enterprise. A wide ranges from managing the ERP system to support and security related services.</p>
        </div>
      </div>
      <div className="contact">
        <h3>Let us help you</h3>
        <button>Contact us</button>
      </div>
      <img className="img1" src={img} alt="Example" />
      <div className="content3">
        <h2>How will you <span className="hl2">benefit?</span></h2>
        <p>Understanding the overarching trends of your business and overall market saves you time, money and energy in the long run, and can help you dominate your market.</p>
      </div>
      <img className="img1" src={img3} alt="Example" />
      <div id="contact" className="contactus">
          <h2>Contact <span className="hl3">us</span></h2>
          <p>Whether you have a request, a query, or want to work with us, use the form below to get in touch with our team. </p>
          <form>
              <label>First Name*</label><br></br>
              <input type="text" name="name" placeholder="First name" required="required"></input><br></br>
              <label>Last Name*</label><br></br>
              <input type="text" name="name" placeholder="Last name" required="required"></input><br></br>
              <label>Email*</label><br></br>
              <input type="email" name="name" placeholder="Email" required="required"></input><br></br>
              <label>Message</label><br></br>
              <textarea name="message" placeholder="Message"></textarea><br></br>
              <button>Sumbit</button>
          </form>
      </div>
      <footer>
        <div>
        <h3>Location</h3>
        <p>3A, Barens Lane,<br></br>Dron Field,S18 8YE,UK</p>
        </div>
        <div>
        <h3>Contact us</h3>
        <p>info@dataint.in</p>
        </div>
      </footer>
      
    </>
  );
}

export default Content;
