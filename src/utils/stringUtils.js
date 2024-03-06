export const convertAmountNumberToCurrencyString = (number) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2, // Optional: Control the number of decimal places
  });

  return formatter.format(number);
};

export const formatTabName = (tabName) => {
  return tabName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
