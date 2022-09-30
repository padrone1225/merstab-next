import GradientButton from "./GradientButton";
import { LogoIcon } from "./SvgIcon";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex gap-2 items-center">
        <LogoIcon />
        <h4 className="font-primary text-white tracking-[0.5px]">merstab</h4>
      </div>
      <GradientButton title={"Launch app"} />
    </div>
  );
};

export default Header;
