import { useState } from "react";
import styles from "./CountryCard.module.css";
// import { Link } from "react-router-dom";
// import BigCountryCard from "./BigCountyCard";
import Link from "next/link";

const CountryCard = ({
  name,
  population,
  capital,
  region,
  flag,
  subregion,
  currencies,
  languages,
  topLevelDomain,
  data,
}) => {
  const [showInfo, setShowInfo] = useState(false);
  console.log({data});
  return (
    <Link
      href= "/country/[id]"
      as={`/country/${name}`}
    >
      <div
        className={styles.CountryCard}
        onClick={() => {
          setShowInfo(!showInfo);
        }}
      >
        {/* <Link className="lol-link" to={{ pathname: `/${name}`  }}/> */}
        <img
          className={styles.CountryCardFlag}
          src={flag}
          alt={name}
          width="25%"
          height="100%"
        />
        <div className={styles.CountyCardInfo}>
          <span className="country-card__name">
            <b>Name:</b>
            {name}
          </span>
          <span className="country-card__population">
            <b>Population: </b>
            {population}
          </span>
          <span className="country-card__region">
            <b>Region: </b>
            {region}
          </span>
          <span className="country-card__region">
            <b>Capital: </b>
            {capital}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
