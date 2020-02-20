const getTextByItemForRow = ({
  accNum,
  category,
  vatPer,
  vatCatCode,
  accName,
  exRevClass,
  exTaxCode,
  comment
}) => {
  return `${accNum} - ${category} - ${vatPer}% ${accName} ${comment}`;
};

export { getTextByItemForRow };
