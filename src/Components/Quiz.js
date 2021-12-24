import React, { useState, useEffect } from 'react';
import './Quiz.css';

const Quiz = (props) => {
    const [answer, setAnswer] = useState('None of these');
    const [index, setIndex] = useState(0);

    const questions = props.ques;
    //console.log(questions.length);
    //console.log(questions); ques op1 op2 op3 op4 answer
    // useEffect(() => {
    //     setAnswer('None of these');
    // }, [])
    const clickHandler = () => {
        if(index!==0) {
            setIndex(index-1);
        } 
        setAnswer('None of these');
    }

    const clicker = () => {
        if(index!==questions.length) {
            setIndex(index+1);
        } 
        setAnswer('None of these');
    }

    return (
        <div>
            <h2 className='header'>Quiz title</h2>
            <div className="question">
                <h5>Question {index + 1}</h5>
                <p>{questions[index].ques}</p>
            </div>
            <div className="options">
                <button className='but' onClick={() => {
                    questions[index].answer === 1 ? setAnswer('Correct!') : setAnswer('Incorrect!!')
                }}>{questions[index].op1}</button>
                <button className='but'  onClick={() => {
                    questions[index].answer === 2 ? setAnswer('Correct!') : setAnswer('Incorrect!!')
                }}>{questions[index].op2}</button>
                <button className='but' onClick={() => {
                    questions[index].answer === 3 ? setAnswer('Correct!') : setAnswer('Incorrect!!')
                }}>{questions[index].op3}</button>
                <button className='but'onClick={() => {
                    questions[index].answer === 4 ? setAnswer('Correct!') : setAnswer('Incorrect!!')
                }}>{questions[index].op4}</button>
                <div className="access">
                    <button
                        disabled={index === 0}
                        onClick={clickHandler} className={index === 0 ? 'prev-dis' : 'prev'}>Prev</button>
                    <button disabled={index === questions.length - 1}
                        onClick={clicker} className={index === questions.length - 1 ? 'prev-dis' : 'prev'}>Next</button>
                </div>
            </div>
            <div className="control-panel">
                <p className='ques'>Question {index+1}/{questions.length} </p>
                <div className="dot-handler">
                    <div className="row">
                        <div className="column">
                            <span className={index === 0 ? 'dot-vis' : 'dot'}>1</span>
                        </div>
                        <div className="column">
                            <span className={index === 1 ? 'dot-vis' : 'dot'}>2</span>
                        </div>
                        <div className="column">
                            <span className={index === 2 ? 'dot-vis' : 'dot'}>3</span>
                        </div>
                        <div className="column">
                            <span className={index === 3 ? 'dot-vis' : 'dot'}>4</span>
                        </div>
                        <div className="column">
                            <span className={index === 4 ? 'dot-vis' : 'dot'}>5</span>
                        </div>
                        <div className="column">
                            <span className={index === 5 ? 'dot-vis' : 'dot'}>6</span>
                        </div>
                    </div>
                </div>
            </div>
                <div className="final">
                    <h3>{answer === 'None of these' ? null : answer}</h3>
                </div>
        </div>
    )
}

export default Quiz;
