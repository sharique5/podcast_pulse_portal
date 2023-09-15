import "./style.scss";
import BackgroundImg from "../../assets/img/svgexport-1.svg";
import { MonitorHeart, YouTube } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";

const UrlForm = () => {
  return (
    <div className="url-form">
      <img src={BackgroundImg} alt="podcast" />
      <div className="form">
        <h1>Summarize, Simplify, Streamline Your YouTube Experience with Podcast Pulse 📺🔊</h1>
        <YouTube color="error" fontSize="large" />
        <form action="#">
          <TextField fullWidth label="" id="fullWidth" placeholder="https:// ..." />
          <TextField fullWidth label="" id="fullWidthEmail" placeholder="Email ...@..." />
          <Button
            variant="contained"
            type="submit"
            startIcon={<MonitorHeart />}>
            Get Pulse
          </Button>
        </form>
      </div>
    </div>
  )
}

export default UrlForm;