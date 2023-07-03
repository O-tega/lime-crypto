import Image from 'next/image';

function OrderHistory() {
  const data = [
    { name: 'all', value: '0' },
    { name: 'processing', value: '0' },
    { name: 'completed', value: '0' },
  ];
  return (
    <div>
      <div className="flex mt-5">
        <h1 className="mr-16 text-normal font-semibold text-primary">Order history</h1>
        <ul className="flex">
          {data.map((item) => (
            <div key={item.name} className="mr-2">
              <li className="text-normal text-primary">
                {item.name}
                {' '}
                (
                {item.value}
                ) |
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Image src="/History.svg" alt="Order History" width={182} height={182} />
        <div className="w-[247px]">
          <h1 className="text-normal text-primary">Coin trades that happened recently would pop up here.</h1>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
