import "./datatables.scss"
import axios from 'axios';
// import Sidebar from './../sidebar/Sidebar';
import { useState } from "react";
import {useEffect} from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
// import Paper from "@mui/material/Paper";
// import { maxWidth } from "@mui/system";

function Datatables() {

  const [feedbacklist, setfeedbacklist] = useState([]);

  const getfeedback = () => {
    console.log("button is clicked");
    axios.get("http://localhost:3001/products").then((response) => {
      console.log(response);
      setfeedbacklist(response.data);
      console.log(response.data[0].Date);
      
    });
  };

  const[result,setResult]= useState([]);
 
  const getData = ()=>
  {
      fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(res => setResult( res));
  }
  
  useEffect(() => {
      getData();
  },)

  return (
    <>
     
    <button style={{margin: "10px"}} className= "button" onClick={getfeedback}>See Feedback</button>
    <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success mb-3"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export Data to Excel Sheet"/>
    
  
    <table className="table" id="table-to-xls">
                    <thead className="thead-dark">
                    <tr className="trpw">
                        <th className="thbn">Date</th>
                        <th className="thbn">District</th>
                        <th className="thbn">Sub-Division</th>
                        <th className="thbn">Police Station</th>
                        <th className="thbn">Mobile</th>
                        <th className="thbn">Question1</th>
                        <th className="thbn">Question2</th>
                        <th className="thbn">Question3</th>
                        <th className="thbn">Question4</th>
                    </tr>
                    </thead>
                    <tbody>
                   
                         {feedbacklist.map((res)=>
                            <tr className="trpw">
                            <td className="tdas">{res.Date}</td>
                            <td className="tdas">{res.District}</td>
                            <td className="tdas">{res.SubDvision}</td>
                            <td className="tdas">{res.PoliceStation}</td>
                            <td className="tdas">{res.Mobile}</td>
                            <td className="tdas">{res.Ques1}</td>
                            <td className="tdas">{res.Ques2}</td>
                            <td className="tdas">{res.Ques3}</td>
                            <td className="tdas">{res.Comment}</td>
                            </tr>
                          )}   
                       
                    </tbody>   
                </table>
                <hr />
     </>
     );

    };

export default Datatables