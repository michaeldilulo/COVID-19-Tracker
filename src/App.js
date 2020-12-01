import logo from './logo.svg';
import './App.css';
import { FormControl, Select, MenuItem } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <div className="app__header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app__dropdown">
        <Select 
          variant="outlined" value='abc'>
          
          <MenuItem value="worldwide">WorldWide</MenuItem>
          <MenuItem value="worldwide">Option Two</MenuItem>
          <MenuItem value="worldwide">Option Three</MenuItem>
          <MenuItem value="worldwide">Option Four</MenuItem>

          </Select>
      </FormControl>
      </div>

      {/* Header */}

      {/* Title + Select input dropdown field */}

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
