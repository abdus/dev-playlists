/**
 *
 * GET a playlist by ID
 */

import databaseConnection from "../_db";

export default async (req, res) => {
  await databaseConnection;
  res.statusCode = 200;
  res.json({ working: true });
};
