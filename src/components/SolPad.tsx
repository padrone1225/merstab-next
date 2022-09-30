import { LgSol, LogoIcon } from "./SvgIcon";

const SolPad = () => {
  const per = 15;
  return (
    <div className="bg-pad-gradient w-fit px-6 border-[1px] rounded-lg border-[#474747] py-6 hover:drop-shadow-secondary">
      <div className="flex flex-col items-center font-primary tracking-[0.18px]">
        <h5 className="text-white py-2">SOL-PERP</h5>
        <div className="bg-[#AF09D9] rounded-full shadow-sol my-10">
          <LgSol />
        </div>
        <div className="flex">
          <h5 className="text-sol text-white">92.1%</h5>
          <h5 className="font-sub-1 text-content-white ml-2">Projected APY</h5>
        </div>
      </div>
      <div className="mt-10">
        <div className="font-primary text-content-white text-sub-2 tracking-[0.25px] flex justify-between">
          <h5>Deposits</h5>
          <h5>223,601 USDC</h5>
        </div>
        <div className="w-71 h-2.5 rounded-sm bg-progress my-2.5">
          <div
            className="h-2.5 rounded-sm bg-main-gradient"
            style={{ width: `${per}%` }}
          ></div>
        </div>
        <div className="font-primary text-content-white text-sub-2 tracking-[0.25px] flex justify-between">
          <h5>Capacity</h5>
          <h5>1,000,000 USDC</h5>
        </div>
      </div>
      <LogoIcon />
    </div>
  );
};

export default SolPad;
