import React from "react";
import { SiZomato } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import AppleLogo from "../../assets/footer-apple-logo.webp";
import PlayStoreLogo from "../../assets/footer-playstore-logo.webp";
import { IoFastFoodOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full bg-[#F8F8F8] px-2.5 ">
      <div className="max-w-[72rem] m-auto 	">
        <div className="flex items-center justify-between	">
          <div>
            <IoFastFoodOutline
              size={80}
              style={{ color: "black", padding: "10px", marginBottom: "10px" }}
            />
          </div>
          <div className="w-[5rem]  h-[2rem] text-center">INDIA</div>
        </div>
        <div className=" flex justify-between border-b-[1px] border-black  pb-12 flex-wrap">
          <div>
            <h6 className="font-medium">ABOUT ZOMATO</h6>
            <p className="text-gray-500 dark:text-gray-400">Who We Are</p>
            <p className="text-gray-500 dark:text-gray-400">Blog</p>
            <p className="text-gray-500 dark:text-gray-400">Work With Us</p>
            <p className="text-gray-500 dark:text-gray-400">
              Investors Relations
            </p>
            <p className="text-gray-500 dark:text-gray-400">Report Fraud</p>
            <p className="text-gray-500 dark:text-gray-400">Press Kit</p>
            <p className="text-gray-500 dark:text-gray-400">Contect Us</p>
          </div>
          <div>
            <h6 className="font-medium">ZOMAVERSE</h6>
            <p className="text-gray-500 dark:text-gray-400">Zomato</p>
            <p className="text-gray-500 dark:text-gray-400">Blinkit</p>
            <p className="text-gray-500 dark:text-gray-400">Feeding India</p>
            <p className="text-gray-500 dark:text-gray-400">Hyperpure</p>
            <p className="text-gray-500 dark:text-gray-400">Zomaland</p>
          </div>
          <div>
            <h6 className="font-medium">FOR RESTAURANTS</h6>
            <p className="text-gray-500 dark:text-gray-400">Partner With Us</p>
            <p className="text-gray-500 dark:text-gray-400">Apps For You</p>
          </div>
          <div>
            <h6 className="font-medium">LEARN MORE</h6>
            <p className="text-gray-500 dark:text-gray-400">Privacy</p>
            <p className="text-gray-500 dark:text-gray-400">Security</p>
            <p className="text-gray-500 dark:text-gray-400">Terms</p>
            <p className="text-gray-500 dark:text-gray-400">Sitemap</p>
          </div>

          <div>
            <h6 className="font-medium">SOCIAL LINKS</h6>
            <div className="flex items-center justify-between py-2.5">
              <FaLinkedin size={22} />
              <FaSquareInstagram size={22} />
              <FaSquareTwitter size={22} />
              <FaSquareYoutube size={22} />
              <FaFacebookSquare size={22} />
            </div>
            <span>
              <img src={AppleLogo} alt="logo" className="w-[8rem] m-1" />
            </span>
            <span>
              <img src={PlayStoreLogo} alt="logo" className="w-[8rem] m-1" />
            </span>
          </div>
        </div>

        <p className="text-sm py-5 text-gray-500 dark:text-gray-400">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2024 © Zomato™ Ltd. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
