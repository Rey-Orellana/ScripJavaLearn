import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false }
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);

export const TaskController = {
  async create(req, res) {
    try {
      const task = new Task(req.body);
      await task.save();
      res.status(201).json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async read(req, res) {
    try {
      const { id } = req.params;
      const data = id ? await Task.findById(id) : await Task.find();
      if (id && !data) return res.status(404).json({ error: "No encontrado" });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!task) return res.status(404).json({ error: "No encontrado" });
      res.status(200).json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) return res.status(404).json({ error: "No encontrado" });
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};