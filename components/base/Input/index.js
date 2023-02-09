import styles from './styles.module.scss';
export default function Input({ label, type = 'text', value, setValue = () => {}, ...propsInput }) {
  return (
    <div className={styles['form-input']}>
      <label className={styles['label']}>{label}</label>
      <div className={styles['input-div']}>
        <input
          type={'text'}
          className={styles['input']}
          value={value}
          {...propsInput}
          onChange={(e) => {
            setValue(e.target.value);
            if (propsInput?.onChange) {
              propsInput.onChange();
            }
          }}
        />
      </div>
    </div>
  );
}
