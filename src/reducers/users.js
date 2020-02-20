import { ADD_NEW_USER, CHANGE_USER, DELETE_USER } from "../actions/users";
const initialState = {
  users: [
    {
      id: 1,
      accNum: 123,
      category: "Sales",
      vatPer: 12,
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
      vatPer: 12,
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
      vatPer: 44,
      vatCatCode: 60,
      accName: " My super user name 333",
      exRevClass: "exRevClass text 333",
      exTaxCode: "exTaxCode code 333",
      comment: "comment comment comment 333"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state
      };
    case CHANGE_USER:
      return {
        ...state
      };
    case DELETE_USER:
      return {
        ...state
      };
    default:
      return state;
  }
};
