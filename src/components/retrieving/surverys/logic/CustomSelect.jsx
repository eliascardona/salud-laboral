import './CustomSelect.css';
import { useState } from 'react';

function useCustomSelect(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
}

function CustomSelect({ options, value, onChange }) {
  return (
    <div className="custom-select">
      <select value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function ParentComponent() {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  const [selectedValue, handleSelectChange] = useCustomSelect(options[0].value);

  return (
    <div className="parent-component">
      <h2>Custom Select Example</h2>
      <CustomSelect
        options={options}
        value={selectedValue}
        onChange={handleSelectChange}
      />
      <p>Selected Value: {selectedValue}</p>
    </div>
  );
}
