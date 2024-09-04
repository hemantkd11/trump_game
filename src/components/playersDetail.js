import React from "react";
import Input from "../Utils/Input";
import { Button } from "../Utils/Button";
import Img from "../Image/trump.png";

const PlayerDetails = () => {
  return (
    <div className="Main_body_container">
      <div className="Main_body_width_container">
        <div className="Main_wrapper">
          <div className="team_box">
            <div className="Teams_heading ">Team 1</div>
            <div class="input-container">
              <input
                type="text"
                id="input1"
                class="singleline-input"
                placeholder=" "
              />
              <label for="input1" class="floating-label">
                Player 1
              </label>
            </div>

            <div class="input-container">
              <input
                type="text"
                id="input2"
                class="singleline-input"
                placeholder=" "
              />
              <label for="input2" class="floating-label">
                Player 2
              </label>
            </div>

            <div className="Teams_heading ">Team 1</div>
            <div class="input-container">
              <input
                type="text"
                id="input3"
                class="singleline-input"
                placeholder=" "
              />
              <label for="input3" class="floating-label">
                Player 3
              </label>
            </div>

            <div class="input-container">
              <input
                type="text"
                id="input4"
                class="singleline-input"
                placeholder=" "
              />
              <label for="input4" class="floating-label">
                Player 4
              </label>
            </div>
          </div>
          <div className="start_game_box">
            <div className="trump_card_img">
              <img src={Img} alt="" />
            </div>
            <div className="start_game_btn">
              <Button btn_name="Start game" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlayerDetails;
