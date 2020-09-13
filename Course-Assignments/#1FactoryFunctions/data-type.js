const DataType = (options) => {
  const dataType = {
    type: options.type,
    unit: options.unit,
  };

  dataType.getType = () => dataType.type;
  dataType.getUnit = () => dataType.unit;

  return dataType;
};

export default DataType;

// Verification

// let dateType1 = DataType({type:"Length", unit:"cm"});

// console.log(dateType1.getType() + " " + dateType1.getUnit());
