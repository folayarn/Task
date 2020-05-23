
import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/Example'



function App() {
  return (
    <div className="row">
    <div className="col-md-3"></div>
    <div className="col-md-6">
                 <div className="card">
<div className="card-body">

      <Example/>


</div>
                    </div>
                </div>
                <div className="col-md-3"></div>
</div>

  )}


ReactDOM.render(

    <App />,document.getElementById('example')

);



