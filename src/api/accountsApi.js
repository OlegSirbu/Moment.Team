const accounts = [
  {
    id: 1,
    accNum: 123,
    category: "Sales",
    vatPercentage: 12,
    vatCatCode: 22,
    accName: " My super user name 111",
    exRevClass: "exRevClass 1",
    exTaxCode: "exTaxCode code 1",
    comment: "comment comment 111"
  },
  {
    id: 2,
    accNum: 21,
    category: "Purchases",
    vatPercentage: 12,
    vatCatCode: 10,
    accName: " My super user name 222",
    exRevClass: "exRevClass text 222",
    exTaxCode: "exTaxCode code 222",
    comment: "comment comment 222"
  },
  {
    id: 3,
    accNum: 555,
    category: "Sales",
    vatPercentage: 44,
    vatCatCode: 60,
    accName: " My super user name 333",
    exRevClass: "exRevClass text 333",
    exTaxCode: "exTaxCode code 333",
    comment: "comment comment comment 333"
  }
];

const getAllAccounts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Object.assign([], accounts));
    }, 1500);
  });
};

export default getAllAccounts;
