import React from 'react';
import questions from './data';
import SingleQuestion from './Question';
import './App.css';

function App() {
  return <main>
    <div className='container'>
      <h3>question and answers about login</h3>
      <section className='info'>
        {questions.map((question) => {
          return <SingleQuestion key={question.id}
          {...question} />;
        })}
      </section>
    </div>
  </main>;
}

export default App;