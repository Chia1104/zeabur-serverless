export default async function handler(req: any, res: any) {
  try {
    const password = await Bun.password.hash("super-secure-pa$$word");
    res.status(200).json({ password });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
