import Image from 'next/image';

function CryptoHoldings() {
  return (
    <div>
      <div className="flex mt-5">
        <h1 className="mr-16 text-normal font-semibold text-primary">
          Your crypto holdings + Market overview
        </h1>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="w-[247px]">
          <h1 className="text-normal text-primary">
            Set up your exchange business to monitor your selected crypto coin market updates.
          </h1>
        </div>
        <Image src="/Holdings.svg" alt="Order History" width={182} height={182} />
      </div>
    </div>
  );
}

export default CryptoHoldings;
