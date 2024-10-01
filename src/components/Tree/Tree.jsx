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
      {treeCount !== "other" ? (
        <p className="text-black outfit-extrabold text-center text-xs xs:text-xl mb-2">
          {treeCount} Trees
        </p>
      ) : (
        <input
          type="number"
          className="bg-white border-2 border-black text-black rounded-3xl mb-3 mt-1 text-center w-16 xs:w-20 placeholder-gray-200 outline-none focus:ring-2 focus:ring-black"
          placeholder="101"
          onChange={onInputChange}
          value={customValue}
        />
      )}

      <p className="bg-button-bg rounded-3xl text-center xs:w-20 w-16">
        {treeCount === 'other' ? customValue : '₹'+treeCount * 110}
      </p>
    </div>
  );
};

export default Tree;
