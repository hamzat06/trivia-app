import React from 'react'

export const Loader = ({ loading }) => {
  return loading ?
    (
      <progress class="progress is-large is-info" max="100">60%</progress>
    ) : null
}

