const express = require("express");
const sequelize = require("./db");
const User = require("./users");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Route: get/fetch all users
app.get("/users", async (req, res) => {
    try {
        const users = await User.findAll(); // get all users
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start the server
app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
    // Sync the database and model
    try {
        await sequelize.sync();
        console.log("Database synced successfully.");
    } catch (err) {
        console.error("Error syncing database:", err);
    }
});
