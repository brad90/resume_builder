import React from "react";
import { useState } from "react";

const Login = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<div>
			{isLogin && (
				<div>
					<h1>Hello</h1>
					<button onClick={setIsLogin(false)}>Sign Up</button>
				</div>
			)}
			{!isLogin && (
				<div>
					<h1>Hello</h1>
					<button onClick={setIsLogin(true)}>Login</button>
				</div>
			)}
		</div>
	);
};

export default Login;
