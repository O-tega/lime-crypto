import { HiArrowUpRight, HiArrowDownLeft } from 'react-icons/hi2';

interface Props {

  title: 'any',
  value: 'string'
}

function Order({ title, value }:Props) {
  return (
    <div className=" ml-2">
      <h1 className='text-normal'>{title}</h1>
      <div className="flex items-center my-2">
        <h1 className="text-big font-bold mr-1">{value}</h1>
        <div className="rounded-full border border border-hgreen p-1 text-hgreen">
          {title === 'Buy orders' ? <HiArrowDownLeft size="14" /> : <HiArrowUpRight size="14" /> }
        </div>
      </div>
      <div className="rounded-lg bg-dashboard w-60 p-1 text-normal">Your coin orders appear here</div>
    </div>
  );
}

export default Order;
