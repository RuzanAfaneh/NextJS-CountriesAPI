import Select from 'react-select';

import styles from './countriesFilter.module.css';

const SortingFilter = ({
  FilterCountires,
  region,
  setRegion,
  filterCountiresRef,
}) => {
  const options = [
    { label: 'All', value: '' },
    { label: 'Africa', value: 'Africa' },
    { label: 'Asia', value: 'Asia' },
    { label: 'Americas', value: 'Americas' },
    { label: 'Europe', value: 'Europe' },
    { label: 'Oceania', value: 'Oceania' },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: 20,
      width: 200,
      cursor: 'pointer',
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    }),
  };

  const handleChange = (value) => {
    FilterCountires();
    setRegion(value);
  };

  return (
    <div className={styles.filterWrapper}>
      <Select
        styles={customStyles}
        ref={filterCountiresRef}
        options={options}
        isSearchable={false}
        onChange={(opt) => {
          filterCountiresRef.current.value = opt.value;
          handleChange(opt.value);
        }}
        placeholder="Filter By Region"
      />
    </div>
  );
};
export default SortingFilter;
