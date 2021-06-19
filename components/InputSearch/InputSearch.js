import Image from 'next/image';

const InputSearch = ({ searchForCountry, inputSearchRef }) => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        width: '100%',
        maxWidth: '300px',
      }}>
      <div
        className="HHEEELOO"
        style={{
          top: '0',
          left: '20px',
          position: 'absolute',
        }}>
        <Image s src="/search.svg" width="18px" height="30px" />
      </div>
      <input
        style={{
          width: '100%',
          maxWidth: '300px',
          border: 'none',
          boxShadow: '0 0 10px 3px hsl(0, 0%, 88%)',
          outline: 'none',
          padding: '8px 55px',
        }}
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => searchForCountry(e)}
      />
    </div>
  );
};

export default InputSearch;
