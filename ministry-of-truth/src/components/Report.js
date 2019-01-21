import React from 'react';
import "../css/Report.css";

class Report extends React.Component {
	render() {
		function randomNum() {
			let ranNumb = Math.floor(Math.random()*9999999999999) - 10000000;
			console.log(ranNumb);
			return ranNumb;
		}
		return (
			<div className="report">
				<div className="container-fluid align-items-center justify-content-center">
					<h2>
						Protect Our Perfect Society<br/>Report Suspect Comrade
					</h2>
					<h3>Universal ID of Prosel:</h3>
					<h5 className="bar">{randomNum()}</h5>
					<br/>
					<select>
						<option>Thought Crime</option>
						<option>Implied Sedition</option>
						<option>Face Crime</option>
						<option>Subversive Action</option>
						<option>Uttering OldSpeak</option>
					</select>
					<br/>
					<button onClick={() => alert("DOUBLEPLUSGOOD!\nRETRIEVAL TEAM DISPATCHED\nSUSPECT WILL BE PROCESSED AND RE_EDUCATED OR RECYCLED\nBIG BROTHER IS ALWAYS WATCHING")}>CrimeStop</button>
					<br/>
					<img alt="ingsoc" src={require('../images/500px-Ingsoc_logo_from_1984.svg.png')}/>
					<p className="winston-lives">.</p>
				</div>
			</div>
		)
	}
}

export default Report;