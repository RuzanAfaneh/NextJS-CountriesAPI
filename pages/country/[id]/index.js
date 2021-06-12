import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../../components/header";
import BigCountryCard from "../../../components/BigCountryCard/BigCountryCard";
import { useState } from "react";
import Nav from "../../../components/Nav";

export async function getServerSideProps(context) {
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

const Post = ({ data }) => {
  console.log({ data });
  const router = useRouter();
  const { id } = router.query;

  const filterData = data.filter((item) => item.name === id);
  const borders = filterData[0].borders;

  const getCountryBorders = () => {
    let border = [];
    borders.map((item) => {
      data.filter((country) => {
        if (country.cioc === item) border = [...border, country.name];
      });
    });
    console.log({ border });
    return border;
  };
  // console.log(filterData[0], border);
  return (
    <div
      style={{
        backgroundColor: "hsl(0, 0%, 98%)",
        height: "100vh",
        maxWidth: "1440px",
        width: "100%",
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Header />
      <Nav />
      <BigCountryCard {...filterData[0]} borders={getCountryBorders()} />
    </div>
  );
};

export default Post;
