import jsPDF from "jspdf";
import certificateBackgroundImage from "../src/assets/Planting - Certificate BG.jpg";
import logo from "../src/assets/We Grow Forest - Logo.png";
import qr from "../src/assets/qr.png";
import { registerFonts } from "./fonts/Outfit-Medium-normal";
import { registerFonts2 } from "./fonts/Outfit-ExtraBold-bold";
import { date, id } from "../src/components/certificate/Certificate.jsx";
import merinSign from "../src/assets/Merin Sign.png";
import meeraSign from "../src/assets/Meera Sign.png";
import collegeLogo from "../src/assets/We Grow Forest College - Logo.png";
import cleanShore from "../src/assets/Sea of Change - Logo.png";
import engo from "../src/assets/Engoi - Logo.png";
import carbonZero from "../src/assets/Carbon Zero Day - Logo.png";

registerFonts();
registerFonts2();
// Generate and Download the PDF certificate
const name = "Amal T Scaria";

export const downloadAsPDF = (name1, treeCount) => {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  // A4 dimensions in mm
  const pageWidth = 210;
  const pageHeight = 297;

  // Add background image (full page)
  pdf.addImage(certificateBackgroundImage, "JPEG", 0, 0, pageWidth, pageHeight);

  // Set font for the document
  pdf.setTextColor("#40A578").setFont("Outfit-Medium");

  // Add the Logo
  const logoX = (pageWidth - 40) / 2;
  pdf.addImage(logo, "PNG", logoX, 20, 40, 52); // Adjust logo position (x, y) and size (width, height)

  // Title Text
  pdf.setFontSize(12);
  pdf.setFont("Outfit-ExtraBold", "bold");
  const titleText = "CERTIFICATE OF".toUpperCase();
  const titleWidth = pdf.getTextWidth(titleText);
  const titleX = (pageWidth - titleWidth) / 2; // Calculate centered position
  pdf.text(titleText, titleX, 81); // Use calculated x position

  // Main Heading
  pdf.setFontSize(25);
  pdf.setFont("Outfit-ExtraBold", "bold");
  const mainHeading = "APPRECIATION";
  const mainHeadingWidth = pdf.getTextWidth(mainHeading);
  const mainHeadingX = (pageWidth - mainHeadingWidth) / 2; // Calculate centered position
  pdf.text(mainHeading, mainHeadingX, 89); // Use calculated x position

  // Subheading Text
  pdf.setTextColor("#000000").setFontSize(12);
  pdf.setFont("Outfit-Medium", "normal");
  const subheading = "This certificate is awarded to";
  const subheadingWidth = pdf.getTextWidth(subheading);
  const subheadingX = (pageWidth - subheadingWidth) / 2; // Calculate centered position
  pdf.text(subheading, subheadingX, 98); // Use calculated x position

  // Name of Participant
  pdf.setTextColor("#40A578").setFontSize(20);
  pdf.setFont("Outfit-ExtraBold", "bold");
  const participantName = name.toString().toUpperCase();
  const nameWidth = pdf.getTextWidth(participantName);
  const nameX = (pageWidth - nameWidth) / 2; // Calculate centered position
  pdf.text(participantName, nameX, 110); // Use calculated x position

  // Certificate Body (break it into smaller parts)
  const bodyText = [
    "in recognition of the invaluable contribution towards our goal of",
    "planting 10 million trees by 2030. Your dedication and support play a",
    "vital role in the success of the Green India Mission, bringing us one",
    "step closer to a greener and more sustainable future.",
  ];

  pdf.setTextColor("black").setFontSize(12);
  pdf.setFont("Outfit-Medium", "normal");

  // Start Y position for the body text
  const startY = 119;

  // Center each line of the body text
  bodyText.forEach((line, index) => {
    const lineWidth = pdf.getTextWidth(line);
    const x = (pageWidth - lineWidth) / 2; // Calculate centered position
    pdf.text(line, x, startY + index * 5); // Use calculated x position
  });

  // Number fo Trees planted Section
  pdf.setTextColor("#40A578").setFontSize(20);
  pdf.setFont("Outfit-ExtraBold", "bold");
  const treesPlanted = `${treeCount} Trees Planted`;
  const totalText = treesPlanted.toString().toUpperCase();
  const treesWidth = pdf.getTextWidth(totalText);
  const treesX = (pageWidth - treesWidth) / 2; // Calculate centered position
  pdf.text(totalText, treesX, 146); // Use calculated x position

  // Thankyou section
  pdf.setTextColor("black").setFont("Outfit-Medium", "normal");
  pdf.setFontSize(12);
  const thankyouText =
    "Your generosity and commitment will help us grow foersts, contributing";
  const thankyouTextWidth = pdf.getTextWidth(thankyouText);
  const thankyouX = (pageWidth - thankyouTextWidth) / 2;
  pdf.text(thankyouText, thankyouX, 155);

  const thankyouText2 =
    "to the restoration and preservation of our environment.";
  const thankyouText2Wdith = pdf.getTextWidth(thankyouText2);
  const thankyouText2X = (pageWidth - thankyouText2Wdith) / 2;
  pdf.text(thankyouText2, thankyouText2X, 160);

  // Date Section
  pdf.setTextColor("#40A578").setFontSize(12);
  pdf.setFont("Outfit-ExtraBold", "bold");
  const dateText = date.toUpperCase();
  const dateTextWidth = pdf.getTextWidth(dateText);
  const dateX = (pageWidth - dateTextWidth) / 2;
  pdf.text(dateText, dateX, 169); // Use calculated x position

  // Unique Certificate Number Section
  pdf.setTextColor("black").setFontSize(12);
  pdf.setFont("Outfit-Medium", "normal");
  const idText = id.toUpperCase();
  const idTextWidth = pdf.getTextWidth(idText);
  const idX = (pageWidth - idTextWidth) / 2;
  pdf.text(idText, idX, 174); // Use calculated x position

  // Add Signatures Section
  const signatureStartY = 183; // Adjust this value to set the vertical position of the signatures

  // Dr. Meera Asmi's Signature and Information
  pdf.addImage(meeraSign, "PNG", 56, signatureStartY, 40, 10); // Adjust x, y, width, and height for the signature image
  pdf.setTextColor("black").setFont("Outfit-ExtraBold", "bold");
  pdf.setFontSize(12);
  pdf.text("Dr Meera Asmi", 67, signatureStartY + 14); // Adjust x, y for the name
  pdf.setFont("Outfit-Medium", "normal");
  pdf.setFontSize(10);
  pdf.text("Chairwoman", 76, signatureStartY + 18); // Title
  pdf.text("We Grow Forest Foundation", 52, signatureStartY + 22); // Organization

  // Vertical Divider
  pdf.setDrawColor("#9DDE8A"); // Light green color for the line
  pdf.setLineWidth(0.2);
  pdf.line(105, signatureStartY, 105, signatureStartY + 23); // Draw vertical line between the signatures

  // Dr. Merin Jacob's Signature and Information
  pdf.addImage(merinSign, "PNG", 114, signatureStartY, 40, 10); // Adjust x, y, width, and height for the signature image
  pdf.setTextColor("black").setFont("Outfit-ExtraBold", "bold");
  pdf.setFontSize(12);
  pdf.text("Dr Merin Jacob", 114, signatureStartY + 14); // Adjust x, y for the name
  pdf.setFont("Outfit-Medium", "normal");
  pdf.setFontSize(10);
  pdf.text("Managing Trustee", 114, signatureStartY + 18); // Title
  pdf.text("We Grow Forest Foundation", 114, signatureStartY + 22); // Organization

  // Logos and Links Section
  const logoStartY = 215; // Adjust this value to set the vertical position for the logos and links

  // College Logo and Link
  pdf.addImage(collegeLogo, "PNG", 30, logoStartY, 24, 22); // College logo (x, y, width, height)
  pdf.setFontSize(9).setFont("Outfit-Medium", "normal");
  pdf
    .setTextColor("black")
    .textWithLink("www.wegrowforest.college", 24, logoStartY + 26, {
      url: "https://www.wegrowforest.college",
    });

  // Carbon Zero Logo and Link
  pdf.addImage(carbonZero, "PNG", 70, logoStartY, 50, 22); // Carbon Zero logo (x, y, width, height)
  pdf.setFontSize(9);
  pdf
    .setTextColor("black")
    .textWithLink("www.carbonzero.day", 80, logoStartY + 26, {
      url: "https://www.carbonzero.day",
    });

  // Clean Shore Logo and Link
  pdf.addImage(cleanShore, "PNG", 128, logoStartY, 24, 22); // Clean Shore logo (x, y, width, height)
  pdf.setFontSize(9);
  pdf
    .setTextColor("black")
    .textWithLink("www.seaofchange.in", 125, logoStartY + 26, {
      url: "https://seaofchange.in",
    });

  // ENGO Logo and Link
  pdf.addImage(engo, "PNG", 165, logoStartY, 17, 22); // ENGO logo (x, y, width, height)
  pdf.setFontSize(9);
  pdf
    .setTextColor("black")
    .textWithLink("www.engoi.org", 163, logoStartY + 26, {
      url: "https://www.engoi.org",
    });

  // Centered QR Code and Link Section
  const qrStartY = 249; // Adjust this value to set the vertical position for the QR code and link
  const qrWidth = 22;
  const qrHeight = 22;

  // Calculate x-coordinate to center the QR code
  const qrX = (pageWidth - qrWidth) / 2;

  // QR Code (centered)
  pdf.addImage(qr, "PNG", qrX, qrStartY, qrWidth, qrHeight);

  // Link below the QR Code (centered)
  const linkText = "www.wegrowforest.org";
  const linkWidth = pdf.getTextWidth(linkText);
  const linkX = (pageWidth - linkWidth) / 2; // Calculate centered position
  pdf.setTextColor("#40A478").setFontSize(9);
  pdf.textWithLink(linkText, linkX, qrStartY + qrHeight + 5, {
    url: "https://www.wegrowforest.org",
  });

  // Save the PDF
  pdf.save("certificate.pdf");
};
