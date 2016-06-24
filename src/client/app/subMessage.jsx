import React from 'react';

class SubMessage extends React.Component {

    handleDelete (e){
        
    }

    render() {
        return (
            <li>{this.props.message} <button onClick={this.handleDelete}>x</button></li>
        );
    }

}

export default SubMessage;