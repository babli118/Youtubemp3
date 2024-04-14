import SearchBox from "../../components/searchBox.jsx";
import Hero from "../../components/Hero.jsx";
import Info from "../../components/Info.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Translation, meta, getLang } from "../../utils";
import { getDictionary } from "../../app/dictionaries";

export default async function Page({ params: { lang } }) {
  const t = await getDictionary(getLang(lang));
  return (
    <main className=" relative">
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className=" text-sm h-auto transition-all overflow-x-hidden scroll-smooth relative">
        {" "}
        <Hero text={t.mp3header} tag={t.mp3tagline} />
        <SearchBox mp3={true} dl={t.step3} pholder={t.pholder} />
        <Info
          faqHeading={t.mp3faq}
          infopara={t.aboutpara}
          q1={t.mp3q1}
          q1ans={t.mp3ansq1}
          q2={t.mp3q2}
          q2ansstep1={t.ansq2step1}
          q2ansstep2={t.ansq2step2}
          q2ansstep3={t.ansq2step3}
          q3={t.mp3q3}
          q3ans={t.ansq3}
          q4={t.q4}
          q4ans={t.ansq4}
          featuresheading={t.mp3features}
          q3mp3={t.q3mp3}
          ansq3mp3={t.ansq3mp3}
          bestHeading={t.best.heading}
          p1={t.best.p1}
          p2={t.best.p2}
          p3={t.best.p3}
          p4={t.best.p4}
          howtodownload={t.howtodownload}
          step1={t.step1}
          step2={t.step2}
          step3={t.step3}
          htdstep1={t.htdstep1}
          htdstep2={t.htdstep2}
          htdstep3={t.htdstep3}
          f1h={t.f1h}
          f2h={t.f2h}
          f3h={t.f3h}
          f4h={t.f4h}
          f5h={t.f5h}
          f6h={t.f6h}
          f1text={t.f1text}
          f2text={t.f2text}
          f3text={t.f3text}
          f4text={t.f4text}
          f5text={t.f5text}
          f6text={t.f5text}
        />
      </div>
    </main>
  );
}
