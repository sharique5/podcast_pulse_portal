import * as React from 'react';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import InProgress from "../Components/Inprogress";
import UrlForm from "../Components/UrlForm";
import axios from 'axios';

const Home = () => {
  const [inProgress, setInProgress] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);
  
  const handleSubmit = (url, email) => {
    setInProgress(true);
    axios.post("URL", { url, email})
      .then(_ => {
        setShowToast(true);
      })
      .catch(err => {
        console.log("err:: ", err);
      })
      .finally(() => {
        setInProgress(false);
        setTimeout(() => {
          setShowToast(false);
        }, 5000)
      })
  }

  return (
    <>
      <Header />
      {inProgress ? <InProgress /> : <UrlForm showtoast={showToast} handleSubmit={handleSubmit} />}
      <Footer />
    </>
  )
}

export default Home;