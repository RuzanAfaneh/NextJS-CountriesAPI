import Link from "next/link";

import styles from "./BigCountryCard.module.css";

const BigCountryCard = ({
  name,
  population,
  capital,
  region,
  flag,
  borders,
  subregion,
  currencies,
  languages,
  topLevelDomain,
  nativeName,
}) => {
  return (
    <div style={{
      justifyContent: 'center',
      display: 'flex',
      padding: '0 30px',
    }}>
      <div className={styles.BigCard}>
        <div
          style={{
            marginTop: "100px",
            marginBottom: "30px",
            // boxShadow: "0px 0px 10px 3px hsl(0, 0%, 88%)",
            // maxWidth: "80px",
            textAlign: "center",
            padding: "8px",
            alignContent: "center",
            borderRadius: "2px",
            flex: "0 0 100%",
          }}
        >
          <div
            style={{
              // marginTop: "100px",
              boxShadow: "0px 0px 10px 3px hsl(0, 0%, 88%)",
              maxWidth: "80px",
              textAlign: "center",
              padding: "8px",
              alignContent: "center",
              borderRadius: "2px",
              marginBottom: '60px'
            }}
          >
            <Link href="/">
            <span style={{cursor: 'pointer'}}>&#8592; Back </span></Link>
          </div>
        </div>
        {/* <div> */}

        <img
          className={styles.BigCardFlag}
          height="480"
          width="480"
          src={flag}
          alt={name}
        />
        {/* </div> */}
        <div className={styles.CountryCardInfo}>
          <span className={styles.CountryCardName}>{name}</span>
          <div className={`${styles.CardInfo} "country-card__nativeName"`}>
            <b>Native name: </b>
            {nativeName}
          </div>
          <div className={`${styles.CardInfo} "country-card__population"`}>
            <b>Population: </b>
            {population}
          </div>
          <div className={`${styles.CardInfo} "country-card__region"`}>
            <b>Region: </b>
            {region}
          </div>
          <div className={`${styles.CardInfo} "country-card__region"`}>
            <b>Capital: </b>
            {capital}
          </div>
          <div className={`${styles.CardInfo} "country-card__name"`}>
            <b>subregion:</b>
            {subregion}
          </div>
          <div className={`${styles.CardInfo} "country-card__topLevelDomain"`}>
            <b>topLevelDomain: </b>
            {topLevelDomain}
          </div>
          <div className={`${styles.CardInfo} "country-card__currencies"`}>
            <b>currencies: </b>
            {currencies?.map((currency, i) => (
              <span key={`currencies--${i}`}>{currency.name} </span>
            ))}
          </div>
          <div className={`${styles.CardInfo} "country-card__languages"`}>
            <b>languages: </b>
            {languages?.map((language, i) => (
              <span key={`languages--${i}`}>{language.name} </span>
            ))}
          </div>
         {borders.length > 0 &&  <div
            className={`${styles.CountyBordersContainer} ${styles.CardInfo}`}
          >
            <span className={styles.Corders}>Border Countries: </span>
            {borders.map((item, i) => {
              return <span key={`border--${i}`} className={styles.CountryBorder}>{item}</span>;
            })}
          </div>}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default BigCountryCard;
