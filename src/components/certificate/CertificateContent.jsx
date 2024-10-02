import { useContext } from "react";
import { UserContext } from "../../../store/UserContext";
import certificateBackgroundImage from "../../assets/Planting - Certificate BG.svg";
import logo from "../../assets/We Grow Forest - Logo.png";
import meeraSign from "../../assets/Meera Sign.png";
import merinSign from "../../assets/Merin Sign.png";
import collegeLogo from "../../assets/We Grow Forest College - Logo.png";
import carbonZero from "../../assets/Carbon Zero Day - Logo.png";
import cleanShore from "../../assets/Sea of Change - Logo.png";
import engo from "../../assets/Engoi - Logo.png";
import qr from "../../assets/qr.svg";
import { TreesContext } from "../../../store/TreeContext";
import { date, id } from "./Certificate.jsx";

const CertificateContent = () => {
  const { user } = useContext(UserContext);
  const { numberOfTrees } = useContext(TreesContext);
  return (
    <div className="flex justify-center items-center mt-4">
      <div
        id="certificate"
        className="sm:w-[597px] sm:h-[850px] w-[350px] h-[500px] rounded-4xl md:p-16 p-8 border-white border-8 flex flex-col items-center"
        style={{
          backgroundImage: `url(${certificateBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src={logo} alt="" className="md:w-24 w-12 md:h-24 h-12" />
        <p className="text-button-hover-bg md:text-sm text-xs uppercase outfit-semibold md:mt-2 mt-1">
          certificate of
        </p>
        <h1 className="uppercase text-button-hover-bg outfit-extrabold md:text-2xl text-base">
          appreciation
        </h1>
        <p className="outfit-regular md:mt-2 md:text-xs text-[8px]">
          This certificate is awarded to
        </p>
        <h2 className="uppercase md:text-xl text-sm text-button-hover-bg outfit-extrabold md:mt-2">
          {user.name}
        </h2>
        <p className="outfit-regular text-center md:text-xs text-[8px] md:mt-2 ps-3 pe-3 md:ps-10 md:pe-10">
          in recognition of the invaluable contribution towards our goal of
          planting 10 million trees by 2030. Your dedication and support play a
          vital role in the success of the Green India Mission, bringing us one
          step closer to a greener and more sustainable future.
        </p>
        <h2 className="uppercase text-button-hover-bg md:text-xl text-sm md:mt-2 outfit-extrabold">
          {numberOfTrees} TREES PLANTED
        </h2>
        <p className="md:text-xs text-[8px] md:mt-2 outfit-regular">
          Your generosity and commitment will help us grow forests, contributing
        </p>
        <p className="md:text-xs text-[8px] outfit-regular text-center">
          to the restoration and preservation of our environment.
        </p>
        <p className="outfit-extrabold md:text-sm text-[10px] md:mt-2 text-button-hover-bg uppercase">
          {date}
        </p>
        <p className="outfit-medium md:text-sm text-[9px]">{id.toUpperCase()}</p>
        <div className="flex md:mt-4 mt-2 gap-6">
          <div className="flex flex-col items-end">
            <img src={meeraSign} alt="" className="md:w-20 md:h-5 w-10 h-2.5" />
            <h3 className="outfit-semibold md:text-sm text-xs text-right">
              Dr Meera Asmi
            </h3>
            <p className="md:text-xs text-[8px] text-right outfit-regular">Chariwoman</p>
            <p className="md:text-xs text-[8px] text-right outfit-regular">
              We Grow Forest Foundation
            </p>
          </div>

          {/* Vertical Line */}
          <div
            style={{ borderColor: "#9DDE8A", borderWidth: "0.1px" }} // Adjust to your desired lightness
            className="border-l md:h-20 h-12.5"
          ></div>

          <div className="flex flex-col items-start">
            <img src={merinSign} alt="" className="md:w-16 w-8 md:h-5 h-2.5" />
            <h3 className="outfit-semibold md:text-sm text-xs text-left">
              Dr Merin Jacob
            </h3>
            <p className="md:text-xs text-[8px] text-left outfit-regular">Managing Trustee</p>
            <p className="md:text-xs text-[8px] text-left outfit-regular">
              We Grow Forest Foundation
            </p>
          </div>
        </div>
        <div className="flex mt-4 justify-between w-full">
          <div className="flex flex-col justify-center items-center">
            <img src={collegeLogo} alt="" className="md:w-auto w-8 md:h-16 h-8" />
            <a
              href="https://www.wegrowforest.college/"
              className="md:text-[9px] text-[5px] text-center mt-1 outfit-medium"
            >
              www.wegrowforest.college
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={carbonZero} alt="" className="md:w-auto w-18 md:h-16 h-8" />
            <a
              href="https://www.carbonzero.day/"
              className="md:text-[9px] text-[5px] text-center mt-1 outfit-medium"
            >
              www.carbonzero.day
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={cleanShore} alt="" className="md:w-auto w-8 md:h-16 h-8" />
            <a
              href="https://seaofchange.in/"
              className="md:text-[9px] text-[5px] text-center mt-1 outfit-medium"
            >
              www.seaofchange.in
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={engo} alt="" className="md:w-auto w-6 md:h-16 h-8" />
            <a
              href="https://engoi.org/"
              className="md:text-[9px] text-[5px] text-center mt-1 outfit-medium"
            >
              www.engoi.org
            </a>
          </div>
        </div>
        <div className="mt-2 flex flex-col justify-center items-center">
          <img src={qr} alt="" className="md:w-auto w-8 md:h-20 h-10" />
          <a
            href="https://www.wegrowforest.org/"
            className="text-button-hover-bg md:text-[9px] text-[5px] outfit-medium"
          >
            www.wegrowforest.org
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateContent;
