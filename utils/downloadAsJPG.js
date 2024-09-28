import certificateBackgroundImage from "../src/assets/Planting - Certificate BG.jpg";
import logoImage from "../src/assets/We Grow Forest - Logo.png";
import qrCodeImage from "../src/assets/qr.png";
import meeraSignImage from "../src/assets/Meera Sign.png";
import merinSignImage from "../src/assets/Merin Sign.png";
import collegeLogoImage from "../src/assets/We Grow Forest College - Logo.png";
import cleanShoreLogoImage from "../src/assets/Sea of Change - Logo.png";
import engoLogoImage from "../src/assets/Engoi - Logo.png";
import carbonZeroLogoImage from "../src/assets/Carbon Zero Day - Logo.png";
import { date, id } from "../src/components/Certificate/certificate";

export const downloadAsJPG = (name, treeCount) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Set canvas dimensions (A4 size in pixels at 300 DPI)
  const width = 2480;
  const height = 3508;
  canvas.width = width;
  canvas.height = height;

  // Load background image
  const background = new Image();
  background.src = certificateBackgroundImage;
  background.onload = () => {
    ctx.drawImage(background, 0, 0, width, height);

    // Load and draw logo
    const logo = new Image();
    logo.src = logoImage;
    logo.onload = () => {
      ctx.drawImage(logo, (width - 400) / 2, 100, 400, 500); // Center the logo

      // Title text
      ctx.font = "bold 100px Outfit";
      ctx.fillStyle = "#40A578";
      ctx.textAlign = "center";
      ctx.fillText("CERTIFICATE OF", width / 2, 800);

      // Main heading text
      ctx.font = "bold 160px Outfit";
      ctx.fillText("APPRECIATION", width / 2, 1000);

      // Subheading text
      ctx.font = "50px Outfit";
      ctx.fillStyle = "#000";
      ctx.fillText("This certificate is awarded to", width / 2, 1150);

      // Name of participant
      ctx.font = "bold 120px Outfit";
      ctx.fillStyle = "#40A578";
      ctx.fillText(name.toUpperCase(), width / 2, 1300);

      // Body text
      const bodyText = [
        "in recognition of the invaluable contribution towards our goal of",
        "planting 10 million trees by 2030. Your dedication and support",
        "play a vital role in the success of the Green India Mission,",
        "bringing us one step closer to a greener and more sustainable future.",
      ];
      ctx.font = "40px Outfit";
      bodyText.forEach((line, index) => {
        ctx.fillText(line, width / 2, 1450 + index * 60);
      });

      // Number of trees planted
      ctx.font = "bold 100px Outfit";
      ctx.fillStyle = "#40A578";
      ctx.fillText(`${treeCount} TREES PLANTED`, width / 2, 1800);

      // Thank you text
      const thankYouText = [
        "Your generosity and commitment will help us grow forests,",
        "contributing to the restoration and preservation of our environment.",
      ];
      ctx.font = "40px Outfit";
      thankYouText.forEach((line, index) => {
        ctx.fillText(line, width / 2, 1900 + index * 60);
      });

      // Date and certificate number
      ctx.font = "bold 60px Outfit";
      ctx.fillStyle = "#40A578";
      ctx.fillText(date.toUpperCase(), width / 2, 2200);
      ctx.fillText(id.toUpperCase(), width / 2, 2300);

      // Signatures and Logos
      const signatureY = 2400;

      // Merin Jacob's signature
      const merinSign = new Image();
      merinSign.src = merinSignImage;
      merinSign.onload = () => {
        ctx.drawImage(merinSign, width / 2 + 100, signatureY, 300, 100);

        ctx.font = "bold 40px Outfit";
        ctx.fillStyle = "#000";
        ctx.fillText("Dr Merin Jacob", width / 2 + 250, signatureY + 150);
        ctx.font = "30px Outfit";
        ctx.fillText("Managing Trustee", width / 2 + 250, signatureY + 180);
      };

      // Meera Asmi's signature
      const meeraSign = new Image();
      meeraSign.src = meeraSignImage;
      meeraSign.onload = () => {
        ctx.drawImage(meeraSign, width / 2 - 400, signatureY, 300, 100);

        ctx.font = "bold 40px Outfit";
        ctx.fillStyle = "#000";
        ctx.fillText("Dr Meera Asmi", width / 2 - 250, signatureY + 150);
        ctx.font = "30px Outfit";
        ctx.fillText("Chairwoman", width / 2 - 250, signatureY + 180);
      };

      // Draw logos and QR code
      const qr = new Image();
      qr.src = qrCodeImage;
      qr.onload = () => {
        ctx.drawImage(qr, (width - 200) / 2, 2900, 200, 200);
        ctx.font = "30px Outfit";
        ctx.fillText("www.wegrowforest.org", width / 2, 3150);
      };

      // College Logo
      const collegeLogo = new Image();
      collegeLogo.src = collegeLogoImage;
      collegeLogo.onload = () => {
        ctx.drawImage(collegeLogo, width / 2 - 500, 3200, 150, 150);
      };

      // Carbon Zero Logo
      const carbonZeroLogo = new Image();
      carbonZeroLogo.src = carbonZeroLogoImage;
      carbonZeroLogo.onload = () => {
        ctx.drawImage(carbonZeroLogo, width / 2 - 150, 3200, 300, 150);
      };

      // Clean Shore Logo
      const cleanShoreLogo = new Image();
      cleanShoreLogo.src = cleanShoreLogoImage;
      cleanShoreLogo.onload = () => {
        ctx.drawImage(cleanShoreLogo, width / 2 + 350, 3200, 150, 150);
      };

      // ENGO Logo
      const engoLogo = new Image();
      engoLogo.src = engoLogoImage;
      engoLogo.onload = () => {
        ctx.drawImage(engoLogo, width / 2 + 700, 3200, 150, 150);
      };

      // Download the image once everything is loaded
      const imgData = canvas.toDataURL("image/jpeg");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "certificate.jpg";
      link.click();
    };
  };
};
