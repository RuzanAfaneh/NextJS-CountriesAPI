import Image from 'next/image';

import styles from './inputSearchField.module.css';
const InputSearch = ({ searchForCountry }) => {
  return (
    <div className={styles.inputSearchWrapper}>
      <div className={styles.inputSearchImg}>
        <Image src="/search.svg" width="18px" height="30px" />
      </div>
      <input
        className={styles.inputFeild}
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => searchForCountry(e)}
      />
    </div>
  );
};

export default InputSearch;
