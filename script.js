const quotes = [
  "Believe in yourself.",
  "Keep pushing forward.",
  "Every day is a new beginning.",
  "You are stronger than you think.",
  "Stay positive and happy."
];

const quoteDisplay = document.getElementById("quote");
const newQuoteButton = document.getElementById("newQuote");

newQuoteButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});
