import { useContext } from "react";
import { UserContext } from "../../../store/UserContext";
import certificateBackgroundImage from "../../assets/Planting - Certificate BG.jpg";
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
    <div className="flex justify-center items-center">
      <div
        id="certificate"
        className="sm:w-[597px] sm:h-[850px] rounded-4xl p-16 border-white border-8 flex flex-col items-center"
        style={{
          backgroundImage: `url(${certificateBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src={logo} alt="" className="w-24 h-24" />
        <p className="text-button-hover-bg text-sm uppercase outfit-semibold mt-2">
          certificate of
        </p>
        <h1 className="uppercase text-button-hover-bg outfit-extrabold text-2xl">
          appreciation
        </h1>
        <p className="outfit-regular mt-2 text-xs">
          This certificate is awarded to
        </p>
        <h2 className="uppercase text-xl text-button-hover-bg outfit-extrabold mt-2">
          {user.name}
        </h2>
        <p className="outfit-regular text-center text-xs mt-2 ps-10 pe-10">
          in recognition of the invaluable contribution towards our goal of
          planting 10 million trees by 2030. Your dedication and support play a
          vital role in the success of the Green India Mission, bringing us one
          step closer to a greener and more sustainable future.
        </p>
        <h2 className="uppercase text-button-hover-bg text-xl mt-2 outfit-extrabold">
          {numberOfTrees} TREES PLANTED
        </h2>
        <p className="text-xs mt-2 outfit-regular">
          Your generosity and commitment will help us grow forests, contributing
        </p>
        <p className="text-xs outfit-regular text-center">
          to the restoration and preservation of our environment.
        </p>
        <p className="outfit-extrabold text-sm mt-2 text-button-hover-bg uppercase">
          {date}
        </p>
        <p className="outfit-medium text-sm">{id.toUpperCase()}</p>
        <div className="flex mt-4 gap-6">
          <div className="flex flex-col items-end">
            <img src={meeraSign} alt="" className="w-20 h-5" />
            <h3 className="outfit-semibold text-sm text-right">
              Dr Meera Asmi
            </h3>
            <p className="text-xs text-right outfit-regular">Chariwoman</p>
            <p className="text-xs text-right outfit-regular">
              We Grow Forest Foundation
            </p>
          </div>

          {/* Vertical Line */}
          <div
            style={{ borderColor: "#9DDE8A", borderWidth: "0.1px" }} // Adjust to your desired lightness
            className="border-l h-20"
          ></div>

          <div className="flex flex-col items-start">
            <img src={merinSign} alt="" className="w-16 h-5" />
            <h3 className="outfit-semibold text-sm text-left">
              Dr Merin Jacob
            </h3>
            <p className="text-xs text-left outfit-regular">Managing Trustee</p>
            <p className="text-xs text-left outfit-regular">
              We Grow Forest Foundation
            </p>
          </div>
        </div>
        <div className="flex mt-4 justify-between w-full">
          <div className="flex flex-col justify-center items-center">
            <img src={collegeLogo} alt="" className="w-16 h-16" />
            <a
              href="https://www.wegrowforest.college/"
              className="text-[9px] text-center mt-1"
            >
              www.wegrowforest.college
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={carbonZero} alt="" className="w-36 h-16" />
            <a
              href="https://www.carbonzero.day/"
              className="text-[9px] text-center mt-1"
            >
              www.carbonzero.day
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={cleanShore} alt="" className="w-16 h-16" />
            <a
              href="https://seaofchange.in/"
              className="text-[9px] text-center mt-1"
            >
              www.seaofchange.in
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={engo} alt="" className="w-12 h-16" />
            <a
              href="https://engoi.org/"
              className="text-[9px] text-center mt-1"
            >
              www.engoi.org
            </a>
          </div>
        </div>
        <div className="mt-2 flex flex-col justify-center items-center">
          <img src={qr} alt="" className="w-16 h-20" />
          <a
            href="https://www.wegrowforest.org/"
            className="text-button-hover-bg text-[9px]"
          >
            www.wegrowforest.org
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateContent;
