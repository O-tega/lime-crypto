import { useState } from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';
import { AiOutlineDown } from 'react-icons/ai';

interface Item {
  label:string,
  key:string
}

interface Props {
  data: Item[],
  title: string
}

function DropdownComponent({ data, title }:Props) {
  const [header, setHeader] = useState(title);
  const onClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  //   setHeader(e.target);
  // };

  const items: MenuProps['items'] = data;

  return (
    <div>
      <Dropdown menu={{ items, onClick }}>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            console.log('click');
          }}
        >
          <Space>
            {header}
            <AiOutlineDown />
          </Space>
        </button>
      </Dropdown>
    </div>
  );
}

export default DropdownComponent;
