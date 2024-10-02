import tree from "../../assets/tree.svg";

const Tree = ({
  treeCount,
  isSelected,
  clickEvent,
  customValue,
  onInputChange,
}) => {
  return (
    <div
      className={`p-4 flex flex-col items-center justify-center w-20 xs:w-32  rounded-3xl hover:bg-div-hover-bg cursor-pointer ${
        isSelected
          ? "bg-div-hover-bg border-2 border-green-500"
          : "bg-white border-white border-2"
      }`}
      onClick={clickEvent}
    >
      <img src={tree} alt="" className="xs:h-12 xs:mb-2 h-8" />
      {treeCount !== "other" ? (
        <p className="text-black outfit-extrabold text-center text-xs xs:text-xl mb-2">
          {treeCount} Trees
        </p>
      ) : (
        <div className="flex">
          <input
            type="number"
            className="custom-input bg-white px-1 text-black rounded-3xl mb-3 mt-1 text-center w-8 xs:w-12 text-lg placeholder-black outline-none outfit-extrabold"
            placeholder="101"
            onChange={onInputChange}
            value={customValue}
          />
          <p className="text-black outfit-extrabold text-center text-xs xs:text-xl mt-0.5">
            Trees
          </p>
        </div>
      )}

      <p className="bg-button-bg rounded-3xl text-center xs:w-24 w-16">
        {treeCount === "other"
          ? "₹" + customValue * 110
          : "₹" + treeCount * 110}
      </p>
    </div>
  );
};

export default Tree;
