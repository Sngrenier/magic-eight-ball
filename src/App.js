import './App.css';
import React, { useState} from "react";
import {useHistory} from 'react-router-dom';



export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [history, setHistory] = useState("");


  const getAnswer = (e) => {
    e.preventDefault();
    if (!question) {
      return;
    }
    // generate a random answer to display when the user clicks 'get answer' button (or if 'return' key is pressed)
    const index = Math.floor(Math.random() * answers.length);
    setAnswer(answers[index]);
  };

  const getHistory= (e) => {
    e.preventDefault();
    if (!answer){
      return;
    }
    const history = Math.floor(answers.length);
    setHistory(answers[history])
  }
  // const history = history.push(setAnswer(answers[index].length))
  
  
  // add active class and placeholder 
  const FloatLabel = (() => {
    const handleFocus = (e) => {
      const target = e.target;
      target.parentNode.classList.add('active');
      target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
    };
    // remove active class and placeholder
    const handleBlur = (e) => {
      const target = e.target;
      if(!target.value) {
        target.parentNode.classList.remove('active');
      }
      target.removeAttribute('placeholder');    
    };  
    // track the events
    const bindEvents = (element) => {
      const floatField = element.querySelector('input');
      floatField.addEventListener('focus', handleFocus);
      floatField.addEventListener('blur', handleBlur);    
    };
    // DOM elements
    const init = () => {
      const floatContainers = document.querySelectorAll('.float-container');
      floatContainers.forEach((element) => {
        if (element.querySelector('input').value) {
            element.classList.add('active');
        }      
        bindEvents(element);
      });
    };
    return {
      init: init
    };
  })();
  FloatLabel.init();


  //List of potential answers given by the eight-ball
const answers = [
  "It is absolute",
  "Yes, definitely",
  "Without a doubt",
  "Not sure",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again"
];


  return (
    <div className="app-container">
      <form onSubmit={getAnswer}>
        <div>
          <div>
            <h1 className="app-title">Magic 8-Ball</h1>
            <img alt="eight-ball-img" className="ball-image" src="https://images.squarespace-cdn.com/content/v1/60012a7d0b53fb47a674ff35/1613709499851-UYGPK5CPAMQNOGKOM8NC/ArtSmart-8ball.gif"></img>
          </div>
          <p className="answer-container">{answer}</p>
          <div id="floatContainer1" class="float-container">
          <label for="floatField1">Your Question</label>
          <input 
            type="text"  
            id="floatField1" 
            className="question"
            data-placeholder="Type your question here"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
        </div>
        <button className="submit-btn" type="submit">SUBMIT</button>
        <button onClick={getHistory} className="history-btn" type="history">SHOW HISTORY</button>
      </form>
    
    </div>
  );
}