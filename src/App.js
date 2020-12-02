import logo from './logo.svg';
import './App.css';
import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import InfoBox from './InfoBox';
import Map from './Map'
import Table from './Table'
import {sortData} from './util'

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('worldwide')
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then(response => response.json())
      .then(data => {
      setCountryInfo(data)
    })
  }, [])

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
          
          const sortedData = sortData(data)
          setTableData(sortedData)
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
        <InfoBox title="Coronavirus Cases" total={countryInfo.cases} cases={countryInfo.todayCases} />
        <InfoBox title="Recovered" total={countryInfo.recovered} cases={countryInfo.todayRecovered} />
        <InfoBox title="Deaths" total={countryInfo.deaths} cases={countryInfo.todayDeaths} />
      </div>
      
      {/* Map */}
      <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3>Worldwide new cases</h3>
          {/* Graph */}
        </CardContent>
            </Card>
    </div>
  );
}

export default App;
