import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["Yaounde", "Buea", "Douala", "Nkongsamba"];
  items.map((item) => <li>{item}</li>);

  let selectedIndex = 0;
  // let selectedIndex1 = 0;

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  // 1
  // Hook
  const [selectedIndex1, setSelectedIndex1] = useState(-1);

  return (
    // fragment <>
    <>
      <h1>List0</h1>
      {/* <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul> */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log("clicked: " + item + " " + index)}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
      {/* Managing state */}
      <h1>List1</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex1 === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log("clicked: " + item + " " + index)}
            onClick={() => setSelectedIndex1(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      {/* Passing Data via Props */}
    </>
  );
}

export default ListGroup;
