import ReactPlayer from 'react-player/youtube'
import { Paper } from '@mui/material';
import "./style.scss";

const Summary = () => {
  return (
    <div className="summary-container">
      <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
      <Paper elevation={3}>
        <span>Summary</span>
        <p>
          Some research papers provide insight into full solutions when no backhaul is available, providing inter-eNB connectivity because of WiFi links and including D2D communications that were not yet defined by the ProSe specifications of 3GPP studies [GOM 14]. Other technologies are usually used to establish wireless backhaul supporting fixed LTE networks: PTP RF or free space optics links and PTMP RF links. In the case of portable BS, satellite backhaul links are sometimes used. However, it can be easily seen that these wireless solutions are not adequate for the establishment of a network of BS enabling voice and data communications in moving cell scenarios.
        </p>
      </Paper>
    </div>
  )
}

export default Summary;