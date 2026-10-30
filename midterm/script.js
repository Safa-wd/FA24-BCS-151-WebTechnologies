const N = 51;
const grid = document.getElementById('product-grid');
const cards = Array.from(grid.querySelectorAll('.item'));
const searchInput = document.getElementById('search');
const sortButton = document.getElementById('sort-price');
const noResults = document.getElementById('no-results');
const categoryRadios = document.querySelectorAll('input[name="cat"]');
let ascending = true;

function getName(card) {
  return card.querySelector('.item-name').textContent.trim().toLowerCase();
}

function getPrice(card) {
  return parseInt(card.querySelector('.item-price').textContent.replace(/[^\d]/g, ''), 10);
}

function applyFilters() {
  const text = searchInput.value.trim().toLowerCase();
  const category = document.querySelector('input[name="cat"]:checked').value;
  let shown = 0;

  cards.forEach(function (card) {
    const matchesName = getName(card).includes(text);
    const matchesCategory = category === 'all' || card.dataset.cat === category;
    card.classList.toggle('d-none', !matchesName);
    if (matchesName && matchesCategory) {
      shown++;
    }
  });

  grid.classList.toggle('d-none', shown === 0);
  noResults.hidden = shown !== 0;
}

function sortCards() {
  const sorted = Array.from(grid.children).sort(function (a, b) {
    return ascending ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a);
  });
  sorted.forEach(function (card) {
    grid.appendChild(card);
  });
  sortButton.textContent = ascending ? 'Sort by price \u2191' : 'Sort by price \u2193';
  ascending = !ascending;
}

function addPremiumLabels() {
  cards.forEach(function (card) {
    if (getPrice(card) > N * 100) {
      const label = document.createElement('span');
      label.className = 'premium-label';
      label.textContent = 'Premium';
      card.querySelector('.media').appendChild(label);
    }
  });
}

searchInput.addEventListener('input', applyFilters);
categoryRadios.forEach(function (radio) {
  radio.addEventListener('change', applyFilters);
});
sortButton.addEventListener('click', sortCards);

addPremiumLabels();
applyFilters();