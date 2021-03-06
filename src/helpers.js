// Convert time to hours and minutes
export const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};

// Convert a number to money formatting
export const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const isPersistedState = (stateName) => {
  //! podemos llamar al storage que queramos usar sessionStorage o localStorage
  const sessionState = sessionStorage.getItem(stateName);
  // ? debemos passar el archivo en formato JSON
  return sessionState && JSON.parse(sessionState);
};
