import React from "react";

const Radio = ({ register, input, choice }) => {
  return (
    <>
      <div className="input-container">
        <input
          className="radio-button"
          {...register(`${input}`)}
          type="radio"
          id={choice}
          value={choice}
        />
        <div className="radio-tile">
          <p className="radio-tile-label">{choice}</p>
        </div>
      </div>
    </>
  );
};

export default Radio;
