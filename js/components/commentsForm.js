import React from 'react';
import { connect } from 'react-redux'

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

const mapDispatchToProps = function(dispatch){
    return {
        handleSubmit: function(body){
            fetch(
                'http://localhost:3000/comments',
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({ body:body })
                }
            ).then(function(response){
                response.json().then(function(data){
                    dispatch({type:'ADD', comment: { body: body }});
                });
            });
        }
    }
}

const VisibleCommentsForm = connect(
    null,
    mapDispatchToProps
)(CommentsForm)

export default VisibleCommentsForm;
