import React from 'react';

import '../App.scss';

class Topbar extends React.Component {
	
	render() {
		return (
		<div className="topbar">{this.props.children}</div>
		);
	}
}

export default Topbar;
