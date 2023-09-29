import "./App.css";
import Trivia from "./components/Trivia";
import data from "./text/data";
import { useState } from "react";

function App() {

const [queNum, setQueNum] = useState(1);
const [stop, setStop] = useState(false);
const [earned, setEarned] = useState("Rs. 0");

const moneyPyramid = [
    { id: "1", amount: "Rs. 5000" },
    { id: "2", amount: "Rs. 8000" },
    { id: "3", amount: "Rs. 10000" },
    { id: "4", amount: "Rs. 15000" },
    { id: "5", amount: "Rs. 25000" },
    { id: "6", amount: "Rs. 50000" },
    { id: "7", amount: "Rs. 100000" },
    { id: "8", amount: "Rs. 200000" },
    { id: "9", amount: "Rs. 400000" },
    { id: "10", amount: "Rs. 800000" },
    { id: "11", amount: "Rs. 1600000" },
    { id: "12", amount: "Rs. 3200000" },
    { id: "13", amount: "Rs. 6400000" },
    { id: "14", amount: "Rs. 12500000" },
    { id: "15", amount: "Rs. 25000000" }
  ]
  const incre = () => {
    setQueNum(queNum + 1);
  }
  ;

  return (
    <div className="app">
      <div className="main">
        <h1>Who wants to be a Millionaire</h1>
        
          {stop ?<h2> {"You earned " + earned} </h2>:(
            <>
                    <div className="top">
          <div className="timer">30 </div>
        </div>
        <div className="bottom">
          <Trivia data={data} setStop={setStop} queNum={queNum} setQueNum={setQueNum} />
        </div>
            </>
          
          )}
        
        {/* <button id="incre" onClick={incre}>Incre</button> */}

      </div>
      <div className="pyramid">
        <ul className="moneylist">
            {moneyPyramid.map((m) => (

              <li className={queNum != m.id ? "moneylistitem": "moneylistitem active"}>
                    <span className="moneylistitemnumber">{m.id}</span>
                    <span className="moneylistitemamount">
                      {m.amount}
                    </span>
              </li>
            )).reverse()
            }            
        </ul>
      </div>
    </div>
  );
}


export default App;
