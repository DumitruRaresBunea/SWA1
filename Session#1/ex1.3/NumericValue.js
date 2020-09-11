const NumericValue = (text, number) => {
  const numbericValue = {
    text,
    number,
  };

  numbericValue.value = () => numbericValue.text;

  numbericValue.unit = () => numbericValue.number;

  return numbericValue;
};
