import React from "react";

const Select = (props) => {
  return (
    <select
      name={props.name}
      placeholder={props.placeHolder}
      onChange={props.onChange}
    >
      {props.items.map((item, index) => {
        return (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
