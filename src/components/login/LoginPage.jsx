import { useContext, useState } from "react";
import { validateForm } from "../../../utils/formValidation";
import { useNavigate } from "react-router-dom";
import PageLayout from "../Layout/PageLayout";
import { UserContext } from "../../../store/UserContext.jsx";

const LoginPage = () => {
  const {setUser} = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    country: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = validateForm(formData);
    if (isValid) {
      setUser({name:formData.name, email:formData.email, number: formData.number, address:formData.address, country: formData.country});
      navigate("/plant-trees");
    } else {
      setErrors(errors);
    }
  };

  return (
    <PageLayout>
      <form
        onSubmit={hanldeSubmit}
        className="bg-custom-green p-6 rounded-4xl shadow-lg border-transparent w-[310px] sm:w-[400px] lg:w-[430px]"
      >
        <h2 className="mb-4 text-white sm:text-base text-sm outfit-medium" style={{lineHeight:'1.2rem'}}>
          Welcome to We Grow Forest Foundation's tree planting initiative for
          Green India Mission 2030.
        </h2>
        <div className="mb-2">
          <input
            type="text"
            id="name"
            className="w-full outline-none p-1 sm:p-2 border-2 outfit-medium text-black border-white rounded-4xl bg-white placeholder-gray-300"
            placeholder="Name*"
            value={formData.name}
            name="name"
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-600 outfit-medium md:text-base text-xs">
              {errors.name}
            </p>
          )}
        </div>
        <div className="mb-2">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full outline-none p-1 sm:p-2 border-2 outfit-medium text-black border-white rounded-4xl bg-white placeholder-gray-300"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-600 outfit-medium md:text-base text-xs">
              {errors.email}
            </p>
          )}
        </div>
        <div className="mb-2">
          <input
            type="number"
            name="number"
            id="mobile"
            className="w-full outline-none p-1 sm:p-2 border-2 outfit-medium text-black border-white rounded-4xl bg-white placeholder-gray-300"
            placeholder="Mobile Number*"
            value={formData.number}
            onChange={handleChange}
          />
          {errors.number && (
            <p className="text-red-600 outfit-medium md:text-base text-xs">
              {errors.number}
            </p>
          )}
        </div>
        <div className="mb-2">
          <input
            type="text"
            name="country"
            id="country"
            className="w-full outline-none p-1 sm:p-2 border-2 outfit-medium text-black border-white rounded-4xl bg-white placeholder-gray-300"
            placeholder="Country*"
            value={formData.country}
            onChange={handleChange}
          />
          {errors.country && (
            <p className="text-red-600 outfit-medium md:text-base text-xs">
              {errors.country}
            </p>
          )}
        </div>
        <div className="mb-2">
          <input
            type="text"
            id="address"
            name="address"
            className="w-full outline-none p-1 sm:p-2 border-2 outfit-medium text-black border-white rounded-4xl bg-white placeholder-gray-300"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full outline-none border-2 bg-button-bg hover:bg-white hover:text-button-hover-bg border-transparent outfit-medium text-white py-2 rounded-4xl"
        >
          Plant Trees Now!
        </button>
      </form>
    </PageLayout>
  );
};

export default LoginPage;
