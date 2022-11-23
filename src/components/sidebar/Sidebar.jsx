import "./sidebar.scss"
import Logo from '../../imgs/Gujarat_Police_Logo.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <img className="policelogo" src={Logo} alt="logo" />
        </Link>
      </div>
        <div className="linedown"></div>
     
      <div className="center">
        <ul>
            <p className="title">ADMIN</p>
          <li>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <DashboardIcon className="icon" />
            <span>DashBoard</span>
            </Link>
          </li>
          <p className="title">OVERVIEW</p>
          <Link to="/users" style={{ textDecoration: "none" }}>

          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>All Feedback</span>
            </li>
          </Link>
          <Link to="/QRCode" style={{ textDecoration: "none" }}>
          <li>
            <QrCodeScannerIcon className="icon" />
            <span>QR Code Generation</span>
          </li>
          </Link>
          <p className="title">REPORTS</p>
          <Link to="/stats" style={{ textDecoration: "none" }}>
          <li>
            <AnalyticsIcon className="icon" />
            <span>Graphical Analysis </span>
          </li></Link>
          <Link to="/feedback" style={{ textDecoration: "none" }}>
          <li>
            
            <NotificationsNoneIcon className="icon" />
            <span>Feedback Analysis</span>
          </li></Link>

          
          <p className="title">USER</p>
          <li>
            <GroupIcon className="icon" />
            <span>Admin Profiles</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar