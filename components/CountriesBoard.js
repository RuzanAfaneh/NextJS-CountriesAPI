import { FixedSizeGrid as Grid } from 'react-window';

import CountryCard from './CountryCard';
import styles from './CountryCard.module.css';

const CountriesBoard = ({ data }) => {
  const Cell = ({ columnIndex, rowIndex, style, index }) => (
    <div className={styles.countryCell} style={style}>
      <CountryCard
        data={data[columnIndex + 1 + rowIndex * 4]}
        {...data[columnIndex + 1 + rowIndex * 4]}
      />
    </div>
  );

  console.log(data.length)
  return (
    <div className={styles.countriesBoard}>
      <Grid
        columnCount={4}
        columnWidth={333}
        height={10000}
        rowCount={data.length/4}
        rowHeight={450}
        width={1440}>
        {Cell}
      </Grid>
    </div>
  );
};

export default CountriesBoard;
