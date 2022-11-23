import Sidebar from "./../../components/sidebar/Sidebar"
import Navbar from "./../../components/navbar/Navbar"
import axios from "axios"
import { useState } from "react";
import "./home.scss"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Home = () => {
  const [dist, setdist] = useState(""); 
  const [subdiv, setsubdiv] = useState(""); 
  const [polsta, setpolsta] = useState("");
  const [fromd, setfromd] = useState("");
  const [tod, settod] = useState("");

  const handleChange1 = (e) => {
   setdist(e.target.value);
  };
  const handleChange2 = (e) => {
   setsubdiv(e.target.value);
  };
  const handleChange3 = (e) => {
   setpolsta(e.target.value);
  };
  const handleChange4 = (e) => {
   setfromd(e.target.value);
  };
  const handleChange5 = (e) => {
   settod(e.target.value);
  };

  const [feedbacklist, setfeedbacklist] = useState([]);

  const getfeedback = () => {
    console.log("button is clicked");
    console.log(dist);
    console.log(subdiv);
    console.log(polsta);
    console.log(fromd);
    console.log(tod);

    const res = fetch('/', {
        method : 'POST',
        headers : {
          "Content-Type" : "application/json",
        },
        body : JSON.stringify({
          dist, subdiv, polsta, fromd, tod
        })
      })
    
    axios.get("http://localhost:3001/").then((response) => {
  
      console.log(response);
      setfeedbacklist(response.data);
    });
  };
 
  
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <div className="dashbordname">Dashboard</div>
        </div>
        <div className="charts">
          <form>
          <div className="onecolumn">
            <div className="oneelement">
              <label className="labelsearch"> Select District </label>
              <select className="form-select" name="district" placeholder="ALL" value={dist.district} onChange={handleChange1}>
              <option value=" ">None</option>
                  <option value="Ahemdabad">Ahemdabad</option>
                  <option value="Gandhinagar">Gandhinagar</option>
                  <option value="Surat">Surat</option>
                  <option value="Vadodara">Vadodara</option>
              </select>
            </div>
            <div className="oneelement">
              <label className="labelsearch"> Select Sub Division </label>
              <select className="form-select" name="subdivision" placeholder="ALL" value={subdiv.subdivision} onChange={handleChange2}>
              <option value=" ">None</option>
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
              <label className="labelsearch"> Select Police Station </label>
              <select className="form-select" name="policestation" placeholder="ALL" value={polsta.policestation} onChange={handleChange3}>
              <option value=" ">None</option>
                  <option value="Amraiwadi Police Station">Amraiwadi Police Station</option>
                  <option value="Anandnagar Police Station">Anandnagar Police Station</option>
                  <option value="Bapunagar Police Station">Bapunagar Police Station</option>
                  <option value="Chandkheda Police Station">Chandkheda Police Station</option>
                  <option value="Infocity Police Station">Infocity Police Station</option>
                  <option value="Sector-21 Police Station">Sector-21 Police Station</option>
                  <option value="Chiloda Police Station">Chiloda Police Station</option>
                  <option value="Kalol City Police Station">Kalol City Police Station</option>
                  <option value="Amroli Police Station">Amroli Police Station</option>
                  <option value="Kapodra Police Station">Kapodra Police Station</option>
                  <option value="Punagam Police Station">Punagam Police Station</option>
                  <option value="Udhana Police Station">Udhana Police Station</option>
                  <option value="Kareli Baug Police Station">Kareli Baug Police Station</option>
                  <option value="City Police Station">City Police Station</option>
                  <option value="Vadodara Police">Vadodara Police</option>
                  <option value="Sayajigunj Police Station">Sayajigunj Police Station</option>
                  <option value="Gotri Police Station">Gotri Police Station</option>
              </select>
            </div>   
            <div className="oneelement">
              {/* <label className="labelsearch"> Select Police Post </label>
              <select className="form-select" name="policepost" placeholder="ALL">
              <option value=" ">None</option>
                  <option value="East">East</option>
                  <option value="West">West</option>
                  <option value="North">North</option>
                  <option value="South">South</option>
              </select> */}
            </div>
          </div>
          <div className="onecolumn">
            <div className="oneelement">
              {/* <label className="labelsearch"> Select Month </label>
              <select className="form-select" name="month" placeholder="ALL">
                <option value=" ">None</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select> */}
            </div>
            <div className="oneelement">
            </div>
          </div>
          <div className="lastcolumn">
            <div className="lastelement">
              <label className="searchbydate"> Select by Date From:</label>
              <input type="date" className="begin"
                placeholder="dd-mm-yyyy"
                min="1930-01-01" max="2030-12-31" name="from" value={fromd.from} onChange={handleChange4}/>
              <label className="searchbydate"> To:</label>
              <input type="date" className="begin"
                placeholder="dd-mm-yyyy"
                min="1930-01-01" max="2030-12-31" name="to" value={tod.to} onChange={handleChange5}/>

              <button type="reset" style={{backgroundColor: "#04AA6D", color: "white", border: "none"}} onClick={getfeedback}>Search</button>
              <button type="reset" style={{backgroundColor: "#166ec6", color: "white", border: "none"}}>Reset</button>
            </div>
          </div>
          </form>
          
        </div>
        <TableContainer className="table">
      <Table sx={{ minWidth: 450, marginBlockStart:1}} aria-label="simple table">
        <TableHead className="tableHead">
          <TableRow>
          <TableCell className="tableCell1">Date</TableCell>
          <TableCell className="tableCell1">District</TableCell>
          <TableCell className="tableCell1">Subdivision</TableCell>
            <TableCell className="tableCell1">Police Station</TableCell>
            <TableCell className="tableCell1">Mobile</TableCell>
            <TableCell className="tableCell1">Question1</TableCell>
            <TableCell className="tableCell1">Question2</TableCell>
            <TableCell className="tableCell1">Question3</TableCell>
            <TableCell className="tableCell1">Question4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feedbacklist.map((val, key) => {
           return <TableRow>
              <TableCell className="tableCell">{val.Date}</TableCell>
              <TableCell className="tableCell">{val.District}</TableCell>
              <TableCell className="tableCell">{val.SubDvision}</TableCell>
              <TableCell className="tableCell">{val.PoliceStation}</TableCell>
              <TableCell className="tableCell">{val.Mobile}</TableCell>
              <TableCell className="tableCell">{val.Ques1}</TableCell>
              <TableCell className="tableCell">{val.Ques2}</TableCell>
              <TableCell className="tableCell">{val.Ques3}</TableCell>
              <TableCell className="tableCell">{val.Comment}</TableCell>
            </TableRow>
           })}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  )
}

export default Home