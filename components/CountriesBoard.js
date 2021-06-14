import CountryCard from './CountryCard';
import styles from './CountryCard.module.css';

const CountriesBoard = ({ data }) => {
  return (
    <div className={styles.countriesBoard}>
      {data?.map((item, i) => (
        <CountryCard data={item} {...item} key={i} />
      ))}
    </div>
  );
};

export default CountriesBoard;