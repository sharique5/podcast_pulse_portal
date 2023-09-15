import LogoImg from "../../assets/img/podcast_pulse_logo.png"
import { PodcastsRounded } from "@mui/icons-material";
import "./style.scss";

const Logo = () => {
  return (
    <div className="logo-container">
      <PodcastsRounded fontSize="large" />
      <img src={LogoImg} alt="podcast-pulse" className="logo" />
    </div>
  )
}

export default Logo;