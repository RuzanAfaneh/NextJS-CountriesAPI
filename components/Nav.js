import { useRef, useState } from 'react';

import SortingFilter from './CountryFilter/SortingFilter';

const Nav = ({ setCountiresData, countriesData, data }) => {
  const filterCountiresRef = useRef();

  const [region, setRegion] = useState('');

  const FilterCountires = () => {
    if (!filterCountiresRef.current.value) return setCountiresData(data);
    setCountiresData(
      data.filter((item, i) =>
        item.region.match(filterCountiresRef.current.value)
      )
    );
  };

  return (
    <div
      className="navContainer"
      style={{
        marginTop: '100px',
        position: 'relative',
      }}>
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
