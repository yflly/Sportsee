import LeftNavIcon from "../LeftNavIcon/LeftNavIcon";
import "./LeftNav.css";

import yoga from "../../assets/yoga.png";
import swim from "../../assets/swim.png";
import bike from "../../assets/bike.png";
import weight from "../../assets/weight.png";

function LeftNav() {
  return (
    <section className="leftNav">
      <nav className="leftNavIconGroup">
        <ul>
          <li className="leftNavIconGroupLi">
            <LeftNavIcon src={yoga} />
          </li>
          <li className="leftNavIconGroupLi">
            <LeftNavIcon src={swim} />
          </li>
          <li className="leftNavIconGroupLi">
            <LeftNavIcon src={bike} />
          </li>
          <li className="leftNavIconGroupLi">
            <LeftNavIcon src={weight} />
          </li>
        </ul>
      </nav>
      <div className="copyright">
        <h3 className="copyright">Copyright, SportSee 2021</h3>
      </div>
    </section>
  );
}

export default LeftNav;
