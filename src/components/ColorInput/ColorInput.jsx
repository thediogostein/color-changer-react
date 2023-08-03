import styles from './ColorInput.module.css';

const ColorInput = () => {
  return (
    <div className={`wrapper  ${styles['color-input']} `}>
      <label className={styles['sr-only']}>Empty Value</label>
      <input className="styling-components" placeholder="Add color name" />
    </div>
  );
};

export default ColorInput;
