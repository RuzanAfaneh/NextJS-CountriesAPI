import Link from 'next/link';

import styles from './BigCountryCard.module.css';

const BigCountryCard = ({
  borders,
  capital,
  currencies,
  flag,
  languages,
  name,
  nativeName,
  population,
  region,
  subregion,
  topLevelDomain,
}) => {
  return (
    <div
      style={{
        justifyContent: 'center',
        display: 'flex',
        padding: '0 30px',
      }}>
      <div className={styles.bigCard}>
        <div
          style={{
            marginTop: '100px',
            marginBottom: '30px',
            // boxShadow: "0px 0px 10px 3px hsl(0, 0%, 88%)",
            // maxWidth: "80px",
            textAlign: 'center',
            padding: '8px',
            alignContent: 'center',
            borderRadius: '2px',
            flex: '0 0 100%',
          }}>
          <div
            style={{
              // marginTop: "100px",
              alignContent: 'center',
              borderRadius: '2px',
              boxShadow: '0 0 10px 3px hsl(0, 0%, 88%)',
              marginBottom: '60px',
              maxWidth: '80px',
              padding: '8px',
              textAlign: 'center',
            }}>
            <Link href="/">
              <span style={{ cursor: 'pointer' }}>&#8592; Back </span>
            </Link>
          </div>
        </div>
        {/* <div> */}

        <img
          className={styles.bigCardFlag}
          height="480"
          width="480"
          src={flag}
          alt={name}
        />
        {/* </div> */}
        <div className={styles.countryCardInfo}>
          <span className={styles.countryCardName}>{name}</span>
          <div className={`${styles.cardInfo} "country-card__nativeName"`}>
            <b>Native name: </b>
            {nativeName}
          </div>
          <div className={`${styles.cardInfo} "country-card__population"`}>
            <b>Population: </b>
            {population}
          </div>
          <div className={`${styles.cardInfo} "country-card__region"`}>
            <b>Region: </b>
            {region}
          </div>
          <div className={`${styles.cardInfo} "country-card__region"`}>
            <b>Capital: </b>
            {capital}
          </div>
          <div className={`${styles.cardInfo} "country-card__name"`}>
            <b>subregion:</b>
            {subregion}
          </div>
          <div className={`${styles.cardInfo} "country-card__topLevelDomain"`}>
            <b>topLevelDomain: </b>
            {topLevelDomain}
          </div>
          <div className={`${styles.cardInfo} "country-card__currencies"`}>
            <b>currencies: </b>
            {currencies?.map((currency, i) => (
              <span key={`currencies--${i}`}>{currency.name} </span>
            ))}
          </div>
          <div className={`${styles.cardInfo} "country-card__languages"`}>
            <b>languages: </b>
            {languages?.map((language, i) => (
              <span key={`languages--${i}`}>{language.name} </span>
            ))}
          </div>
          {borders.length > 0 && (
            <div
              className={`${styles.countyBordersContainer} ${styles.CardInfo}`}>
              <span className={styles.corders}>Border Countries: </span>
              {borders.map((item, i) => {
                return (
                  <span className={styles.countryBorder} key={`border--${i}`}>
                    {item}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default BigCountryCard;
