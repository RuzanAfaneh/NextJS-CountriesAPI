import AutoSizer from 'react-virtualized-auto-sizer';
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

  return (
    <div className={styles.countriesBoard} style={{ height: '100vh' }}>
      <AutoSizer>
        {({ height, width }) => {
          console.log({ width, height });
          return (
            <Grid
              columnCount={4}
              columnWidth={width / 4}
              height={height}
              rowCount={data.length / 4}
              rowHeight={450}
              width={width}>
              {Cell}
            </Grid>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default CountriesBoard;
