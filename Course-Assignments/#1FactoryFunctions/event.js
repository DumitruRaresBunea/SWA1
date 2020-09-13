export const Event = (options) => {
  const event = {
    time: options.time,
    place: options.place,
  };

  event.getTime = () => event.time;
  event.getPlace = () => event.place;

  return event;
};

// Verification

// let date = new Date(2016, 2, 3);

// let event = Event({ time: date, place: "this place" });

// console.log(event.getTime());
// console.log(event.getPlace());
