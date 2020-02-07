import React, { useContext } from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
// import { withRoomConsumer } from "./context";
import Loading from "./loading/Loading";
import { RoomContext } from "./context";

const RoomContainer = () => {
  const context = useContext(RoomContext);
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
};

export default RoomContainer;

// import React from "react";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// import { RoomConsumer } from "./context";
// import Loading from "./loading/Loading";

// const RoomContainer = () => {
//   return (
//     <RoomConsumer>
//       {/*value is a function. This pattern was used before hooks*/}
//       {value => {
//         const { rooms, loading, sortedRooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello from Rooms Container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomContainer;
