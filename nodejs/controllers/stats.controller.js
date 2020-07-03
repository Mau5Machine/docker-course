import Stats from "../models/stats";

exports.getStats = async (req, res) => {
  Stats.find({}, (err, stats) => {
    if (err) {
      res.status(400).send({
        message: "Error fetching stats",
      });
    }
    res.send(stats);
  });
};

exports.getStat = async (req, res) => {
  const { id } = req.params;
  Stats.findOne({ _id: id }, (err, stat) => {
    if (err) {
      res.status(400).send({
        message: "Could not find stat!",
      });
    }
    res.send(stat);
  });
};

exports.createStats = async (req, res) => {
  const { name, description } = req.body;
  if (!name || name === "") {
    res.status(400).send({
      message: "Name cannot be empty!",
    });
  }
  if (!description || description === "") {
    res.status(400).send({
      message: "Description cannot be empty!",
    });
  }
  let newStat = Stats({
    name,
    description,
  });
  let inserted = newStat.save((err, stat) => {
    if (err) {
      res.status(400).send({
        message: "Error creating new stat",
      });
    }
    res.send(stat);
  });
};

exports.deleteStats = async (req, res) => {
  const { id } = req.body;
  if (!id || id === "") {
    res.status(400).send({
      message: "ID of stat is required!",
    });
  }
  Stats.deleteOne({ _id: id }, (err, stat) => {
    if (err) {
      res.status(400).send({
        message: "Could not find stat with that ID!",
      });
    }
    res.send(stat);
  });
};
