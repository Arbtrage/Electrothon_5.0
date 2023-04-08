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
              <span class="blog-slider__code">Age </span>
              <div class="blog-slider__title">User name</div>
              <div class="blog-slider__text">
                <ul >
                
                    <li style={{display: "flex",  alignItems: "center", textAlign: "left", justifyContent: "space-between"}}>
                        Name : Imposter
                        <span>Phone : +91 99999999</span>
                        
                    </li>
                    <li style={{display: "flex",  alignItems: "center", textAlign: "left"}}>
                        Blood Group : B+ 
                    </li>
                    <li style={{display: "flex",  alignItems: "center", textAlign: "left"}}>
                        Email : tempester@example.com 
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
