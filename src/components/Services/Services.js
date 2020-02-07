import React, { Component } from "react";
import Title from "../Title/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam?"
      },
      {
        icon: <FaHiking />,
        title: "unlimited hiking",
        info:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam?"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Pickup and Drop",
        info:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam?"
      },
      {
        icon: <FaBeer />,
        title: "excellent Beer",
        info:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam?"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
