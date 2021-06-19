import { useRef, useState } from 'react';

import SortingFilter from './CountryFilter/SortingFilter';
import InputSearch from './InputSearch/InputSearch';

const Nav = ({ setCountiresData, countriesData, data }) => {
  const filterCountiresRef = useRef();
  const inputSearchRef = useRef();
  const [region, setRegion] = useState('');

  const FilterCountires = () => {
    if (!filterCountiresRef.current.value) return setCountiresData(data);
    setCountiresData(
      data.filter((item, i) =>
        item.region.match(filterCountiresRef.current.value)
      )
    );
  };

  const searchForCountry = (e) => {
    if (e.target.value.length < 3) {
      FilterCountires();
    } else {
      setCountiresData(
        countriesData.filter((item, i) => {
          console.log({ item });
          return (
            item.name.toLowerCase().match(e.target.value) ||
            item.cioc?.toLowerCase().match(e.target.value)
          );
        })
      );
    }
  };

  return (
    <div
      className="navContainer"
      style={{
        marginTop: '100px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '100px 50px 0',
      }}>
      <InputSearch
        inputSearchRef={inputSearchRef}
        searchForCountry={searchForCountry}
      />

      <SortingFilter
        FilterCountires={FilterCountires}
        region={region}
        setRegion={setRegion}
        filterCountiresRef={filterCountiresRef}
      />
    </div>
  );
};

export default Nav;
