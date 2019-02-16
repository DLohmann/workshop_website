import React, {Component} from "react";

import image from "../assets/img/backimg.png"

class Header extends Component{
	render() {
		return (
			<React.Fragment>
				<div className = "box">
					<img className="headerImage" src={image}/>
					<div className="headerText">Some text!!!</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Header;



















