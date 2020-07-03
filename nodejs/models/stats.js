import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StatsSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Stats = mongoose.model("Stats", StatsSchema);

export default Stats;
