'use client';

import Order from '@/components/Order';
import { SideBar } from '../components';
import Overview from '@/pages/Overview/pages';
import Charts from '@/components/Chart';
import OrderHistory from '@/components/OrderHistory';
import CryptoHoldings from '@/components/CryptoHoldings';
import DropdownComponent from '@/components/DropdownComponent';

export default function Home() {
  const data = [
    { label: 'Total Trades Today', key: '1' },
    { label: 'Today Trades yesterday', key: '2' },
    { label: 'Today Trades in the week', key: '3' },
    { label: 'Today Trades in the month', key: '4' },
  ];
  return (
    <div className="w-full h-full">
      <div className="flex relative">
        <SideBar />
        <div className="mx-10 w-full">
          <Overview />
          <div className="grid grid-cols-3 divide-x mt-5">
            <div className="col-span-2">
              <div>
                <DropdownComponent data={data} title="Total trades Today" />

              </div>
              <Charts />
            </div>
            <div className="mt-5 pt-5">
              <Order title="Buy orders" value="0" />
              <hr className="my-5" />
              <Order title="sell orders" value="0" />
            </div>
          </div>
          <hr className="border-dashed border-[1px] my-3" />
          <hr className="border-dashed border-[1px] mt-10" />
          <OrderHistory />
          <hr className="border-dashed border-[1px]" />
          <CryptoHoldings />
          <div />
        </div>
      </div>
    </div>
  );
}
