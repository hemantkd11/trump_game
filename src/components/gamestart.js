import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Img from "../Image/KIng.png";
import Input from "../Utils/Input";
import { Button } from "../Utils/Button";
import Heart from "../Image/heart.png";
import Diamond from "../Image/diamond.png";
import Club from "../Image/club.png";
import Spade from "../Image/spade.png";
const GameStart = () => {
  const location = useLocation();
  const { player1, player2, player3, player4 } = location.state || {};
  console.log(player1, player2, player3, player4);
  const [team1Count, setTeam1Count] = useState("");
  const [team1, setTeam1] = useState(0);
  const [team2Count, setTeam2Count] = useState("");
  const [team2, setTeam2] = useState(0);
  const [turn, setTurn] = useState("Player");

  useEffect(() => {
    const savedScore1 = localStorage.getItem("sum1");
    if (savedScore1) {
      setTeam1(Number(savedScore1)); // Retrieve and set the score from localStorage
    }
    const savedScore2 = localStorage.getItem("sum2");
    if (savedScore2) {
      setTeam2(Number(savedScore2)); // Retrieve and set the score from localStorage
    }
  }, []);
  const handleCLickTeam1 = () => {
    // alert("hello");
    let sum1 = Number(team1);
    let temp = Number(sum1) + Number(team1Count);
    sum1 = temp;

    localStorage.setItem("sum1", sum1);
    setTeam1(sum1);
    setTeam1Count("");
  };
  const handleCLickTeam2 = () => {
    // alert("hello");
    let sum2 = Number(team2);
    let temp = Number(sum2) + Number(team2Count);
    sum2 = temp;

    localStorage.setItem("sum2", sum2);
    setTeam2(sum2);
    setTeam1Count("");
  };
  const handleRefresh = () => {
    localStorage.setItem("sum1", 0);
    const countteam1 = Number(localStorage.getItem("sum1"));
    setTeam1(countteam1);
    localStorage.setItem("sum2", 0);
    const countteam2 = Number(localStorage.getItem("sum2"));
    setTeam2(countteam2);
  };
  return (
    <div className="start_game">
      <div className="start_game_main_container">
        <div className="start_game_wrapper">
          <div className="trump_game_box">
            <p>Trump_Game</p>
          </div>
          <div className="turn_player_name">
            Now It's <span className="turn_class">{turn}</span>'s turn
          </div>

          <div className="teams team1_box">
            <div className="team_player_name_box">
              <div className="player_name_img">
                <div className="players_game_img">
                  <img src={Img} alt="player1" />
                </div>
                <div>
                  <div onClick={() => setTurn(player1.toUpperCase())}>
                    {player1}
                  </div>
                </div>
              </div>
              <div className="player_name_img">
                <div className="players_game_img">
                  <img src={Img} alt="player1" />
                </div>
                <div>
                  <div onClick={() => setTurn(player2)}>{player2}</div>
                </div>
              </div>
            </div>
            <div className="teams_total_points">
              <div className="teams_point_input">
                <Input
                  type="number"
                  placeholder="Enter points"
                  onchange={(e) => setTeam1Count(Number(e.target.value))}
                />
                <Button btn_name="Add" onClick={handleCLickTeam1} />
              </div>
              <div className="teams_point_count">
                <spam>Total points of your team</spam> <spam>{team1}</spam>
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
                  <div onClick={() => setTurn(player3)}>{player3}</div>
                </div>
              </div>
              <div className="player_name_img">
                <div className="players_game_img">
                  <img src={Img} alt="player1" />
                </div>
                <div>
                  <div onClick={() => setTurn(player4)}>{player4}</div>
                </div>
              </div>
            </div>
            <div className="teams_total_points">
              <div className="teams_point_input">
                <Input
                  type="number"
                  placeholder="Enter points"
                  onchange={(e) => setTeam2Count(Number(e.target.value))}
                />
                <Button btn_name="Add" onClick={handleCLickTeam2} />
              </div>
              <div className="teams_point_count">
                <spam>Total points of your team</spam> <spam>{team2}</spam>
              </div>
            </div>
          </div>
          <div className="btn_save_new_game">
            <Button btn_name="reset points" onClick={handleRefresh} />
            <Button btn_name="save and play new game" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameStart;
