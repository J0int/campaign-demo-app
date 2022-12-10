import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Campaigns Demo App</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>All Campaigns</Link>
          </li>
          <li></li>
          <li>
            <Link to={"/new-campaign"}>Add New Campaign</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
