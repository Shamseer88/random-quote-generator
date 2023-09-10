const url = "https://api.quotable.io/random";
const quotePara = document.querySelector(".quote-para");
const button = document.getElementById("button");
const author = document.querySelector(".author-name");

async function fetchRandomQuote() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    quotePara.innerText = result.content;
    author.innerText = result.author;
  } catch (e) {
    console.log(e);
  }
}

button.addEventListener("click", fetchRandomQuote);

function postOnTwitter() {
  const tweet = `"${quotePara.textContent}" - ${author.textContent}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweet
  )}`;
  window.open(twitterUrl, "_blank", "width=550,height=420");
}
const twitterButton = document.querySelector(".twitter-button");
twitterButton.addEventListener("click", postOnTwitter);
