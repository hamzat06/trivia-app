import React from 'react';
import { QuestionsCard } from './QuestionsCard';
import { Loader } from './Loader';

export const Quiz = ({currentQuestion, questions, answerOptions, checkAnswer, loading}) => {
	return (

		<div className="has-text-centered">
			{ !loading && !questions.length ? (
				<div className='has-text-centered'><span className='has-text-weight-bold has-text-danger'>Error fetching Questions, check internet connection.</span> <a href='/' className='button is-link'>Reload</a></div> ): (
				<div>
					{
						loading === true ? (
							<div className="p-6 has-text-centered">
								<h3 className="is-size-3 mb-6">Loading Quiz</h3>
								<Loader loading={loading}/>
							</div>
							
						) : (
							<>
								<h3 className="is-size-2-tablet is-size-3-mobile mb-6">{questions[currentQuestion].category}</h3>
								<QuestionsCard question={questions[currentQuestion].question} answerOptions={answerOptions} checkAnswer={checkAnswer} />
								<h3 className="mb-6 is-size-4 has-text-weight-bold">{currentQuestion + 1} of {questions.length}</h3>
							</>
						)
					}
				</div>
				)
			}
		</div>
	)
}
