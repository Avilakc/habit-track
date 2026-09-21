import { getStoicQuote } from "../lib/stoicQuotesClient.js";

export async function getQuote(req, res, next) {
  try {
    const quote = await getStoicQuote();
    res.json(quote);
  } catch (err) {
    next(err);
  }
}
