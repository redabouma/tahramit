import React from 'react';
import './App.css';

function App() {
  const [text, setText] = React.useState('');
  const onTextChange = (event) => {
    setText(event.target.value);
  }
  const result = text.replaceAll('t', 'ت').replaceAll('T', 'ت');
  return (
    <div className="App">
      <div>Welcome to tahramit, please type your text, the app will show you it's magic</div>
      <input value={text} onChange={onTextChange} />
      <div>output: {result}</div>
      <button onClick={() => navigator.clipboard.writeText(result)}>copy to clipboard</button>
    </div>
  );
}

export default App;
