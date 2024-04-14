import React from "react";
import FootLink from "../containers/footLink.jsx";

const Footer = ({ locale }) => {
  return (
    <div className="items-centre   shadow-md mx-auto flex justify-center ">
      <div className=" md:w-[70vw] xl:w-[45vw] w-[90vw]">
        <hr className="text-text/20" />
        <div className=" flex justify-center items-center gap-x-6 gap-y-2 flex-wrap mt-10 sm:gap-4 text-sm text-text ">
          <FootLink name={"About"} href={"/about"} locale={locale} />
          <FootLink
            name={"Privacy Policy"}
            href={"/privacy-policy"}
            locale={locale}
          />
          <FootLink name={"Copyright"} href={"/copyright"} locale={locale} />
          <FootLink name={"Terms of Service"} href={"/tos"} locale={locale} />
          <FootLink name={"Contact"} href={"/contact"} locale={locale} />
        </div>
        <div className="text-text text-center p-4 sm:text-base text-sm ">
          <p>
            This website is not affiliated with or endorsed by Youtube. Our use
            of the name &quot;Youtube&quot; is for context, not claiming any
            ownership. It remains the property of the copyright holder.
          </p>

          <p className="text-primary1 mt-2">© 2024 yt2meta.app</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
