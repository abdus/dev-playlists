/**
 *
 * GET a playlist by ID
 */

import { db as dbConnection } from "../_db";

export default async (req, res) => {
  dbConnection();
  res.statusCode = 200;
  res.json({ db: "connected" });
};
