


import "./QRCode.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import NewQRCode from "../../components/NewQRCode/NewQRCode"


const QRCode = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="widgets">
          <div className="dashbordname"> QR Code Generation </div>
        </div>
        <NewQRCode/>
      </div>
    </div>
  )
}

export default QRCode