import React from 'react';
import CommentsList from './CommentsList.js';
import CommentsForm from './CommentsForm.js';

class App extends React.Component {
    render() {
        return <section>
            <CommentsList/>
            <CommentsForm/>
        </section>
    }
}

export default App;
