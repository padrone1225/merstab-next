const MemberCard = ({
  type,
  size,
  image,
}: {
  type: boolean;
  size: string;
  image: any;
}) => {
  let cardSetting;
  let imgSetting;
  console.log(image);
  switch (size) {
    case "md":
      cardSetting = "w-88 h-40";
      imgSetting = "w-25 h-25 rounded-[5px]";
      break;
    case "sm":
      cardSetting = "w-79.5 h-36.5";
      imgSetting = "w-22.5 h-22.5 rounded-0.5";
      break;
    default:
      cardSetting = "w-70 w-42";
      imgSetting = "w-20 h-20 rounded-0.5";
      break;
  }
  return (
    <>
      {type ? (
        <div
          className={`bg-member-gradient border-[3px] border-[#4D1B75] rounded-2xl backdrop-blur-lg relative ${cardSetting}`}
        >
          <div className={`absolute ${imgSetting}`}></div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default MemberCard;
