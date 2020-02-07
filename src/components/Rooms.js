import React from "react";
import Hero from "./Hero/Hero";
import Banner from "./Banner/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "./RoomContainer";

export default function Rooms() {
  return (
    <>
      {" "}
      {/*  the new way of defining frgments*/}
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/BeachResort" className="btn-primary">
            Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
}
