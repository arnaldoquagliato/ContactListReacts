import React from 'react';

import '../App.scss';



class Container extends React.Component {
	
	render() {
		return (
        <div className="container">{this.props.children}</div>
		);
	}
}

export default Container;
