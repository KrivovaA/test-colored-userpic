import React from 'react';
import picSrc from './pic.jpg'
import './App.css';
import ColoredUserpic from './ColoredUserpic'

function App() {
  return (
    <div className="App">
      <ColoredUserpic
        src={picSrc}
        size={150}
        margin={4}
        backgroundColor='red'
        colors={['green', 'blue']}
        hoverColors={['blue', 'green']}
        colorWidth={6}
      />
    </div>
  );
}

export default App;
