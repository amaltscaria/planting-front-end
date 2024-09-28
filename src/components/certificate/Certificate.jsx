import { useContext, useState } from "react";
import { UserContext } from "../../../store/UserContext";
import "./Certificate.css";
import bg from "../../assets/Background.svg";
import downloadLight from "../../assets/downloadLight.svg";
import copyButton from "../../assets/copyIcon.svg";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";

import facebookIcon from "../../assets/facebookIcon.svg";
import facebookIconDark from "../../assets/facebookIconDark.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import twitterIconDark from "../../assets/twitterIconDark.svg";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import linkedinIconDark from "../../assets/linkedinIconDark.svg";
import whatsappIcon from "../../assets/whatsappIcon.svg";
import whatsappIconDark from "../../assets/whatsappIconDark.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import instagramIconDark from "../../assets/instagramIconDark.svg";
import CertificateContent from "./CertificateContent";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Certificate = () => {
  const { user } = useContext(UserContext);
  const [shareUrl, setShareUrl] = useState(
    "http://localhost:3001/uploads/3453434342.jpg"
  );
  const [fbHover, setFbHover] = useState(false);
  const [xHover, setXHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [wpHover, setWpHover] = useState(false);
  const [instaHover, setInstaHover] = useState(false);

  const openInstagramChat = () => {
    // Open Instagram DM page, where users can manually paste the URL.
    navigator.clipboard.writeText(shareUrl);
    window.open("https://www.instagram.com/direct/inbox/", "_blank");
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-left min-h-screen min-w-fit flex items-center justify-around flex-col lg:flex-row"
    >
      <div>
        <h1 className="text-white text-4xl lg:text-7xl sm:text-5xl whitespace-pre-line outfit-extrabold ml-7">
          Download{"\n"}Tree Planting{"\n"}Certificate
        </h1>
        <div className="flex gap-2 ml-7 pt-6">
          <div className="flex justify-center">
            <button className="bg-button-bg outfit-regular hover:bg-button-hover-bg rounded-3xl w-24 h-8 text-center flex justify-around items-center text-white">
              PDF
              <img src={downloadLight} alt="Download" className="w-3 h-3" />
            </button>
          </div>
          <div className="flex justify-center">
            <button className="bg-button-bg outfit-regular hover:bg-button-hover-bg rounded-3xl w-24 h-8 text-center flex justify-around items-center text-white">
              JPEG
              <img src={downloadLight} alt="Download" className="w-3 h-3" />
            </button>
          </div>

          <div>
            <a href="">
              <button className="bg-button-bg outfit-regular hover:bg-button-hover-bg rounded-3xl w-48 h-8 text-center flex justify-around items-center text-white">
                www.wegrowforest.org
              </button>
            </a>
          </div>
        </div>
        <div className="ml-7 pt-6 text-white">
          <p className="outfit-extrabold">Instant Share</p>
          <div className="flex gap-2">
            <p className="bg-button-bg rounded-3xl outfit-regular h-8 text-center overflow-hidden whitespace-nowrap text-ellipsis w-52 flex items-center px-3">
              https://locahost:3001/upfdfdfdfdfloads
            </p>
            <button className="bg-button-bg hover:bg-button-hover-bg rounded-full px-2">
              <img src={copyButton} alt="" className="w-5 h-4" />
            </button>
          </div>
        </div>
        <div className="ml-7">
          <p className="pt-6 outfit-extrabold text-white">Social Share</p>
          <div className="flex gap-3">
            <FacebookShareButton
              url={shareUrl}
              onMouseEnter={() => setFbHover(true)}
              onMouseLeave={() => setFbHover(false)}
            >
              <img
                src={fbHover ? facebookIconDark : facebookIcon}
                alt="Facebook"
                className="w-12"
              />
            </FacebookShareButton>
            <TwitterShareButton
              url={shareUrl}
              onMouseEnter={() => setXHover(true)}
              onMouseLeave={() => setXHover(false)}
            >
              <img
                src={xHover ? twitterIconDark : twitterIcon}
                alt="X"
                className="w-12"
              />
            </TwitterShareButton>
            <LinkedinShareButton
              url={shareUrl}
              onMouseEnter={() => setLinkedinHover(true)}
              onMouseLeave={() => setLinkedinHover(false)}
            >
              <img
                src={linkedinHover ? linkedinIconDark : linkedinIcon}
                alt="LinkedIn"
                className="w-12"
              />
            </LinkedinShareButton>
            <WhatsappShareButton
              url={shareUrl}
              onMouseEnter={() => setWpHover(true)}
              onMouseLeave={() => setWpHover(false)}
            >
              <img
                src={wpHover ? whatsappIconDark : whatsappIcon}
                alt="WhatsApp"
                className="w-12 whatsapp-icon"
              />
            </WhatsappShareButton>
            <button
              onClick={openInstagramChat}
              onMouseEnter={() => setInstaHover(true)}
              onMouseLeave={() => setInstaHover(false)}
            >
              <img
                src={instaHover ? instagramIconDark : instagramIcon}
                alt="Instagram"
                className="w-12"
              />
            </button>
          </div>
        </div>
      </div>
      <div>
        <CertificateContent></CertificateContent>
      </div>
    </div>
  );
};

export default Certificate;
