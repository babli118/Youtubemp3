import React from "react";
import YtDlInfo from "./ytDlInfo";
import FAQ from "./FAQ";
import Features from "./Features";
import { FaCopy } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import BestDownloader from "./BestDownloader";

const Info = ({
  infopara,
  faqHeading,
  q1,
  q1ans,
  q2,
  q2ansstep1,
  q2ansstep2,
  q2ansstep3,
  q3,
  q3ans,
  q4,
  q4ans,
  featuresheading,
  q3mp3,
  ansq3mp3,
  bestHeading,
  p1,
  p2,
  p3,
  p4,
  howtodownload,
  step1,
  step2,
  step3,
  htdstep1,
  htdstep2,
  htdstep3,
  f1h,
  f2h,
  f3h,
  f4h,
  f5h,
  f6h,
  f1text,
  f2text,
  f3text,
  f4text,
  f5text,
  f6text,
}) => {
  return (
    <div className=" mt-8 flex flex-col gap-4 overflow-x-hidden items-center justify-center  ">
      <div className=" md:w-[70vw] xl:w-[55vw] w-[90vw]">
        <YtDlInfo ytInfo={infopara} />
      </div>
      <h2 className="text-3xl  font-semibold text-center  mb-4 text-text">
        {howtodownload}
      </h2>
      <div className="text-base grid gap-y-4 sm:gap-y-0 sm:grid-cols-3 gap-x-4 mx-10   md:w-[70vw] xl:w-[45vw] w-[90vw]">
        <div className="px-8 rounded-xl  py-2 bg-white shadow-sm mx-10 sm:mx-0">
          <div className="flex flex-col gap-1 mb-2 justify-center items-center">
            <FaCopy style={{ width: "50px", height: "30px", color: "red" }} />
            <span className="text-text/90  font-semibold text-base flex flex-col text-center ">
              {step1}
            </span>{" "}
          </div>
          <span className="text-center text-base">{htdstep1}</span>
        </div>
        <div className="px-8 rounded-xl  py-2 bg-white shadow-sm mx-10 sm:mx-0">
          <div className="flex flex-col gap-1 mb-2 justify-center items-center">
            <MdVideoLibrary
              style={{ width: "50px", height: "30px", color: "red" }}
            />
            <span className="text-text/90  font-semibold text-base flex flex-col text-center ">
              {step2}
            </span>{" "}
          </div>
          <span className="text-center text-base">{htdstep2}</span>
        </div>
        <div className="px-8 rounded-xl  py-2 bg-white shadow-sm mx-10 sm:mx-0">
          <div className="flex flex-col gap-1  mb-2 justify-center items-center">
            <FaDownload
              style={{ width: "50px", height: "30px", color: "red" }}
            />
            <span className="text-text/90  font-semibold text-base flex flex-col text-center ">
              {step3}
            </span>{" "}
          </div>
          <span className="text-center text-base">{htdstep3}</span>
        </div>
      </div>
      <div className="md:w-[70vw] xl:w-[45vw] w-[90vw]">
        <BestDownloader
          bestHeading={bestHeading}
          p1={p1}
          p2={p2}
          p3={p3}
          p4={p4}
        />
      </div>
      <div className="md:w-[70vw] xl:w-[45vw] w-[90vw]">
        <Features
          featuresheading={featuresheading}
          f1h={f1h}
          f2h={f2h}
          f3h={f3h}
          f4h={f4h}
          f5h={f5h}
          f6h={f6h}
          f1text={f1text}
          f2text={f2text}
          f3text={f3text}
          f4text={f4text}
          f5text={f5text}
          f6text={f6text}
        />
      </div>

      <div className="md:w-[70vw] xl:w-[45vw] w-[90vw]">
        <FAQ
          faqHeading={faqHeading}
          q1={q1}
          q1ans={q1ans}
          q2={q2}
          q2ansstep1={q2ansstep1}
          q2ansstep2={q2ansstep2}
          q2ansstep3={q2ansstep3}
          q3={q3}
          q3ans={q3ans}
          q4={q4}
          q4ans={q4ans}
          q3mp3={q3mp3}
          ansq3mp3={ansq3mp3}
        />
      </div>
    </div>
  );
};

export default Info;
