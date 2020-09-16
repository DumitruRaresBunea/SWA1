const DataType = (options) => {
  const getType = () => options.type;
  const getUnit = () => options.unit;

  const setType = (newType) => (options.type = newType);
  const setUnit = (newunit) => (options.unit = newunit);

  return { getType, getUnit, setType, setUnit };
};

export default DataType;

// Verification

// let dateType1 = DataType({ type: "Length", unit: "cm" });

// console.log(dateType1.getType() + " " + dateType1.getUnit());

// dateType1.setType("Speed");
// dateType1.setUnit("kmh");

// console.log(dateType1.getType() + " " + dateType1.getUnit());
