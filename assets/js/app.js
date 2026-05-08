document.querySelector(".analyze-btn").addEventListener("click", () => {

  const result = document.querySelector(".risk");

  result.innerHTML = "Analyzing...";

  setTimeout(() => {

    const outcomes = [
      "Potential Misinformation",
      "Reliable Information",
      "Needs Human Verification"
    ];

    const random =
      outcomes[Math.floor(Math.random() * outcomes.length)];

    result.innerHTML = random;

  }, 2000);

});