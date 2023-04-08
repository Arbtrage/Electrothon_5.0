import React, { Component } from "react";
import "../Styles/Stimulus.css";

function Stimulus() {
  return (
    <div class="ag-format-container">
      
      <div class="ag-courses_box">
      
        <div class="ag-courses_item">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">Wellness Wisdom</div>

            <div class="ag-courses-item_date-box">
              Start:
              <span class="ag-courses-item_date">31.10.2022</span>
            </div>
          </a>
        </div>
        <div class="ag-courses_item">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">Healthy Habits</div>

            <div class="ag-courses-item_date-box">
              Start:
              <span class="ag-courses-item_date">31.10.2022</span>
            </div>
          </a>
        </div>
        <div class="ag-courses_item">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">Fitness Fundamentals</div>

            <div class="ag-courses-item_date-box">
              Start:
              <span class="ag-courses-item_date">31.10.2022</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Stimulus;
