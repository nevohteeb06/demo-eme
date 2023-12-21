const development = false;
export const URL = {
  dev: "http://localhost:5000",
  prod: "https://bhrms-demo.onrender.com",
  use: development ? "http://localhost:5000" : "https://bhrms-demo.onrender.com",
};

export const USER_REQUESTS_TYPE = {
  BONUS: "bonus",
  PAYROLL: "payroll",
  LEAVE: "leave",
};

export const TodoItemStatus = {
  TODO : "Todo",
  DOING: "Doing",
  DONE: "Done"
}
