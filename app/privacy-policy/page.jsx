import React from "react";
import ReturnBtn from "../../containers/returnBtn";
import Footer from "../../components/Footer";
import TaskBar from "../../components/taskBar";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - YOUTUBEMP3 Youtube TO MP3 CONVERTER",
  description:
    "Convert and download your favourite YouTube videos to mp3 with YouTubeMP3. Enjoy high-quality and fast YouTube music downloads.",
};

const Page = () => {
  return (
    <div>
      <TaskBar />
      <div className=" flex flex-col ">
        <div className=" mt-20 md:mt-[7.5rem]  md:w-[70vw] xl:w-[45vw] w-[90vw] mx-auto text-text">
          <div>
            <h1
              style={{ lineHeight: "80px" }}
              className="text-4xl sm:text-5xl text-center font-bold  text-text my-10"
            >
              Privacy Policy - YOUTUBEMP3
            </h1>
            <p className="my-6">
              At YOUTUBEMP3, accessible from https://youtubemp3.io, one of our
              main priorities is the privacy of our visitors. This Privacy
              Policy document contains types of information that is collected
              and recorded by YOUTUBEMP3 and how we use it.
            </p>
            <p className="my-6">
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>
            <p>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in YOUTUBEMP3. This policy is not
              applicable to any information collected offline or via channels
              other than this website.
            </p>
          </div>
          <div>
            <h3 className="text-text text-3xl font-semibold mb-4 mt-10">
              Consent
            </h3>
            <p className="my-6">
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>
          </div>
          <div>
            <h3 className="text-text text-3xl font-semibold mb-4 mt-10">
              Information we collect
            </h3>
            <p className="my-6">
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>
            <p className="my-6">
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
            <p className="my-6">
              When you register for an Account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </p>
          </div>
          <div>
            <h3 className="text-text text-3xl font-semibold mb-4 mt-10">
              How we use your information
            </h3>
            <p className="my-6">
              We use the information we collect in various ways, including to:
            </p>
            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-text text-3xl font-semibold mb-4 mt-10">
              Google DoubleClick DART Cookie
            </h3>
            <p className="my-6">
              Google is one of a third-party vendor on our site. It also uses
              cookies, known as DART cookies, to serve ads to our site visitors
              based upon their visit to https://youtubemp3.io and other sites on
              the internet. However, visitors may choose to decline the use of
              DART cookies by visiting the Google ad and content network Privacy
              Policy at the following URL –
              <Link href={"https://policies.google.com/technologies/ads"}>
                https://policies.google.com/technologies/ads
              </Link>
            </p>
          </div>
          <div>
            <h3 className="text-text text-3xl font-semibold mb-4 mt-10">
              Our Advertising Partners
            </h3>
            <p className="my-6">
              Some of advertisers on our site may use cookies and web beacons.
              Our advertising partners are listed below. Each of our advertising
              partners has their own Privacy Policy for their policies on user
              data. For easier access, we hyperlinked to their Privacy Policies
              below. Google{" "}
              <Link href={"https://policies.google.com/technologies/ads"}>
                https://policies.google.com/technologies/ads
              </Link>
            </p>
          </div>
          <div>
            <h3 className="text-text text-3xl font-semibold mb-4 mt-10">
              Advertising Partners Privacy Policies
            </h3>
            <p className="my-6">
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of YOUTUBEMP3.
            </p>
            <p className="my-6">
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on Youtube
              Downloader, which are sent directly to users browser. They
              automatically receive your IP address when this occurs. These
              technologies are used to measure the effectiveness of their
              advertising campaigns and/or to personalize the advertising
              content that you see on websites that you visit.
            </p>
            <p className="my-6">
              Note that YOUTUBEMP3 has no access to or control over these
              cookies that are used by third-party advertisers.
            </p>
          </div>
          <div>
            <h3 className="text-text text-3xl font-semibold mb-4 mt-10">
              Third Party Privacy Policies
            </h3>
            <p className="my-6">
              YOUTUBEMP3&apos;s Privacy Policy does not apply to other
              advertisers or websites. Thus, we are advising you to consult the
              respective Privacy Policies of these third-party ad servers for
              more detailed information. It may include their practices and
              instructions about how to opt-out of certain options.
            </p>
            <p className="my-6">
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browser&apos;s
              respective websites.
            </p>
          </div>
          <div>
            <h3 className="text-text text-3xl font-semibold mb-4 mt-10">
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </h3>
            <p className="my-6">
              Under the CCPA, among other rights, California consumers have the
              right to:
            </p>
            <p className="my-6">
              Request that a business that collects a consumer&apos;s personal
              data disclose the categories and specific pieces of personal data
              that a business has collected about consumers.
            </p>
            <p className="my-6">
              Request that a business delete any personal data about the
              consumer that a business has collected.
            </p>
            <p className="my-6">
              Request that a business that sells a consumer&apos;s personal
              data, not sell the consumer&apos;s personal data.
            </p>
            <p className="my-6">
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
          </div>
          <div>
            <h3 className="text-text text-3xl font-semibold mb-4 mt-10">
              GDPR Data Protection Rights
            </h3>
            <p className="my-6">
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <p className="my-2">
              The right to access – You have the right to request copies of your
              personal data. We may charge you a small fee for this service.
            </p>
            <p className="my-2">
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
            </p>
            <p className="my-2">
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions.
            </p>
            <p className="my-2">
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
            </p>
            <p className="my-2">
              The right to object to processing – You have the right to object
              to our processing of your personal data, under certain conditions.
            </p>
            <p className="my-2">
              The right to data portability – You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </p>
            <p className="my-2">
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
          </div>
          <div>
            <h3 className="text-text text-3xl font-semibold mb-4 mt-10">
              Children&apos;s Information
            </h3>
            <p className="my-6">
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>
            <p className="my-6">
              YOUTUBEMP3 does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records.
            </p>
          </div>
          <div className="text-white ">
            <ReturnBtn text={"Return to homepage"} />
          </div>
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
};

export default Page;
