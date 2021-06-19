import { FixedSizeGrid as Grid } from 'react-window';

import CountryCard from './CountryCard';
import styles from './CountryCard.module.css';

const CountriesBoard = ({ data }) => {
  const Cell = ({ columnIndex, rowIndex, style, index }) => (
    <div style={style}>
      {columnIndex + 1 + rowIndex * 3}
      <CountryCard
        data={data[columnIndex + 1 + rowIndex * 3]}
        {...data[columnIndex + 1 + rowIndex * 3]}
      />
    </div>
  );

  return (
    <div className={styles.countriesBoard}>
      <Grid
        columnCount={3}
        columnWidth={300}
        height={1000}
        rowCount={3000}
        rowHeight={450}
        style={{ margin: '0 auto' }}
        width={1000}>
        {Cell}
        {/* {data?.map((item, i) => (
          <CountryCard data={item} {...item} key={i} />
        ))} */}
      </Grid>
    </div>
  );
};

export default CountriesBoard;
