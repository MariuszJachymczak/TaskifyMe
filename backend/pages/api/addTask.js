import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("TaskifyMe");
  const data = req.query;
  const response = await db.collection("tasks").insertOne(data);
  res.json(response);
}
