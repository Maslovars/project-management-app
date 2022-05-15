// import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./LangToggler.styled";
import styles from './LangToggler.module.css';

const LangToggler: React.FC = () => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" />
      <span className={styles.checkboxSwitch} data-label-en="EN" data-label-ru="RU"></span>
    </label>
  );
};

export default LangToggler;
