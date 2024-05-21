import imf from "../../assets/Section/Video_bg.svg"
import img from "../../assets/Section/Play Button.svg"
import  "./Section.css"

export default function Section() {
  return (
    <>
    <div className="tech">
        <div className="tech_left">
            <div className="tech_text">
                <h1 className="tech_h1">Easy to Use Cloud Budget <br /> Management Software</h1>
                <p className="tech_p">Our software is made so you can access and  manage your budget and <br /> expenses online at any time from any device. It provides detailed income <br /> and expense reports with graphs so you can easilly see your spending <br /> patterns and budget at a glance. Read below to find out more.</p>
                <p className="tech__p">Learn More</p>
            </div>
        </div>
        <div className="tech_right">
            <div className="tech_img">
                <div className="tech_img_big">
                    <img src={imf} alt="" className="tech_img_big_big"/>
                    <img src={img} alt="" className="tech_img_big_smoll"/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
