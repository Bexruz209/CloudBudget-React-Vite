import img1 from "../../assets/Main/01.svg"
import img2 from "../../assets/Main/02.svg"
import img3 from "../../assets/Main/03.svg"
import img4 from "../../assets/Main/04.svg"
import imf1 from "../../assets/Main/Frame 3.svg"
import imf2 from "../../assets/Main/Frame 4.svg"
import imf3 from "../../assets/Main/Frame 5.svg"
import imf4 from "../../assets/Main/Frame 6.svg"
import link from "../../assets/Main/Link.svg"
import bg1 from "../../assets/Main/Slider.svg"
import "./Main.css"

export default function Main() {
  return (
    <>
      <div className="master">
        <div className="master_top">
          <h1>Technology</h1> </div>
        <div className="master_botton">
          <div className="master_left">
            <div className="master_left_top">
              <img src={img1} alt="" className="master_img" />
            </div>
            <div className="master_left_botton">
              <img src={imf1} alt="" className="master-img" />
              <h1 className="master_h1">Cloud Storage</h1>
              <p className="master_p">Access your account from anywhere <br /> in the world on any device</p>
            </div>
          </div>
          <div className="master_left">
            <div className="master_left_top">
              <img src={img2} alt="" className="master_img" />
            </div>
            <div className="master_left_botton">
              <img src={imf2} alt="" className="master-img" />
              <h1 className="master_h1">Secure</h1>
              <p className="master_p">All your information is stored on <br /> secure cloud servers</p>
            </div>
          </div>
          <div className="master_left">
            <div className="master_left_top">
              <img src={img3} alt="" className="master_img" />
            </div>
            <div className="master_left_botton">
              <img src={imf3} alt="" className="master-img" />
              <h1 className="master_h1">PDF Download</h1>
              <p className="master_p">Download any of your reports in <br /> PDF format</p>
            </div>
          </div>
          <div className="master_left">
            <div className="master_left_top">
              <img src={img4} alt="" className="master_img" />
            </div>
            <div className="master_left_botton">
              <img src={imf4} alt="" className="master-img" />
              <h1 className="master_h1">CSV Download</h1>
              <p className="master_p">All your information is stored on <br /> secure cloud servers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="vito">
        <div className="vito_smoll">
          <div className="a">
            <div className="vito_smoll_left">
              <h1 className="viton_h1">Stay focused on saving <br /> money</h1>
              <p className="vito_p">It is important to stay focused on saving money in any way you can. We <br /> help you monitor your spending habits so you can easily spot and cut <br /> any unnecessary expenses. Simply join today to get started!</p>
              <img src={link} alt="" />
            </div>
            <div className="vito_smoll_right">
              <div className="vito_smoll__right">
                <img src={bg1} alt="" className="bg5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
