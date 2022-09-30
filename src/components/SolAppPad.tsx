import { SmSol } from "./SvgIcon";

const SolAppPad = () => {
  return (
    <div className="hover:drop-shadow-hover w-75 bg-transparent rounded-[20px] border-[3px] border-[#4D1B75]">
      <div className="bg-member-gradient px-2 rounded-t-[20px]">
        <div className="py-6 px-2 flex border-[#474747] border-b-[1px]">
          <SmSol />
          <div className="ml-4">
            <h5 className="font-primary text-sol text-white tracking-[0.18px]">
              SOL-PERP
            </h5>
            <h5 className="font-primary text-sub-2 text-content-white tracking-[0.18px] mt-1">
              Market Making Vault
            </h5>
          </div>
        </div>
        <div className="py-4 px-2">
          <div className="font-primary text-content-white text-sub-3 tracking-[0.4px]">
            Generates yield through deploying a market making strategy on Mango
            Markets
          </div>
          <div className="mt-6 flex items-center">
            <h5 className="text-price font-primary text-white -tracking-[0.5px]">
              92.1%
            </h5>
            <h5 className="text-sub-1 font-primary text-content-white tracking-[0.5px] ml-6">
              Projected APY
            </h5>
          </div>
          <div className="mt-6">
            <div className="my-2 flex justify-between font-primary text-content-white text-sub-2 tracking-[0.25px]">
              <h5>Deposits</h5>
              <h5>223,601 USDC</h5>
            </div>
            <div className="h-2.5 rounded-sm bg-progress my-2.5">
              <div
                className="h-2.5 rounded-sm bg-main-gradient"
                style={{ width: `${"10"}%` }}
              ></div>
            </div>
            <div className="my-2 flex justify-between font-primary text-content-white text-sub-2 tracking-[0.25px]">
              <h5>Capacity</h5>
              <h5>1,000,000 USDC</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="backdrop-blur-lg bg-member-gradient p-4 rounded-b-[20px] border-t-[3px] border-t-[#4D1B75]">
        <div className="flex justify-between items-center font-primary text-content-white text-sub-1 tracking-[0.5px]">
          <h5>Your Postion:</h5>
          <h5>0.22 BTC</h5>
        </div>
      </div>
    </div>
  );
};

export default SolAppPad;
