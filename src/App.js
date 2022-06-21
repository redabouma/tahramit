import React from 'react';
import './App.css';

function App() {
  const [text, setText] = React.useState('');
  const onTextChange = (event) => {
    setText(event.target.value);
  }
  const result = text.replace('t', 'ت')
  return (
    <div className="App">
      <div>Welcome to tahramit, please type your text, the app will show you it's magic</div>
      <input value={text} onChange={onTextChange} />
      <div>output: {result}</div>
    </div>
  );
}

export default App;
