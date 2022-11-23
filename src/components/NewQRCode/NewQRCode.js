import "./NewQRCode.scss";
import { React, useState } from "react";
import QRCode from "qrcode";
import Button from "@mui/material/Button";
const NewQRcode = () => {
  const [details, setpoliceStation] = useState({
    psRange: "",
    psDistrict: "",
    psSubDivision: "",
    psPoliceStation: "",
    psCode: "",
  });  
  const [qr, setQr] = useState("");

  let name, value;
  const handleChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setpoliceStation({ ...details, [name]: value });
  };
  const GenerateQRCode = () => {
    let url =     
      "http/www.google.com?" +
      "&District=" +
      details.psDistrict +
      "&SubDivision=" +
      details.psSubDivision +
      "&PoliceStation=" +
      details.psPoliceStation +
      "&Code=" +
      details.psCode;
    console.log(url);

    QRCode.toDataURL(
      url,
      {
        width: 200,
        margin: 2,
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQr(url);
      }
    );
  };
  return (
    <div className="app">
      <div className="onecolumn">
        <div className="oneelement">
          <label className="labelsearch"> Enter District: </label>
          <select className="inputdata" name="psDistrict" placeholder="ALL"   value={details.psDistrict}  onChange={handleChange}>
          <option value=" ">None</option>
                  <option value="Ahemdabad">Ahemdabad</option>
                  <option value="Gandhinagar">Gandhinagar</option>
                  <option value="Surat">Surat</option>
                  <option value="Vadodara">Vadodara</option>
              </select>
        </div>
        <div className="oneelement">
          <label className="labelsearch"> Enter Sub-Division: </label>
          <select className="inputdata" name="psSubDivision" placeholder="ALL"  value={details.psSubDivision}  onChange={handleChange}>
          <option value="Ahmadabad City">Ahmadabad City</option>
                  <option value="Barwala">Barwala</option>
                  <option value="Bavla">Bavla</option>
                  <option value="Daskroi">Daskroi</option>
                  <option value="Detroj Rampura">Detroj Rampura</option>
                  <option value="Dhandhuka">Dhandhuka</option>
                  <option value="Dholka">Dholka</option>
                  <option value="Mandal">Mandal</option>
                  <option value="Ranpur">Ranpur</option>
                  <option value="Sanand">Sanand</option>
                  <option value="Viramgam">Viramgam</option>
                  <option value="Dehgam">Dehgam (gandhinagar)</option>
                  <option value="Gandhinagar">Gandhinagar</option>
                  <option value="Kalol">Kalol</option>
                  <option value="Mansa">Mansa</option>
                  <option value="Bardoli">Bardoli (surat) </option>
                  <option value="Chorasi">Chorasi</option>
                  <option value="Kamrej">Kamrej</option>
                  <option value="Mahuva">Mahuva</option>
                  <option value="Mandvi">Mandvi</option>
                  <option value="Mangrol">Mangrol</option>
                  <option value="Olpad">Olpad</option>
                  <option value="Palsana">Palsana</option>
                  <option value="Umarpada">Umarpada</option>
                  <option value="Dabhoi">Dabhoi (Vadodara)</option>
                  <option value="Olpad">Olpad</option>
                  <option value="Desar">Desar</option>
                  <option value="Karjan">Karjan</option>
              </select>
        </div>
      </div>
      <div className="onecolumn">
        
        <div className="oneelement">
          <label className="labelsearch"> Enter Police Station: </label>
          <select className="inputdata" name="psPoliceStation" placeholder="ALL"  value={details.psPoliceStation} onChange={handleChange}>
          <option value="Amraiwadi-Police-Station">Amraiwadi Police Station</option>
                  <option value="Anandnagar-Police-Station">Anandnagar Police Station</option>
                  <option value="Bapunagar-Police-Station">Bapunagar Police Station</option>
                  <option value="Chandkheda-Police-Station">Chandkheda Police Station</option>
                  <option value="Infocity-Police-Station">Infocity Police Station</option>
                  <option value="Sector-21-Police-Station">Sector-21 Police Station</option>
                  <option value="Chiloda-Police-Station">Chiloda Police Station</option>
                  <option value="Kalol-City-Police-Station">Kalol City Police Station</option>
                  <option value="Amroli-Police-Station">Amroli Police Station</option>
                  <option value="Kapodra-Police-Station">Kapodra Police Station</option>
                  <option value="Punagam-Police-Station">Punagam Police Station</option>
                  <option value="Udhana-Police-Station">Udhana Police Station</option>
                  <option value="Kareli-Baug-Police-Station">Kareli Baug Police Station</option>
                  <option value="City-Police-Station">City Police Station</option>
                  <option value="Vadodara-Police">Vadodara Police</option>
                  <option value="Sayajigunj-Police-Station">Sayajigunj Police Station</option>
                  <option value="Gotri-Police-Station">Gotri Police Station</option>
              </select>
        </div>
        <div className="oneelement">
          <label className="labelsearch"> Enter Code: </label>
          <input type="number" className="inputdata"
                placeholder="e.g. 1589" name="psCode" autoComplete="off" value={details.psCode}  onChange={handleChange}/>
         </div>
      </div>
      <div className="lastcolumn">
        <div className="lastelement"> 
        <button type="submit" variant="contained" onClick={GenerateQRCode} style={{backgroundColor: "#04AA6D", color: "white", border: "none"}}>Generate QR  code</button>
         </div>
      </div>

      {qr && (
        <>
          <div className="qrbox">
            <div className="innerqrbox">
          <img src={qr} alt="qr code" />
          <br />
          <Button
            className="downloadbutton"
            variant="contained"
            color="success"
            href={qr}
            download="qrcode.png"
          >
            Download
          </Button></div></div>
        </>
      )}
    </div>
  );
};
export default NewQRcode;