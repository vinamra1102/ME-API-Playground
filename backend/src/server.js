require("dotenv").config();
const connectDB = require("./config/db");
const app = require("./app");

const profileRoutes = require("./routes/profileRoutes");

(async() => {
    await connectDB();

    // register routes
    app.use("/api/profile", profileRoutes);

    const port = process.env.PORT || 5000;
    app.listen(port, () =>
        console.log(`🚀 API running on http://localhost:${port}`)
    );
})();