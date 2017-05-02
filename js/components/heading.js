import React from 'react';

class Heading extends React.Component {
    render() {
        return <h1>Hello, {this.props.title}!</h1>;
    }
}

export default Heading;
