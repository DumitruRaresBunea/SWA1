const Event = (options) => {
  const getTime = () => options.time;
  const getPlace = () => options.place;

  const setTime = (newTime) => (options.time = newTime);
  const setPlace = (newPlace) => (options.place = newPlace);

  return { getTime, getPlace, setTime, setPlace };
};
export default Event;

// Verification

// let date = new Date(2016, 2, 3);

// let event = Event({ time: date, place: "this place" });

// console.log(event.getTime());
// console.log(event.getPlace());

// event.setTime(new Date(2011, 3, 5));
// event.setPlace("another place");

// console.log(event.getTime());
// console.log(event.getPlace());
