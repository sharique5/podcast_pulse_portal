import * as React from 'react';
import "./style.scss";
import BackgroundImg from "../../assets/img/svgexport-1.svg";
import { MonitorHeart, YouTube } from "@mui/icons-material";
import { Button, Snackbar, TextField } from "@mui/material";

const UrlForm = ({ showtoast, handleSubmit }) => {
  const [url, setUrl] = React.useState("");
  const [email, setEmail] = React.useState("");
  
  return (
    <div className="url-form">
      <img src={BackgroundImg} alt="podcast" />
      <div className="form">
        <h1>Summarize, Simplify, Streamline Your YouTube Experience with Podcast Pulse 📺🔊</h1>
        <YouTube color="error" fontSize="large" />
        <div className="div-form">
          <TextField fullWidth value={url} label="https://" id="fullWidth" onChange={evt => setUrl(evt.target.value)} placeholder="https:// ..." />
          <TextField fullWidth value={email} label="Email" id="fullWidthEmail" onChange={evt => setEmail(evt.target.value)} placeholder="Email ...@..." />
          <Button
            variant="contained"
            type="submit"
            onClick={() => handleSubmit(url, email)}
            startIcon={<MonitorHeart />}>
            Get Pulse
          </Button>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={showtoast}
          message="Your summary request is in! 🚀 We're working on it and will send you the summary via email soon."
        />
      </div>
    </div>
  )
}

export default UrlForm;