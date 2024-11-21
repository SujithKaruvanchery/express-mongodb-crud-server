const express = require('express')
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const port = 5000;

async function main() {
    await mongoose.connect('mongodb+srv://sujithkaruvanchery:M0nG0DB!2024@todo-app-cluster.5tinh.mongodb.net/?retryWrites=true&w=majority&appName=todo-app-cluster');
}

main()
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection failed", err));

app.use(express.json());

app.use('/todos', todoRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
