import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StatsSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

export default mongoose.model('Stats', StatsSchema);
