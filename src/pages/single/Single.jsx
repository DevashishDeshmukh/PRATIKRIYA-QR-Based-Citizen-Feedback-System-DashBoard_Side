import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chartfeed from "./Chartfeed";
// import Chart from '../../components/chart/chart'
//import Newp from "../new/Newp";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <Chartfeed/>
      </div>
    </div>
  );
};

export default Single;