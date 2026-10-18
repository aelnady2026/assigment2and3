// 12-dom-write — your work goes in this file.
//
// The lesson is example.js:   npm run open 12
// Check your work with:       npm test 12
//
// exercise.html is written for you and must not be edited. It gives you an
// empty <ul id="list">, an "Add a notebook" button (#add) and a "Reset"
// button (#reset).

// Small helper: the card whose h3 says `name`, or undefined if there is none.
function findCard(name) {
  return Array.from(document.querySelectorAll(".card")).find(
    (card) => card.querySelector("h3").textContent.trim() === name
  );
}

/**
 * Adds one product card to the end of the list.
 *
 * addProduct("Pen", 15) adds:
 *   <li class="card"><h3>Pen</h3><p class="price">15 EGP</p></li>
 */
export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceText = document.createElement("p");
  priceText.classList.add("price");
  priceText.textContent = `${price} EGP`;

  card.append(heading, priceText);
  document.querySelector("#list").append(card);
}

/**
 * Removes the card with that name, if there is one.
 * Does nothing at all if there is not.
 */
export function removeProduct(name) {
  const card = findCard(name);
  if (card) {
    card.remove();
  }
}

/**
 * Marks the card with that name as sold out, by adding the class `sold-out`.
 * Does nothing if there is no such card.
 */
export function markSoldOut(name) {
  const card = findCard(name);
  if (card) {
    card.classList.add("sold-out");
  }
}

/**
 * Removes every card from the list, leaving it empty.
 */
export function clearProducts() {
  document.querySelectorAll(".card").forEach((card) => card.remove());
}

/**
 * Write a function called `wireButtons`.
 *
 *   - clicking #add   adds a card named "Notebook" priced 45
 *   - clicking #reset empties the list
 */
export function wireButtons() {
  document
    .querySelector("#add")
    .addEventListener("click", () => addProduct("Notebook", 45));

  document
    .querySelector("#reset")
    .addEventListener("click", () => clearProducts());
}
