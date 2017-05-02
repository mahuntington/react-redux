import React from 'react';

class CommentsForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.handleSubmit(this.refs.body.value);
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
            <textarea ref="body" type="text" placeholder="Your Comment Here"></textarea>
            <input type="submit" value="Submit Comment"/>
        </form>
    }
}

export default CommentsForm;
