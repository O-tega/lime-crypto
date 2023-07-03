'use client';

import { HiViewGrid } from 'react-icons/hi';
import { HiOutlineClipboard } from 'react-icons/hi2';
import { BiWallet, BiBarChartAlt2 } from 'react-icons/bi';
import Image from 'next/image';
import SelectComponent from './SelectComponent';

function SideBar() {
  const dashBoardMenu = [
    { name: 'Dashboard', icon: <HiViewGrid size="30px" /> },
    { name: 'Orders', icon: <HiOutlineClipboard size="30px" /> },
    { name: 'Wallet', icon: <BiWallet size="30px" /> },
    { name: 'Analytics', icon: <BiBarChartAlt2 size="30px" /> },
  ];
  return (
    <div className="w-[301px]  bg-dashboard ">
      <h1 className="letter pt-5 ml-7  ">MERCHANT ID | 110011</h1>
      <h1 className="letter ml-5 pt-14 ">YOUR OVERALL BALANCE</h1>
      <h1 className="text-average ml-5  ">$ 0</h1>
      <ul className="mt-16">
        {dashBoardMenu.map((item) => (
          <div key={item.name}>
            <li className="flex items-center py-5 ml-5 text-normal text-primary font-semibold">
              <span className="pr-2">{item.icon}</span>
              {item.name}
            </li>
            <hr className="h-px bg-primary border-0 " />
          </div>
        ))}
      </ul>
      <div className="flex justify-center mt-10 rounded-lg">
        <div className="w-[200px] h-[85px] bg-white">
          <SelectComponent />
          <h1 className="text-xs">No website yet</h1>
        </div>
      </div>
      <div className="ml-7 mt-10">
        <h1 className="text-normal font-semibold text-primary">Powered By</h1>
        <Image src="/theexchanger.png" alt="logo" width={138} height={22} />
      </div>
    </div>
  );
}

export default SideBar;
