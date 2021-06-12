import CountriesBoard from "../components/CountriesBoard";
import Header from "../components/header";
import Nav from "../components/Nav";
import styles from "./index.module.css";

export async function getStaticProps(context) {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

const Home = ({ data = [] }) => (
  <div className={styles.container}>
    <Header data={data} />
    <Nav />
    <CountriesBoard data={data} />
  </div>
);

export default Home;
