const MemberCard = ({
  type,
  image,
  title,
  sub,
  content,
}: {
  type?: boolean;
  image: any;
  title: string;
  sub: string;
  content: string;
}) => {
  return (
    <>
      {type ? (
        <div
          className={`bg-member-gradient border-[3px] border-[#4D1B75] rounded-2xl ml-10 backdrop-blur-lg relative md:py-10 sm:py-[39px] py-[33px] md:w-88 sm:w-79.5 w-70`}
        >
          {/* eslint-disable-next-line*/}
          <img
            className="absolute rounded-full shadow-member md:border-[5px] sm:border-4 border-[#452360] md:-left-[50px] sm:-left-[45px] -left-[40px] md:top-[calc(50%-50px)] sm:top-[calc(50%-45px)] top-[calc(50%-40px)] md:w-25 sm:w-22.5 w-20"
            src={image.src}
          />
          <div className="md:ml-20 sm:ml-20 ml-18">
            <h5 className="font-burger tracking-[0.5px] text-white md:pb-3 pb-2 md:text-title-1 sm:text-title-2 text-title-3">
              {title}
            </h5>
            <h6 className="font-sub-burger tracking-[0.5px] text-white md:text-sub-1 sm:text-sub-2 text-sub-3">
              {sub}
            </h6>
            <h6 className="font-content-burger text-content-white md:text-content sm:text-sub-2 text-sub-3">
              {content}
            </h6>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default MemberCard;
