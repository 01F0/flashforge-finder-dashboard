var React = require('react');
var ReactDOM = require('react-dom')
var Printer = require('./components/Printer')

require('./index.css');

class App extends React.Component {

    render() {
      return (
        <div className='parent-container'>
          <Printer ip_address='192.168.1.164' name='Fiona'/>
          <Printer ip_address='192.168.1.156' name='Finn'/>
        </div>)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);