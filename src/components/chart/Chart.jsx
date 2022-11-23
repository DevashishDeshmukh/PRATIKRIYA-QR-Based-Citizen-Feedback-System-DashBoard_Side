import "./chart.scss"
import Sidebar from "./../../components/sidebar/Sidebar"
import Navbar from "./../../components/navbar/Navbar"
import axios from 'axios';
import Chart1 from './Chart1'
import { useState } from "react";

import { Pie } from '@ant-design/plots';
import Chart2 from "./Chart2";

  const Chart = ({ aspect, title }) => {
    // var cnt1 = 0;
    // var cnt2 = 0;
    // var cnt3 = 0;
    const [feedbacklist, setfeedbacklist] = useState([]);

    var [tot1, settot1] = useState(0);
    var [cnt1, setcnt1] = useState(0);
    var [cnt2, setcnt2] = useState(0);
    var [cnt3, setcnt3] = useState(0);

    const getfeedback = () => {
      console.log("button is clicked");
      axios.get("http://localhost:3001/feedback").then((response) => {
        console.log(response);
        setfeedbacklist(response.data);
        var i;
        for(i = 0; i < response.data.length; i++){
            //  console.log(i);
            if(response.data[i].Ques1 === "Through a person known to a police officer"){
              console.log(cnt1);
               cnt1++;
               setcnt1(cnt1);
            }
            if(response.data[i].Ques1 === "On your own"){
              console.log(cnt2);
               cnt2++;
               setcnt2(cnt2);
            }
            if(response.data[i].Ques1 === "With a neighbour or local leader"){
              console.log(cnt3);
               cnt3++;
               setcnt3(cnt3);
            }
        }
        tot1 = cnt1 +cnt2 + cnt3;
        settot1(tot1);
        
      });
    };

    // this.demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';
    let data = [
      {
        type: 'Option 1',
        value: cnt1,
      },
      {
        type: 'Option 2',
        value: cnt2,
      },
      {
        type: 'Option 3',
        value: cnt3,
      },
    ];
    
    const config = {
      appendPadding: 20,
      data,
      angleField: 'value',
      colorField: 'type',
      fontWeight: 'bold',
      radius: 0.8,
      label: {
        type: 'spider',
        style: {
          opacity: 0.8,
          fontSize: 21
        },
        content: '{name} {percentage}',
      },
      interactions: [
        {
          type: 'pie-legend-active',
        },
        {
          type: 'element-active',
        },
      ],
    };




    return (
      <>
      <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
      <button onClick={getfeedback}>Update Info for Ques1</button>
      <div className="top" >
          <div className="left">
            <h1 className="title">Question 1</h1>
            <div className="item">
              <div className="details">
                {/* <h1 className="itemTitle">Total feedback Recevied</h1> */}
                <div className="detailItem">
                  <span className="itemKey">Total feedback Recevied:</span>
                  <span className="itemValue">{tot1}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Option 1:</span>
                  <span className="itemValue">{cnt1}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Option 2:</span>
                  <span className="itemValue">
                    {cnt2}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Option 3:</span>
                  <span className="itemValue">
                    {cnt3}
                  </span>
                </div>
                <div className="detailItem">
                  {/* <span className="itemKey">Average:</span> */}
                  {/* <span className="itemValue">Good</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      <Pie {...config} />
      <Chart1/>
      <Chart2/>
      </div>
      </div>
      </>
    );
  };

export default Chart