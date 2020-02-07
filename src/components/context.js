import React, { Component, createContext } from "react";
import items from "../data";
import client from "../Contentful";
// client
//   .getEntries()
//   .then(res => {
//     // console.log(res.items);
//     // res.items.map(item => {
//     //   console.log(item.images);
//     // });
//     // console.log(res.items[0].fields.images[0].fields.file.url);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const RoomContext = createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredrooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };
  //getData
  getData = async () => {
    try {
      let response = await client.getEntries({
        content_type: "beachResortRoom"
      });

      let rooms = this.formatData(items); //items for local data
      console.log(rooms);
      let featuredrooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));
      this.setState({
        rooms,
        featuredrooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        size: maxSize,
        maxPrice,
        maxSize
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }
  formatData(items) {
    let tempItems = items.map((item, index) => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => {
        return image.fields.file.url;
      });

      let room = {
        ...item.fields,
        images: images,
        id
      };

      return room;
    });

    return tempItems;
  }
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value
      },
      this.filterrooms
    );
  };
  filterrooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      minPrice,
      maxPrice,
      breakfast,
      pets
    } = this.state;
    //all the rooms
    let tempRooms = [...rooms];
    //transform values
    capacity = parseInt(capacity);
    //filter roooms by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    //filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity === capacity);
    }
    //filterby price
    price = parseInt(price);

    tempRooms = tempRooms.filter(room => room.price <= price);
    // filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    //change state
    this.setState({ sortedRooms: tempRooms });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handlechange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  //hoC for functional components
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
export { RoomProvider, RoomConsumer, RoomContext };
