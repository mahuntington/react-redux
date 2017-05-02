import React from 'react';

class CommentsForm extends React.Component {
    render() {
        return <form>
            <input type="text" placeholder="value"/>
            <input type="submit" value="Create Todo"/>
        </form>
    }
}

export default CommentsForm;
