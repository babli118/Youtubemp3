import React from "react";
import FootLink from "../containers/footLink.jsx";

const Footer = () => {
  return (
    <div className="items-centre   shadow-md mx-auto flex justify-center ">
      <div className=" md:w-[70vw] xl:w-[45vw] w-[90vw]">
        <hr className="text-text/20" />
        <div className=" flex justify-center items-center gap-x-6 gap-y-2 flex-wrap mt-10 sm:gap-4 text-[0.95rem]    text-text ">
          <FootLink name={"About"} href={"/about"} />
          <FootLink name={"Privacy Policy"} href={"/privacy-policy"} />
          <FootLink name={"Copyright"} href={"/copyright"} />
          <FootLink name={"Terms of Service"} href={"/tos"} />
          <FootLink name={"Contact"} href={"/contact"} />
        </div>
        <div className="text-text text-center p-4 sm:text-base text-sm ">
          <p>
            This website is not affiliated with or endorsed by Youtube. Our use
            of the name &quot;Youtube&quot; is for context, not claiming any
            ownership. It remains the property of the copyright holder.
          </p>

          <p className="text-primary1 mt-2">
            © {new Date().getFullYear()} - youtubemp3.io
            <span className="text-sm font-normal text-textLight"> (v1.01)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
