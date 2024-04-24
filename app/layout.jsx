import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YouTube To MP3 Converter and Downloader: YOUTUBEMP3",
  description:
    "YOUTUBEMP3 is a Youtube to MP3 converter that allows you to easily convert and download Youtube videos in MP3 and MP4 online for free.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
