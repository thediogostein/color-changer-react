import { useState } from 'react';
import styles from './ColorBox.module.css';

const ColorBox = ({ color, isDarkText }) => {
  const [squareColor, setSquareColor] = useState('');
  return (
    <section
      className={`wrapper ${styles['color-box']}`}
      style={{ backgroundColor: color, color: isDarkText ? '#000' : '#fff' }}
    >
      {color ? color : 'Empty value'}
    </section>
  );
};

export default ColorBox;
