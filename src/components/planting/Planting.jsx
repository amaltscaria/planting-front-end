import PageLayout from "../Layout/PageLayout";
import { UserContext } from "../../../store/UserContext.jsx";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tree from "../Tree/Tree";
import { handlePayment } from "../../../utils/payment";

const Planting = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [selectedTreeCount, setSelectedTreeCount] = useState(null);
  const [customTreeCount, setCustomTreeCount] = useState(101);
  const [errors, setError] = useState({});
  const [paymentStatus, setPaymentStatus] = useState(false);
  useEffect(() => {
    if (!user.name) {
      navigate("/");
    }
  }, [user, navigate]);
  const handleInputChange = (e) => {
    const { value } = e.target;
    setCustomTreeCount(value);
  };

  const hanldeTreeSelection = (count) => {
    setSelectedTreeCount(count);
    setError({});
  };

  const handlePlantTrees = async () => {
    // navigate('/certificate');
    // return;
    if (selectedTreeCount === null) {
      setError({ error: "Please select the desired option!!!" });
      return;
    } else {
      setError({});
      if (selectedTreeCount === "other") {
        if (+customTreeCount < 101 || +customTreeCount > 100000) {
          setError({ error: "Please Select a value between 101 and 100000" });
          return;
        } else {
          setError({});
        }
      }
    }
    const finalTreeCount =
      selectedTreeCount === "other" ? +customTreeCount : +selectedTreeCount;
    const rzp1 = await handlePayment(
      finalTreeCount,
      user.name,
      user.email,
      user.number,
      user.address,
      setPaymentStatus
    );
    rzp1.open();
  };

  // useEffect to navigate to certificate once paymentStatus is updated
  useEffect(() => {
    if (paymentStatus) {
      navigate("/certificate");
    }
  }, [paymentStatus, navigate ]); // this effect triggers when paymentStatus changes
  return (
    <PageLayout>
      <div className="text-white">
        <p className="text-center mb-6">How many trees do you want to plant?</p>
        <div className="mb-6">
          <div className="grid grid-cols-2 xs:ml-0 ml-8 gap-5 round mb-6 md:grid-cols-3">
            <Tree
              treeCount={5}
              isSelected={selectedTreeCount === 5}
              clickEvent={() => hanldeTreeSelection(5)}
            ></Tree>
            <Tree
              treeCount={10}
              isSelected={selectedTreeCount === 10}
              clickEvent={() => hanldeTreeSelection(10)}
            ></Tree>
            <Tree
              treeCount={25}
              isSelected={selectedTreeCount === 25}
              clickEvent={() => hanldeTreeSelection(25)}
            ></Tree>

            <Tree
              treeCount={50}
              isSelected={selectedTreeCount === 50}
              clickEvent={() => hanldeTreeSelection(50)}
            ></Tree>
            <Tree
              treeCount={100}
              isSelected={selectedTreeCount === 100}
              clickEvent={() => hanldeTreeSelection(100)}
            ></Tree>
            <Tree
              treeCount={"other"}
              isSelected={selectedTreeCount === "other"}
              clickEvent={() => hanldeTreeSelection("other")}
              customValue={customTreeCount}
              onInputChange={handleInputChange}
            ></Tree>
          </div>
        </div>
        {errors.error && (
          <p className="text-red-500 font-outfit md:text-base text-xs text-center mb-6">
            {errors.error}
          </p>
        )}
        <button
          onClick={handlePlantTrees}
          className="bg-button-bg w-full rounded-3xl h-9 hover:bg-button-hover-bg"
        >
          Plant Trees Now!
        </button>
      </div>
    </PageLayout>
  );
};

export default Planting;
