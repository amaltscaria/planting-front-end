import "./LoginPage.css";
import bg from "../../assets/Background.svg";
import { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({});
  const hanldeSubmit = () => {};
  const handleChange = () => {};
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center min-h-screen min-w-fit"
    >
      <div className="flex justify-around items-center pt-44">
        <div>
        <h1 className="text-white text-7xl whitespace-pre-line">A Tree Today{"\n"}A Forest Tomorrow{"\n"}We Grow Forest</h1>
        </div>
      
        <form
          onSubmit={hanldeSubmit}
          className="bg-custom-green p-10 rounded-4xl shadow-lg border-transparent w-[433px]"
        >
          <h2 className="mb-4 text-white sm:text-base text-sm font-outfit">
            We proudly acknowledge your commitment to the well-being of Planet
            Earth.
          </h2>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              className="w-full p-1 sm:p-2 border-2 font-outfit text-white border-white rounded-4xl bg-black placeholder-white "
              placeholder="Name*"
              value={formData.name}
              name="name"
              onChange={handleChange}
            />
            <p className="text-red-600 font-outfitn md:text-base text-xs">
              {/* {errors.name && (
                  <p className="text-red-600 font-outfit md:text-base text-xs">
                    {errors.name}
                  </p>
                )} */}
            </p>
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-1 sm:p-2  border-2 font-outfit text-white border-white rounded-4xl bg-black placeholder-white "
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
            />
            <p className="text-red-600 font-outfit md:text-base text-xs">
              {/* {errors.email && (
                  <p className="text-red-600 font-outfit md:text-base text-xs">
                    {errors.email}
                  </p>
                )} */}
            </p>
          </div>
          <div className="mb-4">
            <input
              type="number"
              name="number"
              id="mobile"
              className="w-full p-1 sm:p-2  border-2 font-outfit text-white border-white rounded-4xl bg-black placeholder-white "
              placeholder="Mobile Number*"
              value={formData.number}
              onChange={handleChange}
            />
            <p className="text-red-600 font-outfit md:text-base text-xs">
              {/* {errors.number && (
                  <p className="text-red-600 font-outfit md:text-base text-xs">
                    {errors.number}
                  </p>
                )} */}
            </p>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="country"
              id="country"
              className="w-full p-1 sm:p-2  border-2 font-outfit text-white border-white rounded-4xl bg-black placeholder-white "
              placeholder="Country*"
              value={formData.country}
              onChange={handleChange}
            />
            <p className="text-red-600 font-outfit md:text-base text-xs">
              {/* {errors.country && (
                  <p className="text-red-600 font-outfit md:text-base text-xs">
                    {errors.country}
                  </p>
                )} */}
            </p>
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="address"
              name="address"
              className="w-full p-1 sm:p-2  border-2 font-outfit text-white border-white rounded-4xl bg-black placeholder-white "
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full border-2 border-custom-blue font-outfit text-white py-2 rounded-4xl"
          >
            Get Certificate Now!
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
