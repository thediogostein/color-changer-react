import ColorBox from './components/ColorBox/ColorBox';
import ColorInput from './components/ColorInput/ColorInput';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');

  return (
    <div className="App">
      <ColorBox color={color} />
      <ColorInput color={color} setColor={setColor} />
    </div>
  );
}

export default App;
