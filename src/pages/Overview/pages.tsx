import { HiUser, HiArrowRight } from 'react-icons/hi';

function Overview() {
  return (
    <div className=" pt-10 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-average font-stacion font-semibold">Overview</h1>
        <div className="rounded-full border border-primary p-2 text-primary bg-dashboard">
          <HiUser size="24" />
        </div>
      </div>
      <div className="flex items-center bg-pastel p-5 rounded-md justify-between mt-10">
        <div className="text-hgreen">
          <h1 className=" text-average font-stacion font-semibold ">
            In just 4 steps, you can get to creating your own exchange website.
          </h1>
          <h2 className="text-normal">
            Finish setting up your exchange business account to start trading online.
          </h2>
        </div>
        <div className="rounded-full p-1 text-hgreen border border-dashed border-hgreen w-[65px] h-[65px] flex justify-center items-center">
          <HiArrowRight size="24" />
        </div>
      </div>
    </div>
  );
}

export default Overview;
