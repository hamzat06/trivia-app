import React from 'react'

export const WelcomeScreen = ({goToQuiz}) => {
	return (
    <div className="has-text-centered">
      <h3 className="is-size-2-tablet is-size-3-mobile has-text-centered has-text-weight-bold pb-6">Welcome to the Trivia Challenge!</h3>
      <h3 className="is-size-2-tablet is-size-3-mobile has-text-centered pb-6">You will be presented with 10 true or false questions.</h3>

      <h3 className="is-size-1-desktop is-size-2-tablet is-size-3-mobile has-text-centered pb-6">Can you score 100%?</h3>
      <button className="button is-large" onClick={goToQuiz}>Begin</button>
    </div>
	)
}