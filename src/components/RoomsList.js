import React from "react";
import Room from "./Room/Room";

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>No rooms available for the selected search criteria.</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item, index) => (
          <Room key={index} room={item} />
        ))}
      </div>
    </section>
  );
};

export default RoomsList;
