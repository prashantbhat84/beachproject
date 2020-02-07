import React, { useContext } from "react";
import { RoomContext } from "./context";
import Title from "./Title/Title";

//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext); // context using hooks
  const {
    handlechange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;
  //get unique types;
  let types = getUnique(rooms, "type");
  //get all;
  types = ["all", ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  //get unique capacity
  let people = getUnique(rooms, "capacity");
  //map to jsx
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        {/* select type*/}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handlechange}
          >
            {types}
          </select>
        </div>
        {/*end of select type */}
        {/*start  of guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handlechange}
          >
            {people}
          </select>
        </div>
        {/*end of select guests */}
        {/*start of price range */}
        <div className="form-group">
          <label htmlFor="price">Price Rs{price}/-</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handlechange}
            className="form-control"
          />
        </div>
        {/*end of price range */}
        {/*start of room size */}
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handlechange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handlechange}
              className="size-input"
            />
          </div>
        </div>
        {/*end of room size */}
        {/*extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              checked={breakfast}
              onChange={handlechange}
              id="breakfast"
              className=""
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handlechange}
              id="pets"
              className=""
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
        {/*extras */}
      </form>
    </section>
  );
};

export default RoomsFilter;
