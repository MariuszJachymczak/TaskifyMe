import { InsertOneResult, Document } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async function handler(
  req: { query: any },
  res: { json: (arg0: InsertOneResult<Document>) => void }
) {
  const client = await clientPromise;
  const db = client.db("TaskifyMe");
  const data = req.query;
  const response = await db.collection("tasks").insertOne(data);
  res.json(response);
}
