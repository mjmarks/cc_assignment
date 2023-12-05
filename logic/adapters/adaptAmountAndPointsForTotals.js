function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", { month: "long" });
}

export function adaptAmountsAndPointsForTotals(data) {
  const purchases = data?.result?.amountsAndPoints;
  const totals = purchases?.reduce(
    (acc, curr) => {
      acc.amount += curr.amount;

      const month = getMonthName(curr.date.split("/")[1]);
      acc[month] = (acc[month] || 0) + curr.points;
      acc.points += curr.points;

      return acc;
    },
    { amount: 0, points: 0 }
  );

  return {
    purchases,
    totals,
  };
}
