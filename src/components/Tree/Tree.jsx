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
      className={`p-4 flex flex-col items-center justify-center w-20 xs:w-32 rounded-3xl hover:bg-div-hover-bg cursor-pointer ${
        isSelected ? "bg-div-hover-bg border-2 border-green-500" : "bg-white"
      }`}
      onClick={clickEvent}
    >
      <img src={tree} alt="" className="xs:h-12 xs:mb-2 h-8" />
      <p className="text-black outfit-extrabold text-center text-xs xs:text-xl mb-2">
        {treeCount !== "other" ? treeCount + " Trees" : "Other"}
      </p>
      {treeCount !== "other" ? (
        <p className="bg-button-bg rounded-3xl text-center xs:w-20 w-16">
          ₹{treeCount * 110}
        </p>
      ) : (
        <input
          type="number"
          className="bg-button-bg rounded-3xl text-center w-16 xs:w-20 placeholder-white outline-none focus:ring-2 focus:ring-button-bg"
          placeholder="101"
          onChange={onInputChange}
          value={customValue}
        />
      )}
    </div>
  );
};

export default Tree;
