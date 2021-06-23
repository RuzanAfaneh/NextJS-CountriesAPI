import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeGrid as Grid } from 'react-window';

import CountryCard from './CountryCard';
import styles from './CountryCard.module.css';

const CountriesBoard = ({ data }) => {
  const Cell = ({ columnIndex, rowIndex, style, index }) => {
    const colIndex = data.length > 1 ? columnIndex + 1 : columnIndex;
    return (
      <div className={styles.countryCell} style={style}>
        <CountryCard
          data={data[colIndex + rowIndex * 4]}
          {...data[colIndex + rowIndex * 4]}
        />
      </div>
    );
  };

  return (
    <div className={styles.countriesBoard} style={{ height: '100vh' }}>
      <AutoSizer>
        {({ height, width }) => {
          return (
            <Grid
              columnCount={data.length > 4 ? 4 : data.length}
              columnWidth={width / 4}
              height={height}
              rowCount={
                Math.floor(data.length / 4) === 0
                  ? 1
                  : Math.floor(data.length / 4)
              }
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
