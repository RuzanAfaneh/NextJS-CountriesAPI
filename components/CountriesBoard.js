import CountryCard from "./CountryCard";
import Link from "next/link";
import styles from "./CountryCard.module.css";

const CountriesBoard = ({ data }) => {
  return (
    <div className={styles.CountriesBoard}>
      {data?.map((item, i) => (
        <CountryCard data={item} {...item} key={i} />
      ))}
    </div>
  );
};

export default CountriesBoard;
