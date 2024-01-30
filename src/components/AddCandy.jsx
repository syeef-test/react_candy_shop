import React from "react";

function AddCandy() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      id: Math.random() + `${formData.get("candy_name")}`,
      candy_name: formData.get("candy_name"),
      desc: formData.get("desc"),
      price: formData.get("price"),
    };
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="candy_name"
          id="candy_name"
          placeholder="Enter candy name here"
        />
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Enter candy description"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Enter candy price here"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddCandy;
