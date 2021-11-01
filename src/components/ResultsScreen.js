import React from 'react'

export const ResultsScreen = ({playAgain, questions, score}) => {
	return (
		<div className="has-text-centered">
			<h3 className="has-text-centered is-size-4 has-text-weight-bold">You Scored</h3>
			<h3 className="has-text-centered is-size-4 has-text-weight-bold">{score} / 10</h3>
			<div className="py-6 has-text-left">
				{
          questions.map((question, index) => {
            return(
              <p>
              	{ question.passed === true ? (<span className="has-text-success"> <span className="mr-2">+</span> {question.question}</span>) : (<span className="has-text-danger" key={index}> <span className="mr-2">-</span> {question.question}</span>)
              	}
            		
              </p>
            )
          })
        }
			</div>
			<button className="button is-large" onClick={playAgain}>Play Again?</button>
		</div>
	)
}