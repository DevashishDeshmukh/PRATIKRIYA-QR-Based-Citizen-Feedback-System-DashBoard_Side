import "./chart.scss"
import axios from 'axios';
import { useState } from "react";

import { Pie } from '@ant-design/plots';

  const refreshPage = () => {
    window.location.reload();
  }

  const Chart1 = ({ aspect, title }) => {
    // var cnt1 = 0;
    // var cnt2 = 0;
    // var cnt3 = 0;
    const [feedbacklist, setfeedbacklist] = useState([]);

    var [tot2, settot2] = useState(0);
    var [cnt21, setcnt21] = useState(0);
    var [cnt22, setcnt22] = useState(0);
    var [cnt23, setcnt23] = useState(0);
    var [cnt24, setcnt24] = useState(0);
    var [cnt25, setcnt25] = useState(0);

    const getfeedback = () => {
      console.log("button is clicked");
      axios.get("http://localhost:3001/feedback").then((response) => {
        console.log(response);
        setfeedbacklist(response.data);
        var i;
        for(i = 0; i < response.data.length; i++){
            //  console.log(i);
            if(response.data[i].Ques2 === "After 15 Minutes"){
              console.log(cnt21);
               cnt21++;
               setcnt21(cnt21);
            }
            if(response.data[i].Ques2 === "15 Minutes"){
              console.log(cnt22);
               cnt22++;
               setcnt22(cnt22);
            }
            if(response.data[i].Ques2 === "10 Minutes"){
              console.log(cnt23);
               cnt23++;
               setcnt23(cnt23);
            }
            if(response.data[i].Ques2 === "5 Minutes"){
              console.log(cnt24);
               cnt24++;
               setcnt24(cnt24);
            }
            if(response.data[i].Ques2 === "Immediataly"){
              console.log(cnt25);
               cnt25++;
               setcnt25(cnt25);
            }
        }
        tot2 = cnt21 +cnt22 + cnt23 + cnt24 + cnt25;
        settot2(tot2);
        
      });
    };

    // this.demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';
    let data = [
      {
        type: 'Option 1',
        value: cnt21,
      },
      {
        type: 'Option 2',
        value: cnt22,
      },
      {
        type: 'Option 3',
        value: cnt23,
      },
      {
        type: 'Option 4',
        value: cnt24,
      },
      {
        type: 'Option 5',
        value: cnt25,
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
      <button onClick={getfeedback}>Update Info for Ques2</button>
      <div className="top" >
          <div className="left">
            <h1 className="title">Question 2</h1>
            <div className="item">
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Total feedback Recevied:</span>
                  <span className="itemValue">{tot2}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Option 1:</span>
                  <span className="itemValue">{cnt21}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Option 2:</span>
                  <span className="itemValue">
                    {cnt22}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Option 3:</span>
                  <span className="itemValue">
                    {cnt23}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Option 4:</span>
                  <span className="itemValue">
                    {cnt24}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Option 5:</span>
                  <span className="itemValue">
                    {cnt25}
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
      </>
    );
  };

export default Chart1