import React from "react";
import { SlCalender } from "react-icons/sl";
import Image from "next/image";
import b_1 from "../public/assets/images/blog/b-1.jpg";
import b_2 from "../public/assets/images/blog/b-2.jpg";
import b_3 from "../public/assets/images/blog/b-3.jpg";
import bs_1 from "../public/assets/images/blog/bs-1.jpg";
import bs_2 from "../public/assets/images/blog/bs-2.jpg";
const Blog = () => {
  return (
    <section className="blog_sec py-20 bg-[#fff] px-2">
      <div className="container">
        <div className="title_part text-center">
          <h5 className="bg-[#0055FF] inline-block rounded-full  px-3 py-2 font-medium text-sm ">
            NEWS & BLOGS
          </h5>
          <h2 className="text-4xl font-bold my-6 text-black">
            Read Our Latest Updates
          </h2>
          <p className="text-lg text-[#687799] lg:w-[600px] m-auto">
            Ever find yourself staring at your computer screen a good consulting
            slogan to come to mind? Oftentimes.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-14">
          <div className="box shadow-xl rounded-md p-1">
            <div className="img_text relative">
              <div className="w-full h-[300px] overflow-hidden rounded-t-lg ">
                <Image
                  className="w-full h-full rounded-t-lg main_img object-cover"
                  src={b_1}
                  alt="Not found"
                />
              </div>
              <p className="inline-block bg-[#0055FF] px-2 py-2 text-sm text-[#fff] absolute bottom-0 left-0">
                Development
              </p>
            </div>
            <div className="content  p-6 ">
              <a
                href="#"
                className="text-[#000] text-[23px] font-bold hover:text-[#0055FF] mb-3 block"
              >
                How You Can Find A Design Job You Will Truly
              </a>
              <p className="text-[#687799] text-md">
                When an unknown printer took ar galley offer type year anddey
                scrambled
              </p>
              <div className="grid grid-cols-2 mt-4">
                <div className="flex cursor-pointer">
                  <div className="w-[50px] h-[50px] mr-3">
                    <Image
                      className="w-full h-full object-cover rounded-[50%]"
                      src={bs_1}
                      alt="Not found"
                    />
                  </div>
                  <div className="flex items-center ">
                    <p className="text-[#687799]">Gerow</p>
                  </div>
                </div>
                <div className="bi_text flex items-center">
                  <p className="flex">
                    <SlCalender />{" "}
                    <span className="text-[#687799] ">August 1, 2023</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box shadow-xl rounded-md p-1">
            <div className="img_text relative">
              <div className="w-full h-[300px] overflow-hidden rounded-t-lg">
                <Image
                  className="w-full h-full rounded-t-lg main_img object-cover"
                  src={b_2}
                  alt="Not found"
                />
              </div>
              <p className="inline-block bg-[#0055FF] px-2 py-2 text-sm text-[#fff] absolute bottom-0 left-0">
                Development
              </p>
            </div>
            <div className="content  p-6 ">
              <a
                href="#"
                className="text-[#000] text-[23px] font-bold hover:text-[#0055FF] mb-3 block"
              >
                How You Can Find A Design Job You Will Truly
              </a>
              <p className="text-[#687799] text-md">
                When an unknown printer took ar galley offer type year anddey
                scrambled
              </p>
              <div className="grid grid-cols-2 mt-4">
                <div className="flex cursor-pointer">
                  <div className="w-[50px] h-[50px] mr-3">
                    <Image
                      className="w-full h-full object-cover rounded-[50%]"
                      src={bs_2}
                      alt="Not found"
                    />
                  </div>
                  <div className="flex items-center ">
                    <p className="text-[#687799]">Gerow</p>
                  </div>
                </div>
                <div className="bi_text flex items-center">
                  <p className="flex">
                    <SlCalender />{" "}
                    <span className="text-[#687799] ">August 1, 2023</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box shadow-xl rounded-md p-1">
            <div className="img_text relative">
              <div className="w-full h-[300px] overflow-hidden rounded-t-lg">
                <Image
                  className="w-full h-full rounded-t-lg main_img object-cover"
                  src={b_3}
                  alt="Not found"
                />
              </div>
              <p className="inline-block bg-[#0055FF] px-2 py-2 text-sm text-[#fff] absolute bottom-0 left-0">
                Development
              </p>
            </div>
            <div className="content p-6 ">
              <a
                href="#"
                className="text-[#000] text-[23px] font-bold hover:text-[#0055FF] mb-3 block"
              >
                How You Can Find A Design Job You Will Truly
              </a>
              <p className="text-[#687799] text-md">
                When an unknown printer took ar galley offer type year anddey
                scrambled
              </p>
              <div className="grid grid-cols-2 mt-4">
                <div className="flex cursor-pointer">
                  <div className="w-[50px] h-[50px] mr-3">
                    <Image
                      className="w-full h-full object-cover rounded-[50%]"
                      src={bs_1}
                      alt="Not found"
                    />
                  </div>
                  <div className="flex items-center ">
                    <p className="text-[#687799]">Gerow</p>
                  </div>
                </div>
                <div className="bi_text flex items-center">
                  <p className="flex">
                    <SlCalender />{" "}
                    <span className="text-[#687799] ">August 1, 2023</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
