import React from 'react';

import '../App.scss';

import { ReactComponent as LogoSvg } from "../assets/img/logo.svg";


class HeaderTopbar extends React.Component {
	
	render() {
		return (
			<a href="/" className="topbar__logo">
				<LogoSvg alt="Logo Instagram" />
			</a>
		);
	}
}

export default HeaderTopbar;
