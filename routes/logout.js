const logout = (app) => {
  app.get("/api/logout", (req, res) => {
    const { user } = req.session;
    if (user) {
      req.session.destroy();
      res.status(200).json({ success: true }).end();
    } else {
      res.status(400).end();
    }
  });
};

module.exports = logout;
