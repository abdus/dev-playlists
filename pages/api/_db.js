import mongoose from "mongoose";

const db = mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const playlistSchema = new mongoose.Schema({});
const Playlist = mongoose.model("Playlist", playlistSchema);

export { Playlist, db };
