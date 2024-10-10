/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import logo from "./assets/images/logo-universal.png";
import { Greet } from "../wailsjs/go/main/App";
import Top from "./page/top/Top";

const title = css`
  border: 10px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const logoStyle = css`
  display: block;
  width: 50%;
  height: 50%;
  margin: 0;
  padding: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-origin: content-box;
`;

function App() {
	return (
		<div>
			<Top />
		</div>
	);
}

export default App;
