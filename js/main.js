// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Listing tabs
document.querySelectorAll('.listing-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.listing-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// SEARCH - routes to Realtor.com (replace with IDX Broker when ready)
let searchMode = 'buy';

function setSearchType(btn) {
  document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  searchMode = btn.dataset.type;
}

function runSearch() {
  const location = document.getElementById('searchLocation').value.trim() || 'South Florida';
  const slug = location.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/,'');
  const propType = document.getElementById('searchType').value;
  const priceVal = document.getElementById('searchPrice').value;
  let url = 'https://www.realtor.com/';

  if (searchMode === 'buy') url += 'realestateandhomes-search/' + slug + '_FL';
  else if (searchMode === 'rent') url += 'apartments/' + slug + '_FL';
  else url += 'realestateandhomes-search/' + slug + '_FL/show-recently-sold';

  if (priceVal) {
    const parts = priceVal.split('-');
    if (parts.length === 2) url += '/price-' + parts[0] + '-' + parts[1];
    else if (parseInt(priceVal) >= 1000000) url += '/price-' + priceVal + '-na';
    else url += '/price-na-' + priceVal;
  }
  if (propType) url += '/type-' + propType;
  window.open(url, '_blank');
}

document.getElementById('searchLocation')?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') runSearch();
});

// Video fallback - if video doesn't load, CSS background image shows
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
  heroVideo.addEventListener('error', () => { heroVideo.style.display = 'none'; });
  setTimeout(() => { if (heroVideo.readyState < 2) heroVideo.style.display = 'none'; }, 4000);
}
