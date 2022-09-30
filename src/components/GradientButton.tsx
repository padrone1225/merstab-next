const GradientButton = ({
  title,
  icon,
  size,
  color,
  discord,
}: {
  title: string;
  icon?: any;
  size?: string;
  color?: boolean;
  discord?: boolean;
}) => {
  let padingStyle = discord ? (color ? "px-16" : "px-32") : "px-8";
  let buttonStyle;
  switch (size) {
    case "md":
      buttonStyle = "w-52";
      padingStyle = "py-4 px-11";
      break;
    case "sm":
      buttonStyle = "w-44";
      padingStyle = "py-4 px-8";
      break;
    default:
      buttonStyle = "w-[152px]";
      padingStyle = "py-3 px-5";
      break;
  }
  return (
    <>
      {size ? (
        <>
          {color ? (
            <div
              className={`bg-main-gradient rounded-[5px] tracking-[1px] flex items-center justify-center hover:shadow-primary active:bg-shadow-gradient active:shadow-secondary focus:shadow-focus1 cursor-pointer ${padingStyle} ${buttonStyle}`}
            >
              <h5 className="font-body text-white">{title}</h5>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          {color ? (
            <div
              className={`w-fit py-4 bg-main-gradient flex items-center justify-between rounded-[5px] tracking-[1px] hover:shadow-primary active:bg-shadow-gradient active:shadow-secondary focus:shadow-focus1 cursor-pointer ${padingStyle}`}
            >
              {icon ? <div className="mr-3">{icon}</div> : <></>}
              <h5 className="font-body text-white">{title}</h5>
            </div>
          ) : (
            <div
              className={`w-fit py-4 bg-transparent flex items-center justify-between rounded-[5px] tracking-[1px] hover:shadow-primary hover:bg-main-gradient active:bg-main-gradient active:shadow-secondary focus:shadow-focus border-[#9747FF] border-solid border-2 cursor-pointer ${padingStyle}`}
            >
              {icon ? <div className="pr-3">{icon}</div> : <></>}
              <h5 className="font-body text-white">{title}</h5>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default GradientButton;
