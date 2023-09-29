import { useEffect, useState } from "react";

export default function Trivia({data, setStop, queNum, setQueNum}) {

    const[question, setQuestion] = useState(null);
    const [selectedAns, setSelectedAns] = useState(null);
    const [optionClass, setOptionClass] = useState("answer");

    useEffect(()=>{
        setQuestion(data[queNum-1]);
    }, [data, queNum]);

    const handleClick = (a) => {
        setSelectedAns(a);
        setOptionClass("answer active");
        setTimeout(()=>{
            // setSelectedAns(null);
            setOptionClass(a.correct ? "answer correct" : "answer wrong")
            if(a.correct){
                setTimeout(() => {
                    setQueNum(queNum+1);
                    setSelectedAns(null);
                    setOptionClass("answer");
                }, 3500);
            }else{
                setStop(true);
            }
        }, 1500);
    }
    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a)=>(
                    <div className={ selectedAns === a ? optionClass : "answer"} 
                    onClick={() =>handleClick(a)}>{a.text}</div>
                ))}
            </div>

            {/* <div className="question">Ko dirgha rogo bhavati eva sadho? Kim aushadham tatra?</div>
            <div className="answers">
                <div className="answer">Bhava Bhava </div>
                <div className="answer correct">Bhava Vichar</div>
                <div className="answer wrong">Vichar Bhava</div>
                <div className="answer">Vichar Vichar</div>
            </div> */}
        </div>
    );
}