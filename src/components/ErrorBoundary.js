import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor (props) {
    super (props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch (error, info) {
    this.setState({ hasError: true })
  }

  render () {
    if (this.state.hasError) {
       return (
         <div className="has-text-centered">
           <h1 className="has-text-danger">Ooops! That is not good</h1>
         </div>
       )
    }
    return this.props.children
  }
}

export default ErrorBoundary