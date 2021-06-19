import Link from 'next/link';
import { useState } from 'react';

import styles from './CountryCard.module.css';

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
  const Card = () => {
    return (
      <div
        className={styles.countryCard}
        onClick={() => {
          setShowInfo(!showInfo);
        }}>
        <img
          className={styles.countryCardFlag}
          src={flag}
          alt={name}
          width="25%"
          height="100%"
        />
        <div className={styles.countyCardInfo}>
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
    );
  };

  return (
    <>
      <Link href="/country/[id]" as={`/country/${name}`}>
        {Card()}
      </Link>
    </>
  );
};

export default CountryCard;
