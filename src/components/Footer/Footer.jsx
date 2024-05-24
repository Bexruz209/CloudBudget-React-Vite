import foter1 from "../../assets/Footer/secure.svg"
import foter2 from "../../assets/Footer/Social.svg"
import "./Footer.css"

export default function Footer() {
    return (
        <>
            <div className="volf">
                <div className="volf_smoll">
                    <div className="volf_left">
                        <h1 className="volf_h1">Contact</h1>
                        <p className="volf_p">Questions or concerns? Just fill out the form below and our support <br /> team will get back to you within 24 hours</p>
                    </div>
                    <div className="volf_right">
                        <div className="volf_right_top">
                            <input type="text" placeholder="First Name" className="volf_right_input" />
                            <input type="text" placeholder="Last Name" className="volf_right_input" />
                        </div>
                        <div className="x">
                            <input type="text" placeholder="Phone Number" className="volf_right__input" />
                        </div>
                        <div className="f">
                            <input type="text" placeholder="Select Service" className="volf_right__input" />
                        </div>
                        <button className="volf_right__button">Submit Now</button>
                    </div>
                </div>
            </div>
            <div className="max">
                <div className="max_smoll">
                    <div className="max_left">
                        <h1 className="max_h1">Address</h1>
                        <p className="max_p">Pipang Ltd, Griva Digeni, <br />81-83 Jacovides Tower, 1st Floor <br /> 1090 Picosia USA</p>
                        <p className="max__p">Copyright 2018 CloudBudget</p>
                    </div>
                    <div className="max_left">
                        <h1 className="max_h1">Services</h1>
                        <p className="max_p">overview <br />features <br /> technology <br />Terms & Conditions <br />Privecy
                        </p>
                    </div>
                    <div className="max_left">
                        <h1 className="max_h1">Get in Touch</h1>
                        <p className="max_p">info@cloudbudget.com <br /> +1 844-721-7120</p>
                        <img src={foter2} alt="" />
                    </div>
                    <div className="max_left">
                        <h1 className="max_h1">Address</h1>
                        <img src={foter1} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
