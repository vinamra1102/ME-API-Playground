require("dotenv").config();
const connectDB = require("./config/db");
const app = require("./app");

const profileRoutes = require("./routes/profileRoutes");
const skillRoutes = require("./routes/skillRoutes");
const projectRoutes = require("./routes/projectRoutes");

(async() => {
    await connectDB();

    // register routes
    app.use("/api/profile", profileRoutes);
    app.use("/api/skills", skillRoutes);
    app.use("/api/projects", projectRoutes);
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`🚀 API running on http://localhost:${port}`));

})();