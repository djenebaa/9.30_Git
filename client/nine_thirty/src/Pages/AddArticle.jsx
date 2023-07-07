import React, { useEffect, useState } from "react";

export default function AddArticle() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [deep, setDeep] = useState("");
  const [error, setError] = useState(false);
  const [picture, setPicture] = useState("");
  const [file, setFile] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleMaterial = (e) => {
    setMaterial(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
    console.log(price);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
    console.log(quantity);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
    console.log(height);
  };

  const handleWidth = (e) => {
    setWidth(e.target.value);
    console.log(width);
  };

  const handleDeep = (e) => {
    setDeep(e.target.value);
    console.log(deep);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const seller = localStorage.getItem("userId");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("type", type);
    formData.append("color", color);
    formData.append("material", material);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("height", height);
    formData.append("width", width);
    formData.append("deep", deep);
    formData.append("seller", seller);
 

    if (file) {
      const pictureFile = new File([file], file.name); // Create a File object
      formData.append("picture", pictureFile);
    }
    if (
      !title ||
      !type ||
      !color ||
      !material ||
      !description ||
      !price ||
      !quantity ||
      !height ||
      !width ||
      !deep
    ) {
      alert("You must fill all the inputs");
    } else {

    fetch("http://localhost:8000/furnitures/articles", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(true);
        } else {
          setError(false);
          alert(data.message);
        }
      })
      .catch((error) => console.log(error));
  }}

  return (
    <div className="flex w-auto h-full flex-1 flex-col justify-center px-6 py-10 lg:px-8  bg-slate-100/90 border rounded-lg">
      <h2 className="pb-2 m-auto text-xl font-medium leading-6 text-gray-900">
        Add a new article
      </h2>
      <div>
        <form
          className="flex flex-col space-y-6 items-center"
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label>
                Title :
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  type="text"
                  name="title"
                  placeholder="..."
                  value={title}
                  onChange={handleTitle}
                />
              </label>
              <label>
                Type :
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  type="text"
                  name="type"
                  placeholder="..."
                  value={type}
                  onChange={handleType}
                />
              </label>
              <label>
                Color :
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  type="text"
                  name="color"
                  placeholder="..."
                  value={color}
                  onChange={handleColor}
                />
              </label>
              <label>
                Material :
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  type="text"
                  name="material"
                  placeholder="..."
                  value={material}
                  onChange={handleMaterial}
                />
              </label>
              <label>
                Description :
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  type="text"
                  name="description"
                  placeholder="..."
                  value={description}
                  onChange={handleDescription}
                />
              </label>
            </div>
            <div>
              <label>
                Price :
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  type="number"
                  name="price"
                  placeholder="..."
                  value={price}
                  onChange={handlePrice}
                />
              </label>
              <label>
                Quantity :
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  type="number"
                  name="quantity"
                  placeholder="..."
                  value={quantity}
                  onChange={handleQuantity}
                />
              </label>
              <label>
                Height :
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  type="number"
                  name="height"
                  placeholder="..."
                  value={height}
                  onChange={handleHeight}
                />
              </label>
              <label>
                Width :
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  type="number"
                  name="width"
                  placeholder="..."
                  value={width}
                  onChange={handleWidth}
                />
              </label>
              <label>
                Deep :
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  type="number"
                  name="deep"
                  placeholder="..."
                  value={deep}
                  onChange={handleDeep}
                />
              </label>
            </div>
          </div>
          <label>
            Picture :
            <input
              className="block w-full rounded-md border-0 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
              type="file"
              name="picture"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setPicture(file.name);
                  setFile(file)
                }
              }}
              accept="image/*"
            />
            <button
              onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-[#2E2E68] px-3 py-2 my-6 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create
            </button>
          </label>
        </form>
      </div>
    </div>
  );
}
