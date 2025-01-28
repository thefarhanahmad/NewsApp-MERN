import { FaGreaterThan } from "react-icons/fa6";
import ImageCard from "./ImageCard";
// import StoriesCard from "./StoriesCard";
import VideoCard from "./VideoCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import { memo } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import VdoThumb from "../common/VdoThumb";

const AllSectionArticle = ({ data }) => {
  // console.log("all categories data from props : ", data);
  return (
    <>
      {data
        ? data.map((element) => (
            <SingleArticle
              key={element.category}
              category={element.category}
              imgData={element.imgData}
              id={element._id}
              vidData={element.vidData}
            />
          ))
        : null}
    </>
  );
};

const MiddleItemsCard = ({ text, image, OnPress, id, wid, date }) => {
  return (
    <div
      onClick={OnPress}
      className="stories-card mobileMainPageStroyCard my-0 flex w-full h-full"
      id={id}
      style={{ cursor: "pointer" }}
    >
      <div className={`${wid}`}>
        <img
          src={image ? image : img}
          alt=""
          className="w-full h-[162px] object-fill"
        />
      </div>
      <div className=" flex flex-col  w-[70%]   h-full">
        <span className="stories-card-text-4-line h-full  w-full">
          {text ||
            '"India Have Better...": Sri Lanka Captain Honest World Cup Admission'}
        </span>
        {/* <span className="text-red-600 pl-[10px]">{date ? date : ""}</span> */}
      </div>
    </div>
  );
};

const SingleArticle = ({ category, imgData, vidData }) => {
  const navigation = useNavigate();

  return (
    <div className="w-full">
      {/* Mobile view */}
      <div className="main-page-technology-container mob-cat-section container2 container3 border border-collapse sm:m-2 m-1 sm:border-gray-700 border-gray-500">
        <div className="main-page-technology-heading block sm:hidden border-b sm:border-0 sm:mb-0 border-gray-500 mb-4">
          <Link to={`/itempage?item=${category}`}> {category}</Link>
        </div>

        {/* Mobile sliders categry */}
        <div className="main-page-technology-area mobile-page-category">
          <div className="all-technology-cards" style={{ width: "100%" }}>
            {/* Left Portion */}
            {imgData && imgData.length > 0 && (
              <div className="main-page-technology-first-column">
                <div className="slide-container">
                  <Slide indicators={true}>
                    {/* {console.log("img data in slider : ", imgData)} */}
                    {imgData.map((element) => {
                      let title = element.title
                        ?.replace(/[%.?]/g, "")
                        .split(" ")
                        .join("-");
                      if (element.slug) {
                        title = element.slug;
                      }

                      return (
                        <Link
                          key={element._id}
                          to={`details/${title}?id=${element._id}`}
                          style={{ marginTop: "10px" }}
                          className="cat-list"
                        >
                          <ImageCard
                            id={element._id}
                            img={element.image}
                            dis={false}
                            text={element.title}
                            style={{
                              fontSize: "15px",
                              fontWeight: 400,

                              borderRadius: 0,
                            }}
                            height="200px"
                            width="100%"
                          />
                        </Link>
                      );
                    })}
                  </Slide>
                </div>
              </div>
            )}

            {/* Video Portion */}
            {vidData && vidData.length > 0 && (
              <div className="main-page-technology-third-column">
                {vidData.slice(0, 2).map((element) => (
                  <VideoCard
                    fromVideoGallery={false}
                    key={element._id}
                    data={element}
                    color="black"
                    width="100%"
                  />
                ))}
                <div className="more-text">
                  {"और भी"}{" "}
                  <FaGreaterThan
                    style={{
                      marginLeft: "6px",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Laptop view */}
      <div className="  lap-cat-section container2 container3 border border-collapse sm:m-2 m-1 sm:border-gray-700 border-gray-500">
        <div className="main-page-technology-heading border-b sm:border-0 sm:mb-0 border-gray-500 mb-4">
          <Link to={`/itempage?item=${category}`}> {category}</Link>
        </div>
        <div className=" flex justify-between flex-row  gap-4 w-full ">
          {/* Left Portion */}
          <div className=" flex-1 flex flex-col  items-center">
            {imgData && imgData.length > 0 && (
              <div className="flex flex-col gap-5 w-full">
                {imgData.slice(0, 2).map((element) => {
                  let title = element.title
                    ?.replace(/[%.?]/g, "")
                    .split(" ")
                    .join("-");
                  if (element.slug) {
                    title = element.slug;
                  }

                  return (
                    <Link
                      key={element._id}
                      className="cat-list w-full"
                      to={`details/${title}?id=${element._id}`}
                    >
                      <ImageCard
                        className="w-full"
                        style={{
                          fontSize: "15px",
                          fontWeight: 400,
                          height: "auto",
                          borderRadius: 0,
                        }}
                        height="250px"
                        img={element.image}
                        dis={false}
                        text={element.title}
                      />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Center Portion */}
          <div className=" flex-1 lg:flex flex-col hidden items-center">
            <div className="w-full hidden lg:flex flex-col gap-4 ">
              {imgData.slice(2, 5).map((element, index) => {
                let title = element.title
                  ?.replace(/[%.?]/g, "")
                  .split(" ")
                  .join("-");
                if (element.slug) {
                  title = element.slug;
                }

                return (
                  <MiddleItemsCard
                    data={element}
                    key={index}
                    OnPress={() =>
                      navigation(`/details/${title}?id=${element?._id}`)
                    }
                    wid="w-[400px]"
                    image={element?.image}
                    text={element?.title}
                  />
                );
              })}
            </div>
          </div>

          {/* Right Portion */}
          <div className=" flex-1 lg:flex hidden flex-col items-center">
            {imgData && imgData.length > 0 && (
              <div className="flex flex-col gap-2 ">
                {imgData.slice(5, 7).map((element) => {
                  let title = element.title
                    ?.replace(/[%.?]/g, "")
                    .split(" ")
                    .join("-");
                  if (element.slug) {
                    title = element.slug;
                  }

                  return (
                    <Link
                      key={element._id}
                      className="cat-list hover:bg-gray-200 p-1 rounded w-full"
                      to={`details/${title}?id=${element._id}`}
                    >
                      <div className="overflow-hidden w-full">
                        <div className="h-[200px]">
                          <img
                            className="w-full h-full object-cover"
                            src={element.image}
                            alt={element.title}
                          />
                        </div>
                        <div className="text-gray-950 py-1 h-14 text-lg px-2 w-full overflow-hidden">
                          {element.title}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AllSectionArticle);
