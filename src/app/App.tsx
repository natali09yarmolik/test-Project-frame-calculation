import React from 'react';
import './App.css';
import {DataForCalculation} from "project/dataForCalculation/DataForCalculation";
import {Result} from "project/result/Result";

function App() {
  return (
    <div className="App">
        <h1>Расчет материалов для каркаса с покрытием листов</h1>
        <div className={'calculator'}>
            <DataForCalculation/>
            <Result />
        </div>
    </div>
  );
}

export default App;
