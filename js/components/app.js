import React from 'react';
import CommentsList from './CommentsList.js';
import CommentsForm from './CommentsForm.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: [
                {
                    body:'eat'
                },
                {
                    body:'sleep'
                },
                {
                    body:'find shelter'
                }
            ]
        }
    }
    render() {
        return <section>
            <CommentsList comments={this.state.comments}/>
            <CommentsForm/>
        </section>
    }
}

export default App;
