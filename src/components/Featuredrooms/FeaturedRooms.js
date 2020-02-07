import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "../loading/Loading";
import Room from "../Room/Room";
import Title from "../Title/Title";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    // const { rooms } = this.context;
    // console.log(rooms[0]);
    let { loading, featuredrooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
