import ColorBox from './components/ColorBox/ColorBox';
import ColorInput from './components/ColorInput/ColorInput';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <ColorBox color={color} isDarkText={isDarkText} />
      <ColorInput
        color={color}
        setColor={setColor}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
