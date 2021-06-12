import CountryCard from "./CountryCard";
import Link from "next/link";
import styles from "./countryCard.module.css";

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
