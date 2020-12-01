import logo from './logo.svg';
import './App.css';
import { FormControl, Select, MenuItem } from '@material-ui/core'
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }))
          setCountries(countries)
      })
    }
    getCountriesData()
  }, [])


  return (
    <div className="App">
      <div className="app__header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app__dropdown">
        <Select 
            variant="outlined" value='abc'>

            {
              countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }

          </Select>
      </FormControl>
      </div>
      
      {/* Info boxes */}
      {/* Info boxes */}
      {/* Info boxes */}

      {/* Table */}

      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
