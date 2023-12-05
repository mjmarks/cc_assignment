import { usePurchasesByUserId } from "@/logic/hooks/data/usePurchasesByUserId";
import { Spinner } from "@nextui-org/react";
import { useParams } from "next/navigation";

export default function Purchases() {
  const { slug } = useParams();

  const { purchases, totals, isLoading } = usePurchasesByUserId(slug[0]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col w-screen">
      <div className="text-black w-screen">
        <h2 className="underline">
          USER <span className="font-bold">{slug[0]}</span> TOTALS:
        </h2>
        {Object.entries(totals).map(([key, val]) => (
          <div key={key} className="bg-slate-200 mt-2 w-40">
            <span className="font-bold uppercase">{key}:</span> {val}
          </div>
        ))}
      </div>
      {purchases.map((purchase) => (
        <div
          key={purchase.purchaseId}
          className="flex flex-row mt-2 text-black w-screen"
        >
          <div className="border-t border-black border-solid bg-slate-200 p-2 w-40">
            Date: {purchase.date}
          </div>
          <div className="border-t border-black border-solid bg-slate-400 p-2 w-32">
            Amount: ${purchase.amount}
          </div>
          <div className="border-t border-black border-solid bg-slate-300 p-2 w-32">
            Points: {purchase.points}
          </div>
        </div>
      ))}
    </div>
  );
}
