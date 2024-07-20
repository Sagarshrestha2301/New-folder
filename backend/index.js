require('dotenv').config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./Routes/users");
const authRoutes = require("./Routes/Auth");
const connectDB = require('./config/db');

const recyclingRoutes = require('./Routes/recyclingRoutes'); // add your recycling routes here

const contactRoutes = require('./Routes/contactRoutes'); // add your contact routes here

connectDB();
const PORT = 8080;

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'https://waste-management-front.vercel.app/', // replace with your frontend domain
  credentials: true,  // allow cookies
  optionsSuccessStatus: 200, // some browsers choke on 204
  methods: ['GET', 'POST', 'PUT', 'DELETE']  // allow specific HTTP methods
}));

// Add routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Routes
app.use('/api/recycling', recyclingRoutes);


// Routes
app.use('/api/contact', contactRoutes);

app.get('/', async (req, res) => {
  res.status(200).json("server start");
});

// app listen
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
