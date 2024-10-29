import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import b_1 from "../public/assets/images/bussiness/b-1.jpg";
import b_2 from "../public/assets/images/bussiness/b-2.jpg";
import b_3 from "../public/assets/images/bussiness/b-3.jpg";
import b_4 from "../public/assets/images/bussiness/b-4.jpg";

const BusinessServices = () => {
  var items = [
    {
      name: "Tech Innovation",
      image: b_1,
      head: "Analytics",
    },
    {
      name: "Data and Analytics",
      image: b_2,
      head: "Analytics",
    },
    {
      name: "Finance consulting",
      image: b_3,
      head: "Finance",
    },
    {
      name: "Stocks and Shares",
      image: b_4,
      head: "Finance",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="py-20">
      <div className="container relative">
        <div className="relative">
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={false}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={3000}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="all 1.5s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            dotListClass="custom-dot-list-style"
            // partialVisible={false}
            itemClass="carousel-item"
          >
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center"
                >
                  <div className="relative">
                    <div className="w-full h-[280px]">
                      <Image
                        className="rounded-t-lg h-full w-full object-cover"
                        src={item.image}
                        alt="Not found"
                      />
                    </div>
                    <p className="text-white bg-gray-800 rounded-full py-1 md:px-5 px-3 absolute md:top-7 top-2 right-1 text-xs md:text-lg md:right-5 w-fit lowercase md:uppercase">
                      {item.head}
                    </p>
                  </div>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 text-center ">
                        {item.name}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300 my-5 dark:text-gray-400 text-center text-xs pb-5 md:text-lg">
                      Here are the biggest enterprise technology acquisitions of
                      2021 order.
                    </p>
                    <div className="items-center w-full justify-center flex flex-col mt-5">
                      <a
                        href="#"
                        className="inline-flex  px-3 py-2 text-xs lowercase md:text-sm md:uppercase font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                      >
                        EXPLORE SERVICES
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2 md:mt-1 mt:0.5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className=" bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center">
              <div className="relative">
                <div className="w-full h-[280px]">
                  <Image
                    className="rounded-t-lg h-full w-full object-cover"
                    src={b_1}
                    alt="Not found"
                  />
                </div>
                <p className="text-white bg-gray-800 rounded-full py-1 md:px-5 px-3 absolute md:top-7 top-2 right-1 text-xs md:text-lg md:right-5 w-fit lowercase md:uppercase">
                  Analytics
                </p>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 text-center ">
                    Tech Innovation
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300 my-5 dark:text-gray-400 text-center text-xs pb-5 md:text-lg">
                  Here are the biggest enterprise technology acquisitions of
                  2021 order.
                </p>
                <div className="items-center w-full justify-center flex flex-col mt-5">
                  <a
                    href="#"
                    className="inline-flex  px-3 py-2 text-xs lowercase md:text-sm md:uppercase font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    EXPLORE SERVICES
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2 md:mt-1 mt:0.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className=" bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center">
              <div className="relative">
                <div className="w-full h-[280px]">
                  <Image
                    className="rounded-t-lg h-full w-full object-cover"
                    src={b_2}
                    alt="Not found"
                  />
                </div>
                <p className="text-white bg-gray-800 rounded-full py-1 md:px-5 px-3 absolute md:top-7 top-2 right-1 text-xs md:text-lg md:right-5 w-fit lowercase md:uppercase">
                  Analytics
                </p>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 text-center ">
                    Data and Analytics
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300 my-5 dark:text-gray-400 text-center text-xs pb-5 md:text-lg">
                  Here are the biggest enterprise technology acquisitions of
                  2021 order.
                </p>
                <div className="items-center w-full justify-center flex flex-col mt-5">
                  <a
                    href="#"
                    className="inline-flex  px-3 py-2 text-xs lowercase md:text-sm md:uppercase font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    EXPLORE SERVICES
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2 md:mt-1 mt:0.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className=" bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center">
              <div className="relative">
                <div className="w-full h-[280px]">
                  <Image
                    className="rounded-t-lg h-full w-full object-cover"
                    src={b_3}
                    alt="Not found"
                  />
                </div>
                <p className="text-white bg-gray-800 rounded-full py-1 md:px-5 px-3 absolute md:top-7 top-2 right-1 text-xs md:text-lg md:right-5 w-fit lowercase md:uppercase">
                  Analytics
                </p>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 text-center ">
                    Finance consulting
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300 my-5 dark:text-gray-400 text-center text-xs pb-5 md:text-lg">
                  Here are the biggest enterprise technology acquisitions of
                  2021 order.
                </p>
                <div className="items-center w-full justify-center flex flex-col mt-5">
                  <a
                    href="#"
                    className="inline-flex  px-3 py-2 text-xs lowercase md:text-sm md:uppercase font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    EXPLORE SERVICES
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2 md:mt-1 mt:0.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className=" bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center">
              <div className="relative">
                <div className="w-full h-[280px]">
                  <Image
                    className="rounded-t-lg h-full w-full object-cover"
                    src={b_4}
                    alt="Not found"
                  />
                </div>
                <p className="text-white bg-gray-800 rounded-full py-1 md:px-5 px-3 absolute md:top-7 top-2 right-1 text-xs md:text-lg md:right-5 w-fit lowercase md:uppercase">
                  Analytics
                </p>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 text-center ">
                    Tech Innovation
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300 my-5 dark:text-gray-400 text-center text-xs pb-5 md:text-lg">
                  Here are the biggest enterprise technology acquisitions of
                  2021 order.
                </p>
                <div className="items-center w-full justify-center flex flex-col mt-5">
                  <a
                    href="#"
                    className="inline-flex  px-3 py-2 text-xs lowercase md:text-sm md:uppercase font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    EXPLORE SERVICES
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2 md:mt-1 mt:0.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div> */}
          </Carousel>
          <div className="">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-10 absolute w-full top-[0px]">
              <div>
                <h1 className=" md:text-[40px] py-1 md:py-3 text-2xl font-semibold text-gray-800 w-[400px] ">
                  UnderStanding the
                </h1>
                <h1 className=" md:text-[40px] text-2xl font-semibold text-gray-800 w-[400px]">
                  bussiness services.
                </h1>
              </div>
              <div>
                <p className="text-gray-400 w-[375px] md:w-[400px] py-2 font-normal text-base">
                  We strive to develop real-world web solutions that are ideal
                  for small to large projects with bespoke your custom project
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessServices;
