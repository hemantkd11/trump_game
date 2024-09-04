import React, { useState } from "react";
// import Input from "../Utils/Input";
import { Button } from "../Utils/Button";
import Img from "../Image/trump.png";
import { useNavigate } from "react-router-dom";
const PlayerDetails = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");
  const navigate = useNavigate();
  const HandleState = () => {
    if (player1 === "" || player2 === "" || player3 === "" || player4 === "") {
      alert("Please Enter All Fields");
    } else {
      navigate("/trump_game_by_hd", {
        state: {
          player1,
          player2,
          player3,
          player4,
        },
      });
    }
  };

  return (
    <div className="Main_body_container">
      <div className="Main_body_width_container">
        <div className="Main_wrapper">
          <div className="team_box">
            <div className="Teams_heading ">Team 1</div>
            <div className="input-container">
              <input
                type="text"
                id="input1"
                className="singleline-input"
                placeholder=" "
                onChange={(e) => setPlayer1(e.target.value)}
              />
              <label htmlFor="input1" className="floating-label">
                Player 1
              </label>
            </div>

            <div className="input-container">
              <input
                type="text"
                id="input2"
                className="singleline-input"
                placeholder=" "
                onChange={(e) => setPlayer2(e.target.value)}
              />
              <label htmlFor="input2" className="floating-label">
                Player 2
              </label>
            </div>

            <div className="Teams_heading ">Team 1</div>
            <div className="input-container">
              <input
                type="text"
                id="input3"
                className="singleline-input"
                placeholder=" "
                onChange={(e) => setPlayer3(e.target.value)}
              />
              <label htmlFor="input3" className="floating-label">
                Player 3
              </label>
            </div>

            <div className="input-container">
              <input
                type="text"
                id="input4"
                className="singleline-input"
                placeholder=" "
                onChange={(e) => setPlayer4(e.target.value)}
              />
              <label htmlFor="input4" className="floating-label">
                Player 4
              </label>
            </div>
          </div>
          <div className="start_game_box">
            <div className="trump_card_img">
              <img src={Img} alt="" />
            </div>
            <div className="start_game_btn">
              <Button btn_name="Start game" onClick={HandleState} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlayerDetails;
