/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ReturnBtn from "../../containers/returnBtn";
import Footer from "../../components/Footer";
import TaskBar from "../../components/taskBar";

export const metadata = {
  title: "Terms of service - YOUTUBEMP3 Youtube Converter and Downloader",
  description:
    "Convert and download your favourite YouTube videos to mp3 with YouTubeMP3. Enjoy high-quality and fast YouTube music downloads.",
};

const Tos = () => {
  return (
    <div>
      <TaskBar />
      <div className=" flex flex-col ">
        <div className="mt-20 md:mt-[7.5rem]  md:w-[70vw] xl:w-[45vw] w-[90vw] mx-auto text-text ">
          <h1 className="text-4xl sm:text-5xl text-center font-bold  text-text my-10">
            TERMS OF SERVICE - YOUTUBEMP3
          </h1>
          <p className="text-xl font-semibold text-text my-2">1. Terms</p>
          <p>
            By accessing this Website, accessible from https://youtubemp3.io/,
            you are agreeing to be bound by these Website Terms and Conditions
            of Use and agree that you are responsible for the agreement with any
            applicable local laws. If you disagree with any of these terms, you
            are prohibited from accessing this site. The materials contained in
            this Website are protected by copyright and trade mark law.
          </p>
          <p className="text-xl font-semibold text-text my-2">2. Use License</p>
          <p>
            Permission is granted to temporarily download one copy of the
            materials on YOUTUBEMP3 Website for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you may not: modify or
            copy the materials; use the materials for any commercial purpose or
            for any public display; attempt to reverse engineer any software
            contained on YOUTUBEMP3 Website; remove any copyright or other
            proprietary notations from the materials; or transferring the
            materials to another person or "mirror" the materials on any other
            server. This will let YOUTUBEMP3 to terminate upon violations of any
            of these restrictions. Upon termination, your viewing right will
            also be terminated and you should destroy any downloaded materials
            in your possession whether it is printed or electronic format.
          </p>
          <p className="text-xl font-semibold text-text my-2">3. Disclaimer</p>
          <p>
            All the materials on YOUTUBEMP3’s Website are provided "as is".
            YOUTUBEMP3 makes no warranties, may it be expressed or implied,
            therefore negates all other warranties. Furthermore, YOUTUBEMP3 does
            not make any representations concerning the accuracy or reliability
            of the use of the materials on its Website or otherwise relating to
            such materials or any sites linked to this Website.
          </p>
          <p className="text-xl font-semibold text-text my-2">4. Limitations</p>
          <p>
            YOUTUBEMP3 or its suppliers will not be hold accountable for any
            damages that will arise with the use or inability to use the
            materials on YOUTUBEMP3’s Website, even if YOUTUBEMP3 or an
            authorize representative of this Website has been notified, orally
            or written, of the possibility of such damage. Some jurisdiction
            does not allow limitations on implied warranties or limitations of
            liability for incidental damages, these limitations may not apply to
            you.
          </p>

          <p className="text-xl font-semibold text-text my-2">
            5. Revisions and Errata
          </p>
          <p>
            The materials appearing on YOUTUBEMP3’s Website may include
            technical, typographical, or photographic errors. YOUTUBEMP3 will
            not promise that any of the materials in this Website are accurate,
            complete, or current. YOUTUBEMP3 may change the materials contained
            on its Website at any time without notice. YOUTUBEMP3 does not make
            any commitment to update the materials.
          </p>
          <p className="text-xl font-semibold text-text my-2">6. Links</p>
          <p>
            YOUTUBEMP3 has not reviewed all of the sites linked to its Website
            and is not responsible for the contents of any such linked site. The
            presence of any link does not imply endorsement by YOUTUBEMP3 of the
            site. The use of any linked website is at the user’s own risk.
          </p>
          <p className="text-xl font-semibold text-text my-2">
            7. Site Terms of Use Modifications
          </p>
          <p>
            YOUTUBEMP3 may revise these Terms of Use for its Website at any time
            without prior notice. By using this Website, you are agreeing to be
            bound by the current version of these Terms and Conditions of Use.
          </p>

          <p className="text-xl font-semibold text-text my-2">
            8. Your Privacy
          </p>
          <p>Please read our Privacy Policy.</p>
          <p className="text-xl font-semibold text-text my-2">
            9. Governing Law
          </p>
          <p>
            Any claim related to YOUTUBEMP3's Website shall be governed by the
            laws of ae without regards to its conflict of law provisions.
          </p>
        </div>
        <div className="text-white ">
          <ReturnBtn text={"Return to homepage"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tos;
