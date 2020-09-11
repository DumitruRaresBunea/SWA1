const TextValue = (text) => {
  const textValue = {
    text,
  };

  textValue.value = () => textValue.text;

  return textValue;
};
