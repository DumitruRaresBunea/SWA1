export const DateInterval = (startDate, endDate) => {
  const dateInterval = {
    startDate,
    endDate,
  };

  dateInterval.from = () => startDate;
  dateInterval.to = () => endDate;

  dateInterval.contains = (date) => date > startDate && date < endDate;

  return dateInterval;
};

//Verification

// startdate1 = new Date(2014, 2, 3);
// startdate2 = new Date(2015, 4, 6);
// enddate1 = new Date(2020, 4, 8);
// enddate2 = new Date(2020, 1, 8);
// date1 = new Date(2016, 2, 3);
// date2 = new Date(2021, 2, 3);

// console.log(startdate1);
// console.log(startdate2);
// console.log(enddate1);
// console.log(enddate2);
// console.log(date1);
// console.log(date2);

// dateInterval1 = DateInterval(startdate1, enddate1)
// dateInterval2 = DateInterval(startdate2, enddate2)

// console.log(dateInterval1)
// console.log(dateInterval2)

// console.log(dateInterval1.contains(date1))
// console.log(dateInterval1.contains(date2))

// console.log(dateInterval2.contains(date1))
// console.log(dateInterval2.contains(date2))
