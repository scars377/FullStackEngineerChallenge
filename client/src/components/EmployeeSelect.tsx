import { ChangeEvent } from 'react';

type Props = {
  list: User[];
  value: number;
  onChange: (id: number) => void;
};

const EmployeeSelect = ({ list, value, onChange }: Props) => {
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(parseInt(e.target.value, 10));
  };
  return (
    <select value={value} onChange={onChangeSelect}>
      {list.map((item) => (
        <option value={item.id} key={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default EmployeeSelect;
