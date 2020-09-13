export const DataType = (options) => {
  const dataType = {
    type: options.type,
    unit: options.unit,
  };

  dataType.getType = () => dataType.type;
  dataType.getUnit = () => dataType.unit;

  return dataType;
};

// Verification

// let dateType1 = DataType({type:"Length", unit:"cm"});

// console.log(dateType1.getType() + " " + dateType1.getUnit());
