import * as React from 'react';
import "./style.scss";
import BackgroundImg from "../../assets/img/svgexport-1.svg";
import { Box, LinearProgress } from "@mui/material";

const InProgress = () => {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="in-progress">
      <img src={BackgroundImg} alt="podcast" />
      <div className="form">
        <h1>Working on it</h1>
        <Box sx={{ width: '90%' }}>
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
        </Box>
      </div>
    </div>
  )
}

export default InProgress;