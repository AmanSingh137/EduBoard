import './App.css';
import Quiz from './Components/Quiz';
function App() {
  const questions = [{
    ques: "What is 1+2=?",
    op1: "3",
    op2: "1",
    op3: "2",
    op4: "None of these",
    answer: 1
  }, {
    ques: "What is 2+3=?",
    op1: "3",
    op2: "5",
    op3: "2",
    op4: "None of these",
    answer: 2
  }, {
    ques: "What is 7x3=?",
    op1: "33",
    op2: "12",
    op3: "21",
    op4: "None of these",
    answer: 3
  }, {
    ques: "What is 500-430=?",
    op1: "930",
    op2: "700",
    op3: "20",
    op4: "None of these",
    answer: 4
  }, {
    ques: "What is 2000/5=?",
    op1: "400",
    op2: "200",
    op3: "100",
    op4: "None of these",
    answer: 1
  }, {
    ques: "What is 103x13=?",
    op1: "3119",
    op2: "1339",
    op3: "2939",
    op4: "None of these",
    answer: 2
  }]
  return (
    <div className="App">
      <Quiz ques={questions} />
    </div>
  );
}

export default App;
