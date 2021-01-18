import mongoose from "mongoose";

let db; // store a chached connection string

if (!db) {
  db = mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}

// playlist schema
const playlistSchema = new mongoose.Schema({
  spotify_id: { type: String, unique: true, required: true },
  name: { type: String, required: true, unique: false },
  tracks: [{ type: String }], // store `_id` of the track from 'Track' model
  owner: { type: mongoose.ObjectId },
});

const Playlist =
  mongoose.models.Playlist || mongoose.model("Playlist", playlistSchema);

// track schema
const trackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  spotify_id: { type: String, unique: true, required: true },
  duration_ms: { type: Number, required: true },
  album: { type: String }, // `_id` from `Album` model
  artist: [{ type: String }], // `_id` from `Artist` modela
  thumbnail_src: { type: String }, // only store 640w
  preview_url: { type: String },
});

const Track = mongoose.models.Track || mongoose.model("Track", trackSchema);

// album schema
const albumSchema = new mongoose.Schema({
  name: { type: String, required: true },
  spotify_id: { type: String, unique: true, required: true },
  artist: [{ type: String }], // `_id` from `Artist` modela
  thumbnail_src: { type: String }, // only store 640w
  released_on: { type: Date },
  preview_url: { type: String },
});

// exports
export { Playlist, Track };
export default db;
