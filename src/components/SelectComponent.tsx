import { Select } from 'antd';

function SelectComponent() {
  const options = [
    {
      value: 'none',
      label: 'Kudi Exchange',
    },
    {
      value: 'one',
      label: 'Kudi Exchange',
    },

  ];
  return (
    <div>
      <Select
        defaultValue="none"
        className="w-full border-white text-semibold"
        options={options}
      />
    </div>
  );
}

export default SelectComponent;
