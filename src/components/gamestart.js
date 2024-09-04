import React from "react";
import { useLocation } from "react-router-dom";
import Img from "../Image/KIng.png";
import Input from "../Utils/Input";
import Heart from "../Image/heart.png";
import Diamond from "../Image/diamond.png";
import Club from "../Image/club.png";
import Spade from "../Image/spade.png";
const GameStart = () => {
  const location = useLocation();
  const { player1, player2, player3, player4 } = location.state || {};
  console.log(player1, player2, player3, player4);
  return (
    <div className="start_game">
      <div className="start_game_main_container">
        <div className="start_game_wrapper">
          <div className="trump_game_box">
            <p>Trump_Game</p>
          </div>

          <div className="teams team1_box">
            <div className="team_player_name_box">
              <div className="player_name_img">
                <div className="players_game_img">
                  <img src={Img} alt="player1" />
                </div>
                <div>
                  <div>{player1}</div>
                </div>
              </div>
              <div className="player_name_img">
                <div className="players_game_img">
                  <img src={Img} alt="player1" />
                </div>
                <div>
                  <div>{player2}</div>
                </div>
              </div>
            </div>
            <div className="teams_total_points">
              <div className="teams_point_input">
                <Input type="number" placeholder="Enter points" />
              </div>
              <div className="teams_point_count">
                <spam>Total points of your team</spam> <spam>2222</spam>
              </div>
            </div>
          </div>
          {/* all trump and other thisnf */}
          <div className="Trump_gamne_cards_display_section">
            <div className="cards_type_img">
              <img src={Heart} alt="" />
            </div>
            <div className="cards_type_img">
              <img src={Diamond} alt="" />
            </div>
            <div className="cards_type_img">
              <img src={Club} alt="" />
            </div>
            <div className="cards_type_img">
              <img src={Spade} alt="" />
            </div>
          </div>
          {/* team 2 box */}
          <div className="teams team1_box">
            <div className="team_player_name_box">
              <div className="player_name_img">
                <div className="players_game_img">
                  <img src={Img} alt="player1" />
                </div>
                <div>
                  <div>{player3}</div>
                </div>
              </div>
              <div className="player_name_img">
                <div className="players_game_img">
                  <img src={Img} alt="player1" />
                </div>
                <div>
                  <div>{player4}</div>
                </div>
              </div>
            </div>
            <div className="teams_total_points">
              <div className="teams_point_input">
                <Input type="number" placeholder="Enter points" />
              </div>
              <div className="teams_point_count">
                <spam>Total points of your team</spam> <spam>2222</spam>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameStart;
