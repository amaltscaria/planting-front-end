import certificateBackgroundImage from "../src/assets/Planting - Certificate BG.jpg";
import logoImage from "../src/assets/We Grow Forest - Logo.png";
import qrCodeImage from "../src/assets/qr.png";
import meeraSignImage from "../src/assets/Meera Sign.png";
import merinSignImage from "../src/assets/Merin Sign.png";
import collegeLogoImage from "../src/assets/We Grow Forest College - Logo.png";
import cleanShoreLogoImage from "../src/assets/Sea of Change - Logo.png";
import engoLogoImage from "../src/assets/Engoi - Logo.png";
import carbonZeroLogoImage from "../src/assets/Carbon Zero Day - Logo.png";
import { date, id } from "../src/components/certificate/Certificate";

export const shareJPG = async (name, treeCount) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Set canvas dimensions (A4 size in pixels at 300 DPI)
  const width = 2480;
  const height = 3508;
  canvas.width = width;
  canvas.height = height;

  // Draw background
  const background = new Image();
  background.src = certificateBackgroundImage;

  return new Promise((resolve) => {
    background.onload = () => {
      ctx.drawImage(background, 0, 0, width, height);

      // Draw logo
      const logo = new Image();
      logo.src = logoImage;
      logo.onload = () => {
        const logoY = 270;
        ctx.drawImage(logo, (width - 400) / 2, logoY, 400, 520);

        // Title Text
        ctx.font = "900 60px Outfit";
        ctx.fillStyle = "#40A578";
        ctx.textAlign = "center";
        ctx.fillText("CERTIFICATE OF", width / 2, logoY + 620);

        // Main Heading
        ctx.font = "900 120px Outfit";
        ctx.fillText("APPRECIATION", width / 2, logoY + 730);

        // Subheading Text
        ctx.font = "600 50px Outfit";
        ctx.fillStyle = "#000";
        ctx.fillText("This certificate is awarded to", width / 2, logoY + 840);

        // Name of Participant
        ctx.font = "900 100px Outfit";
        ctx.fillStyle = "#40A578";
        ctx.fillText(name.toUpperCase(), width / 2, logoY + 1000);

        // Certificate Body
        const bodyText = [
          "in recognition of the invaluable contribution towards our goal of",
          "planting 10 million trees by 2030. Your dedication and support",
          "play a vital role in the success of the Green India Mission,",
          "bringing us one step closer to a greener and more sustainable future.",
        ];
        ctx.font = "600 50px Outfit";
        ctx.fillStyle = "#000";
        bodyText.forEach((line, index) => {
          ctx.fillText(line, width / 2, logoY + 1100 + index * 60);
        });

        // Number of Trees planted Section
        ctx.font = "900 100px Outfit";
        ctx.fillStyle = "#40A578";
        ctx.fillText(`${treeCount} TREES PLANTED`, width / 2, logoY + 1450);

        // Thank you section
        const thankYouText = [
          "Your generosity and commitment will help us grow forests, contributing",
          "to the restoration and preservation of our environment.",
        ];
        ctx.font = "600 50px Outfit";
        ctx.fillStyle = "#000";
        thankYouText.forEach((line, index) => {
          ctx.fillText(line, width / 2, logoY + 1550 + index * 60);
        });

        // Date and certificate number
        ctx.font = "900 60px Outfit";
        ctx.fillStyle = "#40A578";
        ctx.fillText(date.toUpperCase(), width / 2, logoY + 1750);
        ctx.font = "600 60px Outfit";
        ctx.fillStyle = "#000";
        ctx.fillText(id.toUpperCase(), width / 2, logoY + 1820);

        // Draw signatures
        const meeraSign = new Image();
        meeraSign.src = meeraSignImage;
        const merinSign = new Image();
        merinSign.src = merinSignImage;

        meeraSign.onload = () => {
          merinSign.onload = () => {
            const signatureY = logoY + 1920;
            ctx.drawImage(merinSign, width / 2 + 105, signatureY, 400, 150);
            ctx.drawImage(meeraSign, width / 2 - 500, signatureY, 400, 150);

            // Draw vertical line between signatures
            ctx.beginPath();
            ctx.moveTo(width / 2, signatureY);
            ctx.lineTo(width / 2, signatureY + 280);
            ctx.strokeStyle = "#9DDE8A";
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.font = "900 50px Outfit";
            ctx.fillStyle = "#000";
            ctx.fillText("Dr Merin Jacob", width / 2 + 280, signatureY + 195);
            ctx.fillText("Dr Meera Asmi", width / 2 - 280, signatureY + 195);

            ctx.font = "600 35px Outfit";
            ctx.fillText("Managing Trustee", width / 2 + 245, signatureY + 235);
            ctx.fillText("Chairwoman", width / 2 - 208, signatureY + 235);

            ctx.fillText("We Grow Forest Foundation", width / 2 + 322, signatureY + 270);
            ctx.fillText("We Grow Forest Foundation", width / 2 - 325, signatureY + 270);

            // Draw logos
            const logoStartY = logoY + 2320;
            const logoWidth = 250;
            const logoHeight = 200;
            const logoSpacing = (width - 4 * logoWidth) / 5;

            const collegeLogo = new Image();
            const carbonZeroLogo = new Image();
            const cleanShoreLogo = new Image();
            const engoLogo = new Image();

            collegeLogo.src = collegeLogoImage;
            carbonZeroLogo.src = carbonZeroLogoImage;
            cleanShoreLogo.src = cleanShoreLogoImage;
            engoLogo.src = engoLogoImage;

            collegeLogo.onload = () => {
              carbonZeroLogo.onload = () => {
                cleanShoreLogo.onload = () => {
                  engoLogo.onload = () => {
                    ctx.drawImage(collegeLogo, logoSpacing+50, logoStartY, logoWidth+50, logoHeight);
                    ctx.drawImage(carbonZeroLogo, 2 * logoSpacing + logoWidth -30, logoStartY, logoWidth+350, logoHeight);
                    ctx.drawImage(cleanShoreLogo, 3 * logoSpacing + 2 * logoWidth + 100, logoStartY, logoWidth, logoHeight);
                    ctx.drawImage(engoLogo, 4 * logoSpacing + 3 * logoWidth -30, logoStartY, logoWidth, logoHeight);

                    ctx.font = "25px Outfit";
                    ctx.fillStyle = "#000";
                    ctx.fillText("www.wegrowforest.college", logoSpacing + logoWidth / 2 + 75, logoStartY + logoHeight + 40);
                    ctx.fillText("www.carbonzero.day", 2 * logoSpacing + 1.5 * logoWidth + 140, logoStartY + logoHeight + 40);
                    ctx.fillText("www.seaofchange.in", 3 * logoSpacing + 2.5 * logoWidth + 100, logoStartY + logoHeight + 40);
                    ctx.fillText("www.engoi.org", 4 * logoSpacing + 3.5 * logoWidth -30, logoStartY + logoHeight + 40);

                    // Draw QR code and website URL
                    const qrCode = new Image();
                    qrCode.src = qrCodeImage;
                    qrCode.onload = () => {
                      const qrSize = 250;
                      const qrY = logoStartY + logoHeight + 150;
                      ctx.drawImage(qrCode, (width - qrSize) / 2, qrY, qrSize, qrSize);
                      ctx.font = "30px Outfit";
                      ctx.fillText("www.wegrowforest.org", width / 2, qrY + qrSize + 40);

                      // Resolve with image data
                      const imgData = canvas.toDataURL("image/jpeg", 0.95);
                      resolve(imgData);
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  });
};