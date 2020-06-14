import React from 'react';
import '../App.scss';

class Contact extends React.Component {
  render() {
    return (<article className="contact">{this.props.children}</article>);
  }
}

export default Contact;
