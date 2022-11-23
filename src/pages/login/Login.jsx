import { useState } from "react";
import Logo from '../../imgs/Gujarat_Police_Logo.png';
// import axios from "axios";
// import { Link } from "react-router-dom";
import styles from "./styles.module.css";
// import Home from "./pages/home/Home";
// import NewQRCode from "../../components/NewQRCode/NewQRCode"
// import { Home, WindowSharp } from "@mui/icons-material";
import reld from "./../../imgs/download.png"
const cap = () => {
	var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
	  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '+'
	];
	var a = alpha[Math.floor(Math.random() * 71)];
	var b = alpha[Math.floor(Math.random() * 71)];
	var c = alpha[Math.floor(Math.random() * 71)];
	var d = alpha[Math.floor(Math.random() * 71)];
	var e = alpha[Math.floor(Math.random() * 71)];
	var f = alpha[Math.floor(Math.random() * 71)];
  
	var final = a + b + c + d + e + f;
	document.getElementById("capt").value = final;
  }

  const validcap = () => {
	var stg1 = document.getElementById('capt').value;
	var stg2 = document.getElementById('captff').value;
	if (stg1 == stg2) {
	  alert("Form is validated Succesfully");
	  return true;
	} else {
	  alert("Please enter a valid captcha");
	  return false;
	}
  }


const Login = () => {
	const [email, setemail] = useState("");
	const [password, setpass] = useState("");
	const [error, setError] = useState("");
	

	const handleChange1 = (event) => {
		setemail(event.target.value);
	};
	const handleChange2 = (event) => {
		setpass(event.target.value);
	};

	const handleSubmit = async (e) => {
    console.log(email);
    console.log(password);
		e.preventDefault();
	// 	try {
	// 		const url = "http://localhost:3001/api/auth";
	// 		const res = await axios.post(url, {email, password});
    //   console.log("entered");
    // //   const res = fetch(url, {
    // //     method : 'POST',
    // //     headers : {
    // //       "Content-Type" : "application/json",
    // //     },
    // //     body : JSON.stringify({
    // //       email, password
    // //     })
    // //   })
	// 		localStorage.setItem("token", res.data);
	// 		window.location = "/home";
	// 	} catch (error) {
	// 		if (
	// 			error.response &&
	// 			error.response.status >= 400 &&
	// 			error.response.status <= 500
	// 		) {
	// 			setError(error.response.data.message);
	// 		}
	// 	}

  if((email==="a@gmail.com" && password==="A@123456")){
	alert("Login Successfull");
	window.location="./home";
  }
  else{
	alert("Incorrect Password OR Email Please try again  ");
	window.location.reload();
  }


	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
					<span><img className={styles.policelogo} src={Logo} alt="logo" /></span>
						<h2>Login to Dashboard</h2>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange1}
							value={email.email}
							required
							className={styles.input}
						/>

						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange2}
							value={password.password}
							required
							className={styles.input}
						/>
						<div className ="Cap">
						<input className={styles.inputcap} type="text" id="capt" readOnly/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<h3 style={{fontSize: "18px",paddingLeft:"100px",display: 'flex'}}> <img style={{width: '30px',height:'30px',paddingLeft:'30px'}} src={reld} onClick={cap} className="capt"/>Press to generate to Captcha </h3>
						</div>
        <input type="text" className={styles.input} id="captff" placeholder="Enter Captcha"/>
        {/* <button id="signin-button" onClick={validcap}>Log In</button> */}
						<button type="submit" onClick={validcap} className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>

				{/* <div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div> */}
				{/* <NewQRCode/> */}
			</div>
		</div>
	);
};

export default Login;