import { Button } from '@material-ui/core';
import React,{useState} from 'react';

import './App.css';
import GraphView from './GraphView/GraphView';
import Homepage from './Homepage/Homepage'


function App() {
  const [home,setHome]=useState(false);
  const homepage=()=>{
    setHome(true)
  }
  const graphView=()=>{
    setHome(false)
  }
  return (
      <div className="App">
        <Button variant="contained" color="secondary" onClick={homepage}>Homepage</Button>
        <Button variant="contained" color="secondary" onClick={graphView}>Graph View</Button>
        <div style={{marginTop:50}}>
        {home?
          <Homepage></Homepage>
          :<GraphView></GraphView>
          }
        </div>
      </div>
  );
}

export default App;
