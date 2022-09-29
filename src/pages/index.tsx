import type { NextPage } from "next";
import GradientButton from "../components/GradientButton";
import MemberCard from "../components/MemberCard";
import { DisconrdIcon, WalletIcon } from "../components/SvgIcon";
import cardImage from "../../public/image/c-3.png";

const Home: NextPage = () => {
  return (
    <>
      <GradientButton title={"START STAKING"} color />
      <GradientButton title={"LAUNCH APP"} />
      <GradientButton title={"CONNECT WALLET"} icon={<WalletIcon />} />
      <GradientButton title={"JOIN DISCORD"} icon={<DisconrdIcon />} discord />
      <GradientButton
        title={"JOIN DISCORD"}
        icon={<DisconrdIcon />}
        discord
        color
      />
      <GradientButton title={"CONTACT US"} size={"md"} color />
      <GradientButton title={"CONTACT US"} size={"sm"} color />
      <GradientButton title={"CONTACT US"} size={"o"} color />
      <MemberCard type size={"sm"} image={cardImage} />
    </>
  );
};

export default Home;
