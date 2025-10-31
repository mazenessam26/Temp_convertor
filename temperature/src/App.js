import React, { useState } from 'react';
import './App.css';

export default function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('celsius');
  const [results, setResults] = useState(null);

  const convertTemperature = () => {
    const temp = parseFloat(temperature);
    
    if (isNaN(temp)) {
      alert('Please enter a valid number');
      return;
    }

    let celsius, fahrenheit, kelvin;

    // Convert input to all three scales
    if (unit === 'celsius') {
      celsius = temp;
      fahrenheit = (temp * 9/5) + 32;
      kelvin = temp + 273.15;
    } else if (unit === 'fahrenheit') {
      celsius = (temp - 32) * 5/9;
      fahrenheit = temp;
      kelvin = celsius + 273.15;
    } else { // kelvin
      celsius = temp - 273.15;
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = temp;
    }

    setResults({
      celsius: celsius.toFixed(2),
      fahrenheit: fahrenheit.toFixed(2),
      kelvin: kelvin.toFixed(2)
    });
  };

  const resetForm = () => {
    setTemperature('');
    setUnit('celsius');
    setResults(null);
  };

  return (
    <div className="temp-converter-container">
      <div className="temp-converter-card">
        <div className="header">
          <svg className="icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
          </svg>
          <h1>Temperature Converter</h1>
        </div>
        
        <div className="form-section">
          <div className="input-group">
            <label>Temperature Value</label>
            <input
              type="number"
              step="any"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              placeholder="Enter temperature"
            />
          </div>

          <div className="input-group">
            <label>Current Unit</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="celsius">Celsius (°C)</option>
              <option value="fahrenheit">Fahrenheit (°F)</option>
              <option value="kelvin">Kelvin (K)</option>
            </select>
          </div>

          <button onClick={convertTemperature} className="convert-btn">
            Convert Temperature
          </button>
        </div>

        {results && (
          <div className="results-section">
            <h2>Converted Values:</h2>
            
            <div className="result-card celsius">
              <span className="result-label">Celsius</span>
              <span className="result-value">{results.celsius}°C</span>
            </div>

            <div className="result-card fahrenheit">
              <span className="result-label">Fahrenheit</span>
              <span className="result-value">{results.fahrenheit}°F</span>
            </div>

            <div className="result-card kelvin">
              <span className="result-label">Kelvin</span>
              <span className="result-value">{results.kelvin}K</span>
            </div>

            <button onClick={resetForm} className="reset-btn">
              Convert Another Temperature
            </button>
          </div>
        )}
      </div>
    </div>
  );
}