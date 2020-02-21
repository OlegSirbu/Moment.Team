const getTextUser = ({
  accNum,
  category,
  vatPercentage,
  vatCatCode,
  accName,
  exRevClass,
  exTaxCode,
  comment
}) => {
  return `${accNum} - ${category} - ${vatPercentage &&
    vatPercentage + "%"} ${vatCatCode} ${accName && "-" + accName} ${comment &&
    comment + ","} ${exRevClass && exRevClass + ","} ${exTaxCode &&
    exTaxCode + ","}`;
};

// get max value by id and add +1
// input: [{id: 1}, {id: 2}]
// ex: 3
// return number 3

const getNextId = (users = []) =>
  Math.max.apply(
    Math,
    users.filter(u => u.id).map(a => a.id && a.id)
  ) + 1;

// sorted array of users by accNum
// return array
// input: [3,1,2];
// ex: [1,2,3];

const sortUsersByAccNumber = (users = []) =>
  users.sort((a, b) => a.accNum - b.accNum);

export { getTextUser as getTextByItemForRow, getNextId, sortUsersByAccNumber };
