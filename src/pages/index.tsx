import type { NextPage } from "next";
import GradientButton from "../components/GradientButton";
import MemberCard from "../components/MemberCard";
import { DisconrdIcon, WalletIcon } from "../components/SvgIcon";
import cardImage from "../../public/image/c-3.png";
import SolPad from "../components/SolPad";
import SolAppPad from "../components/SolAppPad";
import Header from "../components/Header";
import LandingBody from "../components/landing/LandingBody";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <LandingBody />
      <Footer />
    </>
  );
};

export default Home;
