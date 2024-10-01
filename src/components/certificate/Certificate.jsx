import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../store/UserContext";
import { TreesContext } from "../../../store/TreeContext";
import { useNavigate } from "react-router-dom";
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
import { formatDate } from "../../../utils/formatDate";
import { generateCertificateNumber } from "../../../utils/uniqueCertificateNumber";
import { downloadAsPDF } from "../../../utils/downloadAsPdf";
import { downloadAsJPG } from "../../../utils/downloadAsJPG";
import { shareJPG } from "../../../utils/shareJPG";

export const date = formatDate(new Date());
export const id = generateCertificateNumber();

const Certificate = () => {
  const { user } = useContext(UserContext);
  const { numberOfTrees } = useContext(TreesContext);
  const [shareUrl, setShareUrl] = useState(
    "http://localhost:3001/uploads/3453434342.jpg"
  );
  const navigate = useNavigate();
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
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(
      () => {
        toast.success("URL copied to clipboard!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      },
      (err) => {
        toast.error("Failed to copy URL!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.error("Failed to copy text: ", err);
      }
    );
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ""; // Most modern browsers require this to show the alert
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  useEffect(() => {
    if (!user.name) {
      navigate("/");
    }
  });
  useEffect(() => {
    const sendCertificate = async () => {
      const imgData = await shareJPG(user.name, numberOfTrees);

      // Send to backend
      try {
        const response = await fetch("https://plant.wegrowforest.org/api/upload-certificate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ image: imgData }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setShareUrl(data.filePath);
      } catch (error) {
        console.error("Error uploading certificate:", error);
      }
    };

    sendCertificate();
  }, []); // Run when name changes
  return (
    <div
      style={{ backgroundImage: `url(${bg})`,backgroundPosition: '12% 50%' }}
      className="bg-cover bg-left min-h-screen min-w-fit flex items-center justify-around flex-col lg:flex-row pt-7 pb-7"
    >
      <div className="md:mr-40 lg:mr-0">
        <h1 className="text-white text-4xl lg:text-7xl sm:text-5xl whitespace-pre-line outfit-extrabold md:ml-7 ml-0">
          Download{"\n"}Green Warrior{"\n"}Certificate
        </h1>
        <div className="flex gap-2 md:ml-7 md:pt-10 pt-2">
          <div className="flex justify-center">
            <button
              className="bg-button-bg outfit-regular hover:bg-button-hover-bg rounded-3xl md:w-24 w-16 md:text-base text-xs h-8 text-center flex justify-around items-center text-white"
              onClick={() => downloadAsPDF(user.name, numberOfTrees)}
            >
              PDF
              <img src={downloadLight} alt="Download" className="w-3 h-3" />
            </button>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-button-bg outfit-regular hover:bg-button-hover-bg rounded-3xl md:w-24 w-16 md:text-base text-xs h-8 text-center flex justify-around items-center text-white"
              onClick={() => downloadAsJPG(user.name, numberOfTrees)}
            >
              JPEG
              <img src={downloadLight} alt="Download" className="w-3 h-3" />
            </button>
          </div>

          <div>
            <a href="https://www.wegrowforest.org">
              <button className="bg-button-bg outfit-regular hover:bg-button-hover-bg rounded-3xl md:w-48 w-36 md:text-base text-xs h-8 text-center flex justify-around items-center text-white">
                www.wegrowforest.org
              </button>
            </a>
          </div>
        </div>
        <div className="md:ml-7 md:pt-10 pt-2 text-white">
          <p className="outfit-extrabold">Instant Share</p>
          <div className="flex gap-2">
            <p className="bg-button-bg rounded-3xl outfit-regular md:text-base text-xs h-8 text-center overflow-hidden whitespace-nowrap text-ellipsis w-52 flex items-center px-3">
              {shareUrl}
            </p>
            <button className="bg-button-bg hover:bg-button-hover-bg rounded-full p-2"
            onClick={copyToClipboard}
            >
              <img src={copyButton} alt="" className="w-5 h-4" />
            </button>
          </div>
          <p className="outfit text-xs mt-2">Please note that this link will expire in 10 days!</p>
        </div>
        <div className="md:ml-7">
          <p className="md:pt-10 pt-2 outfit-extrabold text-white">Social Share</p>
          <div className="flex gap-3">
            <FacebookShareButton
              url={shareUrl}
              onMouseEnter={() => setFbHover(true)}
              onMouseLeave={() => setFbHover(false)}
            >
              <img
                src={fbHover ? facebookIconDark : facebookIcon}
                alt="Facebook"
                className="w-8"
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
                className="w-8"
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
                className="w-8"
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
                className="w-8 whatsapp-icon"
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
                className="w-8
                
                "
              />
            </button>
          </div>
        </div>
      </div>
       {/* ToastContainer to render the toasts */}
       <ToastContainer />
      <div>
        <CertificateContent></CertificateContent>
      </div>
    </div>
  );
};

export default Certificate;
