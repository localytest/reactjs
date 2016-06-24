import React from 'react';
import SubMessage from './subMessage.jsx';

class MessageBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
            messages: [
                'Let\'s start from scratch',
                'Installing and Configuring Webpack',
                'Setting Up Babel-Loader',
                'Adding Some Complexity',
                'Making Webpack Watch Changes',
                'Using npm as a tool runner',
                'Adding some files',
                'Summary',
            ]
        };
    }

    handleAdd(e) {
        console.log(this.refs.newMessage)
        // var newMessage = this.refs.newMessage.getDOMNode().value;
        // var newMessages = this.state.messages.concat([newMessage]);
        // this.setState({
        //     messages : newMessages
        // });
    }

    deleteMessage(message) {
        var newMessage = _.without(this.state.messages, message);
        this.setState({
            messages : newMessage
        });
    }


    render() {
        // let inlineStyle = function () {
        //     return (
        //         display: { this.state.isVisible ? 'block' : 'none' }
        //     );
        // };

        let messages = this.state.messages.map(function (message) {
            return <SubMessage message={message} />;
        });

        return (
            <div>
                <input ref="newMessage" type="text" />
                <button onClick={this.handleAdd}>Add</button>
                <ul>
                    {messages}
                </ul>
            </div>
        );
    }

}

export default MessageBox;