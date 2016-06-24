import React from 'react';
import ReactDOM from 'react-dom';
import AwesomeComponent from './awesomeComponent.jsx';
import MessageBox from './messageBox.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Hello World!</p>
                <AwesomeComponent />
                <MessageBox />
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));