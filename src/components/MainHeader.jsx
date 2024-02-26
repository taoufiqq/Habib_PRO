import { Link } from "react-router-dom"
import Image from '../images/habibPro.png'
// import SlideVideo  from "./SlideVideo"
const MainHeader = () => {
  return (
   <header className="main__header">
    <div className="container main__header-container">
     
      <div className="main__header-right">
        {/* <div className="main__header-circle"></div> */}
        <div className="main__header-image">
          <img src={Image} alt="Main Header Image" />
     
        </div>
      </div>
      <div className="main__header-left">
        <h4>#DJ HABIB PRO</h4>
        <h1>Avec Vous dans toutes les Occasions</h1>
        <p>
            Mariages,
            Anniversaires,
            Fiançailles ...
        </p>
        <Link to="/plans" className="btn lg"> Get Started </Link>
      </div>
    </div>
   </header>
  )
}

export default MainHeader