import styles from './LangToggler.module.css';
import { useRouter } from 'next/router';

const LangToggler: React.FC = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const handleLanguageToggle = () => {
    if (locale === 'en') {
      router.push({ pathname, query }, asPath, { locale: 'ru' });
    }
    if (locale === 'ru') {
      router.push({ pathname, query }, asPath, { locale: 'en' });
    }
  };

  return (
    <label className={styles.checkbox} onClick={handleLanguageToggle}>
      <input type='checkbox' defaultChecked={locale === 'ru'} />
      <span className={styles.checkboxSwitch} data-label-en='EN' data-label-ru='RU'></span>
    </label>
  );
};

export default LangToggler;
