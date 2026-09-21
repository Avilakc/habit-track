const STOIC_QUOTE_API_URL = "https://stoic.tekloon.net/stoic-quote";

export async function getStoicQuote() {
  const response = await fetch(STOIC_QUOTE_API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch stoic quote: ${response.status}`);
  }

  const { data } = await response.json();

  return {
    quote: data.quote,
    author: data.author,
  };
}
