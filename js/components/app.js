import React from 'react';
import CommentsList from './CommentsList.js';
import CommentsForm from './CommentsForm.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.addComment = this.addComment.bind(this);
    }
    addComment(value){
        this.state.comments.push({ body: value });
        this.setState({
            comments: this.state.comments
        });
    }
    render() {
        return <section>
            <CommentsList/>
            <CommentsForm handleSubmit={this.addComment}/>
        </section>
    }
}

export default App;
