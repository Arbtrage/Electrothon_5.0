import React from "react";
import "../Styles/Profile.scss";
import  user from '../assets/User.png'
function Profile() {
  return (
    <div>
      <div class="blog-slider">
        <div class="blog-slider__wrp swiper-wrapper">
          <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              <img
                src={user}
                alt=""
              />
            </div>
            <div class="blog-slider__content" style={{minWidth: "60%"}}>
              <span class="blog-slider__code">20 Years</span>
              <div class="blog-slider__title">Ayush Kumar</div>
              <div class="blog-slider__text">
                <ul >
                
                    <li style={{display: "flex",  alignItems: "center", textAlign: "left", justifyContent: "space-between"}}>
                        Name : Ayush Kumar
                        <span>Phone : +91 8102506748</span>
                        
                    </li>
                    <li style={{display: "flex",  alignItems: "center", textAlign: "left"}}>
                        Blood Group : B+ 
                    </li>
                    <li style={{display: "flex",  alignItems: "center", textAlign: "left"}}>
                        Email : ayush.krsh9@gmail.com 
                    </li>
                   
                </ul>{" "}
              </div>
              <a href="#" class="blog-slider__button">
                Edit Profile
              </a>
            </div>
          </div>
          
        </div>
        <div class="blog-slider__pagination"></div>
      </div>
    </div>
  );
}

export default Profile;
