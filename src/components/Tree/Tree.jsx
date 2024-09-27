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
      className={`bg-white p-4 flex flex-col items-center justify-center w-32 rounded-3xl hover:bg-div-hover-bg cursor-pointer ${
        isSelected && "bg-div-hover-bg border-2 border-red-900"
      }`}
      onClick={clickEvent}
    >
      <img src={tree} alt="" className="h-12 mb-2" />
      <p className="text-black outfit-extrabold text-center text-xl mb-2">
        {treeCount !== "other" ? treeCount + " Trees" : "Other"}
      </p>
      {treeCount !== "other" ? (
        <p className="bg-button-bg rounded-3xl text-center w-20">
          ₹{treeCount * 110}
        </p>
      ) : (
        <input
          type="number"
          className="bg-button-bg rounded-3xl text-center w-20 placeholder-white outline-none focus:ring-2 focus:ring-button-bg"
          placeholder="101"
          onChange={onInputChange}
          value={customValue}
        />
      )}
    </div>
  );
};

export default Tree;
