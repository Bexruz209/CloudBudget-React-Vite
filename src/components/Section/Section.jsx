import imf from "../../assets/Section/Video_bg.svg"
import img from "../../assets/Section/Play Button.svg"
import bg from "../../assets/Section/Bg.svg"
import bg3 from "../../assets/Section/Bg3.svg"
import bg4 from "../../assets/Section/Bg4.svg"
import "./Section.css"

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
                            <img src={imf} alt="" className="tech_img_big_big" />
                            <img src={img} alt="" className="tech_img_big_smoll" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="emmer">
                <div className="emmer_smoll">
                    <div className="emmer_top">
                        <div className="emmer_t">
                            <h1 className="emmer__t">Features</h1>
                        </div>
                    </div>
                    <div className="emmer_botton">
                        <div className="emmer_left">
                            <div className="emmer_left_top">
                                <img src={bg} alt="" />
                            </div>
                            <div className="emmer_left_botton">
                                <div className="emmer_left_botton_text">
                                    <h1 className="emmer_h1">Supports All Currencies and <br /> Cards</h1>
                                    <p className="emmer_p">We support all popular currencies and is <br /> fully customizable to add</p>
                                    <p className="emmer__p">Learn More</p>
                                </div>
                            </div>
                        </div>
                        <div className="emmer_lef">
                            <div className="emmer_left">
                                <div className="emmer_left_top">
                                    <img src={bg3} alt="" />
                                </div>
                                <div className="emmer_left_botton">
                                    <div className="emmer_left_botton_text">
                                        <h1 className="emmer_h1">Manage your expenses on <br /> the go</h1>
                                        <p className="emmer_p">You can access your account from <br /> anywhere in the world on any device</p>
                                        <p className="emmer__p">Learn More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="emmer_right">
                            <div className="emmer_left">
                                <div className="emmer_left_top">
                                    <img src={bg4} alt="" />
                                </div>
                                <div className="emmer_left_botton">
                                    <div className="emmer_left_botton_text">
                                        <h1 className="emmer_h1">Cloud Budget Management <br /> Software</h1>
                                        <p className="emmer_p">Our software is made so you can access <br /> and manage your budget</p>
                                        <p className="emmer__p">Learn More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
