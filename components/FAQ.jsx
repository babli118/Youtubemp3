import React from "react";

const FAQ = ({
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
  q3mp3,
  ansq3mp3,
}) => {
  return (
    <div className="flex flex-col  mx-auto items-center justify-center text-start  mb-10 mt-8">
      <h3 className="text-3xl font-semibold text-text mb-6">{faqHeading}</h3>

      <div className="flex flex-col gap-2">
        <div className=" rounded-xl  pb-2">
          <h2 className="text-lg text-text font-semibold">{q1}</h2>
          <p className="text-base font-normal mt-2 text-text">{q1ans}</p>
        </div>
        {q3mp3 ? (
          <div className=" rounded-xl  py-2">
            <h2 className="text-lg text-text font-semibold">{q3mp3}</h2>
            <p className="text-base font-normal mt-2 text-text">{ansq3mp3}</p>
          </div>
        ) : null}
        <div className=" rounded-xl  py-2">
          <h2 className="text-lg text-text font-semibold">{q2}</h2>
          <div className="text-base font-normal mt-2 text-text flex flex-col gap-2">
            <span className="flex flex-col">{q2ansstep1}</span>
            <span className="flex flex-col">{q2ansstep2}</span>
            <span className="flex flex-col">{q2ansstep3}</span>
          </div>
        </div>
        <div className=" rounded-xl  py-2">
          <h2 className="text-lg text-text font-semibold">{q3}</h2>
          <p className="text-base font-normal mt-2 text-text">{q3ans}</p>
        </div>
        <div className=" rounded-xl  py-2">
          <h2 className="text-lg text-text font-semibold">{q4}</h2>
          <p className="text-base font-normal mt-2 text-text">{q4ans}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
