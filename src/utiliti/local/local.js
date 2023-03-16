const Local = (item) => {
  if (!item) return null;
  JSON.parse(localStorage.getItem(item));
};

export default Local;
