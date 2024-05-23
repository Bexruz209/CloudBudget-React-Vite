import { navbarMenu } from "../../utils";
import logo from "../../assets/1.svg"
import "./header.css"
export default function Header() {
  return (
    <>
      <div className="all_NavBar">
        <img src={logo} alt="" />
        <ul className="nav_UL">
          {navbarMenu.map((value) => {
            return (
              <>
                <li className="nav_LI">{value.name}</li>
              </>
            )
          })}
        </ul>
        <button className="nav_BTN">LOG IN</button>
      </div>
      <div className="header_box">
        <h1 className="header_H1">CLOUDBUDGET</h1>
        <p className="header_P">Cloud budget management for everyone. Only <br /> €69.95 a Month After a 7 Day Trial of <br />
          Up to €4.99</p>
        <button className="header_BTN">SIGN UP</button>
      </div>
    </>
  )
}
