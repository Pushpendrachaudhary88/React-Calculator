import React,{useState} from "react"


const Calci = () =>{
    const [result,setResult] = useState("");

    const clickHandler = (e) =>{
        setResult(result.concat(e.target.value))
    }

    const clearDisplay = () =>{
        setResult("");
    }

   const backspace = () =>{
    setResult(result.slice(0,result.length-1)); // -1

   }

   const calculator = () =>{
    try{
        setResult(eval(result).toString());
    }
    catch(err){
        setResult("Error")
    }
   }


return (
    <div  className="calc">
        <h1>React Calculator </h1>
        <input type="text" placeholder="" id="answer" value={result} />
        <p>CASIO</p>
        <div className="btn">
        <input type="button" value="AC" className="button" onClick ={clearDisplay}/>
        <input type="button" value="C" className="button" onClick ={backspace} />
        <input type="button" value="%" className="button" onClick ={clickHandler}/>
        <input type="button" value="/" className="button" onClick ={clickHandler}/>
        <input type="button" value="7" className="button" onClick ={clickHandler}/>
        <input type="button" value="8" className="button" onClick ={clickHandler}/>
        <input type="button" value="9" className="button" onClick ={clickHandler}/>
        <input type="button" value="*" className="button" onClick ={clickHandler}/>
        <input type="button" value="4" className="button" onClick ={clickHandler}/>
        <input type="button" value="5" className="button" onClick ={clickHandler}/>
        <input type="button" value="6" className="button" onClick ={clickHandler}/>
        <input type="button" value="-" className="button" onClick ={clickHandler}/>
        <input type="button" value="1" className="button" onClick ={clickHandler}/>
        <input type="button" value="2" className="button" onClick ={clickHandler}/>
        <input type="button" value="3" className="button" onClick ={clickHandler}/>
        <input type="button" value="+" className="button" onClick ={clickHandler}/>

        <input type="button" value="0" className="button-button2" onClick={clickHandler}/>
        <input type="button" value="." className="button-button1" onClick={clickHandler} />
        <input type="button" value="=" className="button" onClick ={calculator}/>
        </div>

    </div>
    )
}

export default Calci;