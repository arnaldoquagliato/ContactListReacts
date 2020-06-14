import React from 'react';
import '../App.scss';



class Filters extends React.Component {
	render() {
	return <section className="filters">{this.props.children}</section>
	}
}

export default Filters;
