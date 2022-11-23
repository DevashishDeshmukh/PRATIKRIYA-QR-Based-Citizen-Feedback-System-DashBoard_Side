import "./chart.scss"
import axios from 'axios';
import { useState } from "react";

import { Pie } from '@ant-design/plots';


  const Chart2 = ({ aspect, title }) => {
    const [feedbacklist, setfeedbacklist] = useState([]);

    var [tot3, settot3] = useState(0);
    var [cnt31, setcnt31] = useState(0);
    var [cnt32, setcnt32] = useState(0);
    var [cnt33, setcnt33] = useState(0);
    var [cnt34, setcnt34] = useState(0);
    var [cnt35, setcnt35] = useState(0);

    const getfeedback = () => {
      console.log("button is clicked");
      axios.get("http://localhost:3001/feedback").then((response) => {
        console.log(response);
        setfeedbacklist(response.data);
        var i;
        for(i = 0; i < response.data.length; i++){
            //  console.log(i);
            if(response.data[i].Ques3 === "😭"){
              console.log(cnt31);
               cnt31++;
               setcnt31(cnt31);
            }
            if(response.data[i].Ques3 === "😔"){
              console.log(cnt32);
               cnt32++;
               setcnt32(cnt32);
            }
            if(response.data[i].Ques3 === "😐"){
              console.log(cnt33);
               cnt33++;
               setcnt33(cnt33);
            }
            if(response.data[i].Ques3 === "😊"){
              console.log(cnt34);
               cnt34++;
               setcnt34(cnt34);
            }
            if(response.data[i].Ques3 === "😀"){
              console.log(cnt35);
               cnt35++;
               setcnt35(cnt35);
            }
        }
        tot3 = cnt31 +cnt32 + cnt33 + cnt34 + cnt35;
        settot3(tot3);
        
      });
    };

    // this.demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';
    let data = [
      {
        type: 'Option 1',
        value: cnt31,
      },
      {
        type: 'Option 2',
        value: cnt32,
      },
      {
        type: 'Option 3',
        value: cnt33,
      },
      {
        type: 'Option 4',
        value: cnt34,
      },
      {
        type: 'Option 5',
        value: cnt35,
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
      <button onClick={getfeedback}>Update Info for Ques3</button>
      <div className="top" >
          <div className="left">
            <h1 className="title">Question 3</h1>
            <div className="item">
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Total feedback Recevied:</span>
                  <span className="itemValue">{tot3}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Option 1:</span>
                  <span className="itemValue">{cnt31}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Option 2:</span>
                  <span className="itemValue">
                    {cnt32}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Option 3:</span>
                  <span className="itemValue">
                    {cnt33}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Option 4:</span>
                  <span className="itemValue">
                    {cnt34}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Option 5:</span>
                  <span className="itemValue">
                    {cnt35}
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

export default Chart2