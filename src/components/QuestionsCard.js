import React from 'react'

export const QuestionsCard = ({question, answerOptions, checkAnswer}) => {
	return (
		<div className="card mb-6">
		  <div className="card-content">
		    <div className="content">
		      {question}
		    </div>
		  </div>
		  <footer className="card-footer">
		  	{
          answerOptions.map((answerOption, index) => (
            <a className="card-footer-item" onClick={() => 
            	checkAnswer(answerOption.option)} key={index}>{answerOption.option}</a>
          ))
        }
		  </footer>
		</div>

	)
}