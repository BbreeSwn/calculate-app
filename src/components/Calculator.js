import {useState} from "react";
import './Calculator.css'

const Calculator = () => {
    const [inputValue , setInputValue] = useState('0')

    const disPlay = (value)=> {
        if(inputValue.toString().charAt(0) === "0"){
            setInputValue(value)
        }else{
            setInputValue(inputValue+value)
        }
    }
    
    const clear = ()=>{
        setInputValue('0')
    }

  return (
    <div className="calculator">
      <div className="calculator-display">
        <h1>{inputValue}</h1>
      </div>
      <div className="calculator-btn">
        <button className="operator" onClick={()=>disPlay('+')}>+</button>
        <button className="operator" onClick={()=>disPlay('-')}>–</button>
        <button className="operator" onClick={()=>disPlay('×')}>×</button>
        <button className="operator" onClick={()=>disPlay('÷')}>÷</button>
        {/* Number */}
        <button onClick={()=>disPlay('7')}>7</button>
        <button onClick={()=>disPlay('8')}>8</button>
        <button onClick={()=>disPlay('9')}>9</button>
        <button onClick={()=>disPlay('4')}>4</button>
        <button onClick={()=>disPlay('5')}>5</button>
        <button onClick={()=>disPlay('6')}>6</button>
        <button onClick={()=>disPlay('1')}>1</button>
        <button onClick={()=>disPlay('2')}>2</button>
        <button onClick={()=>disPlay('3')}>3</button>
        <button onClick={()=>disPlay('.')}>.</button>
        <button onClick={()=>disPlay('0')}>0</button>
        <button className="clear-btn" onClick={clear}>C</button>
        <button className="equal operator">=</button>
      </div>
    </div>
  );
};

export default Calculator;
