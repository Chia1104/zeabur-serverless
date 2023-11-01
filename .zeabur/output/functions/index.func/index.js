module.exports = (req, res) => {
  const text = `Hello World!`;
  const body = JSON.stringify({ text });

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("X-Powered-By", "Zeabur");
  res.end(body);
};
