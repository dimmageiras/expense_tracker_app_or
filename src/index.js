import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {HeaderCOMP, MainCOMP, FooterCOMP} from "./components/App";

ReactDOM.render(
	<React.StrictMode>
		<HeaderCOMP />
	</React.StrictMode>,
	document.querySelector("header")
);
ReactDOM.render(
	<React.StrictMode>
		<MainCOMP />
	</React.StrictMode>,
	document.querySelector("main")
);
ReactDOM.render(
	<React.StrictMode>
		<FooterCOMP />
	</React.StrictMode>,
	document.querySelector("footer")
);
