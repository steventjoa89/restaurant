export const convertAmountNumberToCurrencyString = (number) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2, // Optional: Control the number of decimal places
  });

  return formatter.format(number);
};
