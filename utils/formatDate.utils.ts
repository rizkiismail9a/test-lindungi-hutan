const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);

  const formattedDate = date.toLocaleDateString("en-GB", {
    weekday: "short", // long, short, narrow
    year: "numeric", // numeric, 2-digit
    month: "long", // numeric, 2-digit, long, short, narrow
    day: "2-digit", // numeric, 2-digit
    // hour: "numeric", // numeric, 2-digit
    // minute: "numeric", // numeric, 2-digit
    // second: "numeric", // numeric, 2-digit
    // timeZoneName: "short", // short, long
  });

  return formattedDate;
};

export default formatDate;
