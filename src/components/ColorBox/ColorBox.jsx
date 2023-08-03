import { useState } from 'react';
import styles from './ColorBox.module.css';

const ColorBox = ({ color }) => {
  const [squareColor, setSquareColor] = useState('');
  return (
    <div
      className={`wrapper ${styles['color-box']}`}
      style={{ backgroundColor: color }}
    >
      {color ? color : 'Empty value'}
    </div>
  );
};

export default ColorBox;
