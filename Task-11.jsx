import React, { CSSProperties, FunctionComponent, useState } from "react";

interface VasyaProps {
  style?: CSSProperties;
}

const Vasya: FunctionComponent<VasyaProps> = ({
  style = { border: "1px solid gray" },
}) => {
  const [inputValue, setInputValue] = useState < string > "";

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <>
      <div className="vasya" style={style}>
        <label htmlFor="name">Enter your name: </label>
        <input
          type="text"
          id="name"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <p>Some text here</p>
    </>
  );
};

export default Vasya;
