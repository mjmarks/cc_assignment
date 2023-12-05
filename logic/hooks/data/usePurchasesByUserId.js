import { adaptAmountsAndPointsForTotals } from "@/logic/adapters/adaptAmountAndPointsForTotals";
import useSWR from "swr";

export function usePurchasesByUserId(id) {
  const { data, error, isLoading } = useSWR(`/api/purchases/${id}`, (url) =>
    fetch(url, { method: "GET" })
      .then((data) => data.body.getReader().read())
      .then((readData) => {
        const decoded = new TextDecoder().decode(readData.value, {
          stream: true,
        });

        return JSON.parse(decoded);
      })
  );

  const adaptedData = adaptAmountsAndPointsForTotals(data);

  return {
    error,
    isLoading,
    ...adaptedData,
  };
}
