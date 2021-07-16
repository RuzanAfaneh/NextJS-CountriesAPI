import { useEffect, useState } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeGrid as Grid } from 'react-window';

import CountryCard from './CountryCard';
import styles from './CountryCard.module.css';

const CountriesBoard = ({ data }) => {
  const [size, setSize] = useState(0);
  const [count, setCount] = useState(4);
  const [rowHeight, setRowHeight] = useState(450);
  const isTablet = 780;
  const isMobile = 480;

  useEffect(() => {
    if (size <= isMobile) {
      setCount(1);
      setRowHeight(350);
    } else if (size <= isTablet) setCount(2);
    else setCount(4);
  }, [size]);

  const countColumnCard = () => {
    if (size <= isMobile || data.length === 1) return 1;
    if (size <= isTablet || data.length === 2) return 2;
    if (data.length > 4) return 4;
    return data.length;
  };

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const colIndex = data.length > 2 ? columnIndex + 1 : columnIndex;
    return (
      <div className={styles.countryCell} style={style}>
        <CountryCard
          data={data[colIndex + rowIndex * count]}
          {...data[colIndex + rowIndex * count]}
        />
      </div>
    );
  };

  return (
    <div className={styles.countriesBoard} style={{ height: '100vh' }}>
      <AutoSizer>
        {({ height, width }) => {
          setSize(width);
          return (
            <Grid
              columnCount={countColumnCard()}
              columnWidth={width / count}
              height={height}
              rowCount={
                Math.floor(data.length / count) === 0
                  ? 1
                  : Math.floor(data.length / count)
              }
              rowHeight={rowHeight}
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
