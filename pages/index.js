import { useEffect, useState } from 'react';

import CountriesBoard from '../components/CountriesBoard';
import Nav from '../components/Nav';
import Header from '../components/header';
import styles from './index.module.css';

export async function getStaticProps(context) {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 20,
  };
}

const Home = ({ data }) => {
  const [countriesData, setCountiresData] = useState(data);

  useEffect(() => {
    setCountiresData(data);
  }, [data]);

  return (
    <div className={styles.Container}>
      <title>countries</title>
      <meta name="AdsBot-Google" content="noindex" />
      <Header data={countriesData} />
      <Nav
        data={data}
        countriesData={countriesData}
        setCountiresData={setCountiresData}
      />
      <CountriesBoard data={countriesData} />
    </div>
  );
};
export default Home;
