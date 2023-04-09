import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import logosvg from "../assets/login-logo.png";
import sthetoscope from "../data/stethoscope.png";
import down from "../data/upload.svg";
import user from "../data/user.svg";
import tick from "../data/tick.svg";
import store from "../data/store.png";
import doc from "../data/notification.png";
import dissease from "../data/Report.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="main">
        <section className="home section container" id="home">
          <div className="home__container  grid">
          <div className="home__data">
              <h1 className="home__title" style={{textAlign: "left"}}>You Will Know <br/> In Time</h1>
              <p className="home__description" style={{textAlign: "justify"}}>
              The application sends timely notifications to remind users to take their medicine and provides an option to notify family members in case of missed doses. Also it generates monthly reports of user's medical history.
              </p>              
              <Link to="/signup" className="button" style={{justifyContent: "center"}}>
                Sign Up Now!
              </Link>
            </div>
            <img className="sto-img" src={sthetoscope} />
          </div>
        </section>
        <section className="services section container" id="about">
          <h2 className="section__title">Getting started is quick and easy</h2>
          <div className="services__container grid">
            <div className="services__data">
              <h3 className="services__subtitle">Register Yourself</h3>
              <img className="services__img" src={user} />
              <p className="services__description">
                Register yourself to get timely notifications about your prescriptions.
              </p>
            </div>

            <div className="services__data">
              <h3 className="services__subtitle">Authenticate Yourself</h3>
              <img className="services__img" src={tick} />
              <p className="services__description">
                Log In with your credentials.
              </p>
            </div>

            <div className="services__data">
              <h3 className="services__subtitle">Upload your Data</h3>
              <img className="services__img" src={down} />
              <p className="services__description">
                Create, update, or view your health record information.
              </p>
            </div>
          </div>
        </section>
        <section className="services section container" id="services">
          <h2 className="section__title">Services we deliver</h2>
          <div className="services__container grid">
            <div className="services__data">
              <h3 className="services__subtitle">Maintaining Medical Records</h3>
              <img className="services__img" src={store} />
              <p className="services__description">
              Keep track of your medical records and prescription history.
              </p>
            </div>

            <div className="services__data">
              <h3 className="services__subtitle">Get Timely Notifications</h3>
              <img className="services_img" src={doc} />
              <p className="services__description">
              Get timely notifications of prescription on Whatsapp and Messages.
              </p>
            </div>

            <div className="services__data">
              <h3 className="services__subtitle">Periodically Report Generation</h3>
              <img className="servicesimg" src={dissease} />
              <p className="services__description">
              Get your personalized medical report periodically.
              </p>
            </div>
          </div>
        </section>
        <section className="contact section container" id="contact">
            <div className="contact__container grid">
                <div className="contact__content">
                    <h2 className="section__title-center">Contact Us</h2>
                    <p className="contact__description">You can contact us from here, you can write to us,
                        call us for suggestions and enhancements.</p>
                </div>

                <ul className="contact__content grid">
                    <li className="contact__address">Telephone: <span className="contact__information">+91 9368875433</span>
                    </li>
                    <li className="contact__address">Email: <span
                            className="contact__information">ywkit@gmail.com</span></li>
                    <li className="contact__address">Location: <span className="contact__information">Chandigarh, India</span></li>
                </ul>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14874.196331166764!2d81.6050291!3d21.2497222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21543965c50c43c7!2sNational%20Institute%20of%20Technology(NIT)%2C%20Raipur!5e0!3m2!1sen!2sin!4v1674894759884!5m2!1sen!2sin"
                    width="300" height="200" style={{border:"0",}} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
      </main>
        <footer className="footer section">
          <p className="footer__copy">
            Design And Developed By Rebooters
          </p>
          <p className="footer__copy">&#169; Rebooters. All right reserved</p>
        </footer>
    </div>
  );
};

export default Home;
