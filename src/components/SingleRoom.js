import React, { Component, Fragment } from "react";
import defaultBcg from "../images/room-1.jpeg";

import Banner from "../components/Banner/Banner";
import { RoomContext } from "./context";

import { Link } from "react-router-dom";
import StyledHero from "./styledhero/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  componentDidMount() {
    // console.log(params);
  }
  static contextType = RoomContext;
  render() {
    let { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      price,
      size,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...image] = images;
    return (
      <Fragment>
        <StyledHero img={mainImg || defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back To Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {image.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h5>Price: Rs{price}/-</h5>
              <h5>Size: {size} SQFT</h5>
              <h5>
                Max Capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity}person`}
              </h5>
              <h5> {pets ? "Pets Allowed" : "No Pets Allowed"}</h5>
              <h5>{breakfast && "Free Breakfast Included"}</h5>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h3>Extras</h3>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>-{item}</li>;
            })}
          </ul>
        </section>
      </Fragment>
    );
  }
}
