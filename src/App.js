import React from 'react'

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

function App() {
  return (
    <div>{ GITHUB_TOKEN }</div>
  );
}

export default App