import { Link } from "react-router-dom";
// import Image from '../images/habibPro.png'
import ImageSlider from "./ImageSlider";

const MainHeader = () => {
  const slides = [
    { url: "https://picsum.photos/300/300", title: "beach" },
    { url: "https://picsum.photos/1200/800", title: "boat" },
    { url: "https://picsum.photos/720/720", title: "forest" },
    { url: "https://picsum.photos/1920/1080", title: "city" },
    { url: "https://picsum.photos/480/360", title: "italy" },
  ];
  const containerStyles = {
    height: "410px",
    width: "720px",
    margin: "0 auto",
  };

  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-right">
          {/* <div className="main__header-circle"></div> */}
          <div className="main__header-image">
            {/* <img src={Image} alt="Main Header Image" /> */}
            <div >
              <div style={containerStyles} id="main__header-slide">
                <ImageSlider slides={slides} />
              </div>
            </div>
          </div>
        </div>
        <div className="main__header-left">
          <h4>#DJ HABIB PRO</h4>
          <h1>Avec Vous dans toutes les Occasions</h1>
          <p>Mariages, Anniversaires, Fiançailles ...</p>
          <Link to="/plans" className="btn lg">
            {" "}
            Get Started{" "}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
