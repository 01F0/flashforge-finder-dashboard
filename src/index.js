import React from 'react';
import ReactDOM from 'react-dom';
import Printer from './components/Printer';

require('./index.css');

class App extends React.Component {

  render() {
    return (
      <div className='parent-container'>
        <Printer ip_address='192.168.1.134' /* camera_ws_url='ws://192.168.1.199:8000/websocket'*/ name='Fiona'/>
        <Printer ip_address='192.168.1.150' name='Finn'/>
      </div>)
}
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);