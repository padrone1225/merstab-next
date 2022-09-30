import { DisconrdIcon, LogoIcon, TwitterIcon } from "./SvgIcon";

const Footer = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <LogoIcon />
      <div className="flex gap-4 items-center">
        <TwitterIcon />
        <DisconrdIcon />
      </div>
    </div>
  );
};

export default Footer;
