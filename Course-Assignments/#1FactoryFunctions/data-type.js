export const DataType = (type, unit) => {
  const dataType = {
    type,
    unit,
  };

  dataType.getType = () => type;
  dataType.getUnit = () => unit;

  return dataType;
};

// Verification

// dateType1 = DataType("Length", "cm");
// dateType2 = DataType("Temperature", "degrees celsius");

// console.log(dateType1.getType() + " " + dateType1.getUnit());
// console.log(dateType2.getType() + " " + dateType2.getUnit());
