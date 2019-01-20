import React from 'react';
import '../css/App.css';
import Report from "./Report";

class App extends React.Component {
  render() {
    return (
      <div className="mini-true container-fluid">
			<div className="header">
				<header>
					<h1>[Ministry-of-Truth]</h1>
					<p>"Freedom of thought makes slaves of us all"<br/>- Big Brother</p>
				</header>
			</div>
			<Report/>
      </div>
    );
  }
}

export default App;
