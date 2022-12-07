import bronze from "../../assets/emblemas/Emblem_Bronze.png";
import iron from "../../assets/emblemas/Emblem_Iron.png";
import silver from "../../assets/emblemas/Emblem_Silver.png";
import gold from "../../assets/emblemas/Emblem_Gold.png";
import platinum from "../../assets/emblemas/Emblem_Platinum.png";
import diamond from "../../assets/emblemas/Emblem_Diamond.png";
import grandmaster from "../../assets/emblemas/Emblem_Grandmaster.png";
import master from "../../assets/emblemas/Emblem_Master.png";
import challenger from "../../assets/emblemas/Emblem_Challenger.png";
import { StyledRankedIcons } from "./styles";

function validarElo(elo){
    switch(elo) {
          case "BRONZE":
              return <StyledRankedIcons src={bronze} alt="elo" />;
          case "IRON":
              return <StyledRankedIcons src={iron} alt="elo" />;
          case "SILVER":
              return <StyledRankedIcons src={silver} alt="elo" />;
          case "GOLD":
              return <StyledRankedIcons src={gold} alt="elo" />;
          case "PLATINUM":
              return <StyledRankedIcons src={platinum} alt="elo" />;
          case "DIAMOND":
              return <StyledRankedIcons src={diamond} alt="elo" />;
          case "GRANDMASTER":
              return <StyledRankedIcons src={grandmaster} alt="elo" />;
          case "MASTER":
              return <StyledRankedIcons src={master} alt="elo" />;
          case "CHALLENGER":
              return <StyledRankedIcons src={challenger} alt="elo" />;
          default: break;
    }}
export {validarElo};