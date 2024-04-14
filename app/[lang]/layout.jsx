import "../globals.css";
require("dotenv").config();
import { GoogleTagManager } from "@next/third-parties/google";
import "react-toastify/dist/ReactToastify.css";
import TaskBar from "../../components/taskBar";
import Footer from "../../components/Footer";
import config from "../../config";
import { RedirectPage, getLang, poppins } from "../../utils";
import { getDictionary } from "../../app/dictionaries";

export async function generateMetadata({ params }) {
  const lang = getLang(params.lang);
  const t = await getDictionary(lang);
  const languages = {};
  config.lang
    .filter((lang) => lang !== "en") // Exclude 'en'
    .map((lang) => {
      languages[
        lang
      ] = `${config.site_url}${lang}${config.splitter}${config.current_version}`;
    });
  return {
    metadataBase: new URL(
      `${config.site_url}${lang}${config.splitter}${config.current_version}`
    ),
    title: t.title,
    description: t.description,
    alternates: {
      canonical:
        config.site_url + lang + config.splitter + config.current_version,
      languages,
    },
  };
}
export async function generateStaticParams() {
  return config.lang.map((lang) => ({
    lang: `${lang}${config.splitter}${config.current_version}`,
  }));
}

export default async function RootLayout({ children, params }) {
  const t = await getDictionary(getLang(params.lang));
  return (
    <html lang={t.lang}>
      <GoogleTagManager gtmId="GTM-NRP8VP5J" />
      <body
        className={
          poppins.className +
          "bg-background1 flex flex-col h-auto overflow-x-hidden scroll-smooth text-black relative"
        }
      >
        <div
          className={poppins.className + " overflow-x-hidden bg-background1"}
        >
          <TaskBar t={t} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
