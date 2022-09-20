import React, { useState } from "react";
import "./Auth.css";
import Login from "./Login/Login";
import Register from "./Register/Register";
function Auth({ setToken }) {
	let [authMode, setAuthMode] = useState("signin");

	const changeAuthMode = () => {
		setAuthMode(authMode === "signin" ? "signup" : "signin");
	};

	if (authMode === "signin") {
		return <Login setToken={setToken} changeAuthMode={changeAuthMode} />;
	}

	return <Register changeAuthMode={changeAuthMode} />;
}

export default Auth;
