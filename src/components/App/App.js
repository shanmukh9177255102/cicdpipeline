import React, { useState } from "react";
import './App.css'

const operaters = ['+','-','*','/']
function cal(){ 
    const defaultState = { op:'+', a:undefined,b:undefined, res:undefined},
    [s, changeState]=useState(defaultState),
    calculate = () => {
        const {a,b,op}=s,
        r = Math.floor(eval(`${a}${op}${b}`))
        changeState({...s, res: r})
    },
    clear = () => { changeState(defaultState)}
    return (<div className="main-container">
    <div>
    <label>Input1:</label>
    <input id='a' name='a' type="text" onChange={(e)=> changeState({...s,a: e.target.value})} value={s.a}/>
    </div>
    <div>{s.op}</div>
    <div>
    <label>Input2:</label>
    <input id='b' name='b' type="text" onChange={(e)=> changeState({...s,b: e.target.value})} value={s.b}/>
    </div>
    <div>
        {operaters.map((e,i) =>(<button key={`oid${i}s`}id={`o${i}`} onClick={ele => { changeState({...s,op: e})}}>{e}</button>))}
    </div>
    <button id="calculate" onClick={calculate}>calculate</button>
    <button id="clear" onClick={clear}>clear</button>
    <div id="result">Result:{s.res}</div>
</div>)}

export default cal
