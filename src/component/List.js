import React from "react";

const List = () => {
  const data = [
    {
      name: "first",
    },
    {
      name: "sec",
    },
    {
      name: "third",
    },
  ];
  //   const itemlist = data.map((item, i) => <p>{item.name}</p>);
  return (
    <div>
      {/* {itemlist} */}
      hola
      {data.map((item, i) => (
        <p>{item.name}</p>
      ))}
      {/* {data}  */}
    </div>
  );
};

export default List;
