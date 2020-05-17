import React from "react";

const ListGroup = (props) => {
  const {
    items,
    selectedGenre,
    onItemSelect,
    textProperty,
    valueProperty,
  } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            item === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
          style={{ cursor: "pointer" }}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
