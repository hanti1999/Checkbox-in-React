import { useState } from 'react';

const countries = [
  { id: 1, countryName: 'India' },
  { id: 2, countryName: 'USA' },
  { id: 3, countryName: 'France' },
];

function App() {
  const [list, setList] = useState([]);

  const handleToggle = (selectedCountry, nextCheck) => {
    if (nextCheck) {
      setList((prev) => [...prev, selectedCountry]);
    } else {
      setList((prev) => prev.filter((c) => c !== selectedCountry));
    }
  };

  const handleToggleAll = (e) => {
    if (e) {
      setList(countries);
    } else {
      setList([]);
    }
  };

  return (
    <>
      <div>
        <label>
          <input
            type='checkbox'
            checked={list.length === countries.length}
            onChange={(e) => {
              handleToggleAll(e.target.checked);
            }}
          />
          Check all
        </label>
      </div>
      <CountryList list={list} countries={countries} onToggle={handleToggle} />
    </>
  );
}

const CountryList = ({ list, countries, onToggle }) => {
  return (
    <>
      {countries.map((c) => (
        <div key={c.id}>
          <label>
            <input
              type='checkbox'
              checked={list.includes(c)}
              onChange={(e) => {
                onToggle(c, e.target.checked);
              }}
            />
            {c.countryName}
          </label>
        </div>
      ))}
    </>
  );
};

export default App;
