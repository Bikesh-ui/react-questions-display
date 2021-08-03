import React , { useState  } from 'react';
import Question from './Question';
import data from './data';

function App(){
  const[questions,setQuestion] = useState(data)
  return(
    <main>
      <h2>Our Questions</h2>
      <div>
        {
          questions.map((question)=>{
            return (
              <Question key={question.id} {...question} />
            )
          })
        }
      </div>
    </main>
  )

}
export default App;
