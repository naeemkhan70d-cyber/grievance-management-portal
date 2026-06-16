require("dotenv").config();

const express = require("express");

const authRoutes = require(
  "./modules/auth/auth.routes"
);
const adminRoutes =
  require(
    "./modules/admin/admin.routes"
  );
const complaintRoutes =
  require(
    "./modules/complaint/complaint.routes"
  );

  const officerRoutes =
  require(
    "./modules/officer/officer.routes"
  );

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "Complaint Management Backend Running"
  );
});


app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/admin",
  adminRoutes
);

app.use(
  "/api/complaints",
  complaintRoutes
);

app.use(
  "/api/officer",
  officerRoutes
);

module.exports = app;