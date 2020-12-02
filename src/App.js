import logo from './logo.svg';
import './App.css';
import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import InfoBox from './InfoBox';
import Map from './Map'

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('worldwide')
  const [countryInfo, setCountryInfo] = useState({})

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

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode)

    // Calls that will be made to render the data to the screen
    const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode)
        // All of the data from the country response
      setCountryInfo(data)
    })
  }



  return (
    <div className="app">
      <div className="app__left">
      <div className="app__header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app__dropdown">
        <Select 
            variant="outlined" onChange={onCountryChange} value={country}>
              <MenuItem value="worldwide">WorldWide</MenuItem>
            {
              countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }

          </Select>
      </FormControl>
      </div>

      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" total={2000} cases={123} />
        <InfoBox title="Recovered" total={3000} cases={1234} />
        <InfoBox title="Deaths" total={4000} cases={12345} />
      </div>
      
      {/* Map */}
      <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          {/* Table */}
          <h3>Live Cases by Country</h3>
          {/* Graph */}
          <h3>Worldwide new cases</h3>
        </CardContent>
            </Card>
    </div>
  );
}

export default App;
