import bg from "../../assets/Background.svg"; // Reuse the background

const PageLayout = ({ children }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundPosition: "10% 50%" }}
      className="bg-cover bg-left min-h-screen min-w-fit flex items-center justify-around flex-col lg:flex-row pt-10 pb-10"
    >
      <div>
        <h1 className="text-white text-4xl lg:text-7xl sm:text-5xl whitespace-pre-line outfit-extrabold ml-7">
          A Tree Today{"\n"}A Forest Tomorrow{"\n"}We Grow Forest
        </h1>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PageLayout;
