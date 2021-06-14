import { useRouter } from 'next/router';

import BigCountryCard from '../../../components/BigCountryCard/BigCountryCard';
import Nav from '../../../components/Nav';
import Header from '../../../components/header';

export async function getServerSideProps(context) {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
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

const Post = ({ data }) => {
  console.log({ data });
  const router = useRouter();
  const { id } = router.query;

  const filterData = data.filter((item) => item.name === id);
  const borders = filterData[0].borders;

  const getCountryBorders = () => {
    let border = [];
    borders.map((item) =>
      data.filter((country) => {
        if (country.cioc === item) return (border = [...border, country.name]);
        else return false;
      })
    );
    return border;
  };
  // console.log(filterData[0], border);
  return (
    <div
      style={{
        backgroundColor: 'hsl(0, 0%, 98%)',
        height: '100vh',
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Header />
      <Nav />
      <BigCountryCard {...filterData[0]} borders={getCountryBorders()} />
    </div>
  );
};

export default Post;
