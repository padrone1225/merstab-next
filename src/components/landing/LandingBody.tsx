import bannerImage from "../../../public/image/banner.png";
import missionBanner from "../../../public/image/mission-banner.png";
import mImage from "../../../public/image/c-3.png";
import GradientButton from "../GradientButton";
import MemberCard from "../MemberCard";
import SolPad from "../SolPad";

const LandingBody = () => {
  return (
    <div className="relative">
      <div className="container m-auto z-20">
        <div className="mt-35.75">
          <h1 className="text-transparent text-h1 bg-clip-text bg-text-gradient">
            Liquidity Protocol
          </h1>
          <h1 className="text-h1 text-white">For DeFi Derivatives</h1>
        </div>
        <h5 className="text-sub-1 text-white mt-5">
          Provide liquidity to perps, futures and options
        </h5>
        <div className="mt-11">
          <GradientButton title={"START STAKING"} color />
        </div>
        <div className="md:mx-27.5 mt-165 border-y-[1px] border-[#E15D47] w-full text-center py-23 z-20">
          <h5 className="font-primary text-title-1 text-white z-20">
            Helping Derivatives DEXs Grow Through Liquidity Provision
          </h5>
          <h5 className="text-sub-2 text-content-white mt-6 font-primary">
            We believe DeFi will become the underlying core infrastructure of
            the global financial market. Our mission is to help the industry
            achieve wider market adoption through liquidity provision to
            Derivatives DEXs.
          </h5>
        </div>
        <div className="mt-105">
          <h5 className="text-sol font-primary text-white text-center">
            OUR PRODUCTS
          </h5>
          <div className="mt-40 flex justify-between items-center">
            <div className="mr-20">
              <h2 className="text-h2 font-primary text-white">
                Liquidity Vault
              </h2>
              <h3 className="text-sub-2 font-primary text-white mt-4">
                Provides liquidity to perpetual swaps and futures on
                decentralized derivatives exchanges like Mango Markets and Zeta
                Markets
              </h3>
            </div>
            <SolPad />
          </div>
        </div>
        <div className="mt-88">
          <h4 className="text-center text-h3 font-primary text-white">
            THE TEAM
          </h4>
          <div className="mt-20 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            <MemberCard
              type
              image={mImage}
              title={"Heisenburger"}
              sub={"Head Quant"}
              content={"Multiple DeFi projects"}
            />
            <MemberCard
              type
              image={mImage}
              title={"Heisenburger"}
              sub={"Head Quant"}
              content={"Multiple DeFi projects"}
            />
            <MemberCard
              type
              image={mImage}
              title={"Heisenburger"}
              sub={"Head Quant"}
              content={"Multiple DeFi projects"}
            />
            <MemberCard
              type
              image={mImage}
              title={"Heisenburger"}
              sub={"Head Quant"}
              content={"Multiple DeFi projects"}
            />
            <MemberCard
              type
              image={mImage}
              title={"Heisenburger"}
              sub={"Head Quant"}
              content={"Multiple DeFi projects"}
            />
            <MemberCard
              type
              image={mImage}
              title={"Heisenburger"}
              sub={"Head Quant"}
              content={"Multiple DeFi projects"}
            />
          </div>
        </div>
      </div>
      {/* eslint-disable-next-line*/}
      <img
        src={bannerImage.src}
        alt=""
        className="absolute -top-[50px] md:w-223.5 sm:w-178.5 w-87 md:ml-87 sm:ml-56 ml-0"
      />
      {/* eslint-disable-next-line*/}
      <img
        src={missionBanner.src}
        alt=""
        className="absolute top-[670px] w-full z-1"
      />
    </div>
  );
};

export default LandingBody;
