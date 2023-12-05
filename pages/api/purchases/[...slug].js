import { calculatePurchaseTotals } from "@/logic/adapters/adaptAmountAndPointsForTotals";
import { getPurchasesByUserId } from "@/firebase/database";

export default async function handler(req, res) {
  const result = await getPurchasesByUserId(req.query.slug);
  res.status(200).json({ result });
}
