module.exports = (req, res) => {
  const { name = "World" } = req.query;

  const text = `Hello ${name}!`;
  const body = JSON.stringify({ text });

  res.setHeader("Content-Type", "text/plain");
  res.end(body);
};
