export const Event = (time, place) => {
  const event = {
    time,
    place,
  };

  event.getTime = () => time;
  event.getPlace = () => place;

  return event;
};

// Verification

// let date = new Date(2016, 2, 3);

// let event = Event(date, "this place");

// console.log(event.getTime());
// console.log(event.getPlace());
