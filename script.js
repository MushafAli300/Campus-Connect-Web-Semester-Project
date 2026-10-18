/* ===================== DATA ===================== */
const menuItems = [
  { icon: 'fa-house', name: 'Dashboard' },
  { icon: 'fa-user', name: 'Profile' },
  { icon: 'fa-file-lines', name: 'Notes & Resources' },
  { icon: 'fa-file', name: 'Past Papers' },
  { icon: 'fa-user-graduate', name: 'Teacher Reviews' },
  { icon: 'fa-magnifying-glass', name: 'Lost & Found' },
  { icon: 'fa-comments', name: 'Discussion Forum' },
  { icon: 'fa-user-group', name: 'Study Groups' },
  { icon: 'fa-store', name: 'Marketplace' },
  { icon: 'fa-bullhorn', name: 'Announcements' },
  { icon: 'fa-calendar-check', name: 'Events' },
  { icon: 'fa-award', name: 'Scholarships & Opportunities' },
  { icon: 'fa-robot', name: 'AI Study Assistant' },
  { icon: 'fa-bell', name: 'Notifications', badge: 3 },
  { icon: 'fa-gear', name: 'Settings' }
];

const stats = [
  { color: 'color-blue', icon: 'fa-file-lines', label: 'My Notes', number: 24, linkText: 'View All' },
  { color: 'color-green', icon: 'fa-user-group', label: 'Study Groups', number: 3, linkText: 'Join Groups' },
  { color: 'color-purple', icon: 'fa-bookmark', label: 'Saved Resources', number: 18, linkText: 'View Saved' },
  { color: 'color-orange', icon: 'fa-bell', label: 'Pending Notifications', number: 3, linkText: 'View All' }
];

const announcements = [
  { tag: 'University', color: 'color-blue', title: 'Midterm Examination Schedule Released', text: 'Midterm examination schedule for Fall 2024 is now available. Please check...', date: 'Sep 18, 2024' },
  { tag: 'Scholarship', color: 'color-green', title: 'HEC Scholarships 2024', text: 'Applications are open for HEC Need Based Scholarships. Last date: 30 Sep 2024.', date: 'Sep 16, 2024' },
  { tag: 'Event', color: 'color-red', title: 'AI Workshop – Future of Technology', text: 'Join us for an insightful workshop on AI and its applications in real life.', date: 'Sep 15, 2024' },
  { tag: 'Notice', color: 'color-blue', title: 'Library Timings Extended', text: 'Library will remain open until 10 PM during exam week.', date: 'Sep 12, 2024' }
];

const recentNotes = [
  { color: 'color-blue', title: 'Database Systems – Notes', author: 'Ali Raza', time: '2 hours ago' },
  { color: 'color-orange', title: 'Software Engineering – Slides', author: 'Fatima Noor', time: '3 hours ago' },
  { color: 'color-purple', title: 'Calculus – Important Questions', author: 'Hamza Tariq', time: '5 hours ago' },
  { color: 'color-green', title: 'Computer Networks – Notes', author: 'Ayesha Khan', time: '1 day ago' }
];

const quickAccessButtons = [
  { color: 'color-blue', icon: 'fa-file-lines', label: 'Upload Notes' },
  { color: 'color-green', icon: 'fa-file', label: 'Find Past Papers' },
  { color: 'color-blue', icon: 'fa-user-graduate', label: 'Find a Teacher' },
  { color: 'color-purple', icon: 'fa-magnifying-glass', label: 'Report Lost Item' },
  { color: 'color-green', icon: 'fa-user-group', label: 'Create Group' },
  { color: 'color-orange', icon: 'fa-cart-shopping', label: 'List for Marketplace', action: 'sell' }
];

const upcomingEvents = [
  { day: '25', month: 'SEP', title: 'AI Workshop', time: '10:00 AM – 12:00 PM', place: 'Computer Lab' },
  { day: '28', month: 'SEP', title: 'Career Fair 2024', time: '09:00 AM – 03:00 PM', place: 'Main Auditorium' },
  { day: '02', month: 'OCT', title: 'Tech Society Meetup', time: '04:00 PM – 06:00 PM', place: 'CS Department' }
];

const aiTools = [
  { color: 'color-purple', icon: 'fa-calendar-check', title: 'Summarize PDF', text: 'Get key points in seconds' },
  { color: 'color-green', icon: 'fa-pen-to-square', title: 'Generate Quiz', text: 'Create MCQs from your notes' },
  { color: 'color-blue', icon: 'fa-circle-question', title: 'Ask Questions', text: 'Get instant answers' },
  { color: 'color-orange', icon: 'fa-calendar-days', title: 'Study Plan', text: 'Plan your study schedule' },
  { color: 'color-red', icon: 'fa-clone', title: 'Flashcards', text: 'Turn notes into flashcards' }
];

const recentLostFound = [
  { status: 'Lost', tagClass: 'tag-red', item: 'Black Wallet', place: 'Main Library', date: '18 Sep 2024', photoClass: 'wallet-photo', icon: '' },
  { status: 'Found', tagClass: 'tag-green', item: 'Earphones', place: 'Library', date: '16 Sep 2024', photoClass: 'earphones-photo', icon: '<i class="fa-solid fa-headphones"></i>' }
];

/* ===================== ELEMENTS ===================== */
const sidebar = document.getElementById('sidebar');
const sidebarMenu = document.getElementById('sidebar-menu');
const menuToggleBtn = document.getElementById('menu-toggle-btn');
const searchInput = document.getElementById('search-input');
const statsGrid = document.getElementById('stats-grid');
const announcementsList = document.getElementById('announcements-list');
const recentNotesList = document.getElementById('recent-notes-list');
const quickAccessList = document.getElementById('quick-access-list');
const upcomingEventsList = document.getElementById('upcoming-events-list');
const aiToolsList = document.getElementById('ai-tools-list');
const recentLostFoundList = document.getElementById('recent-lost-found-list');
const joinGroupBtn = document.getElementById('join-group-btn');

/* ===================== RENDER FUNCTIONS ===================== */
function renderSidebarMenu() {
  sidebarMenu.innerHTML = menuItems.map((item, index) => `
    <a href="#" class="menu-link ${index === 0 ? 'active' : ''}" data-page="${item.name}">
      <i class="fa-solid ${item.icon}"></i>${item.name}
      ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ''}
    </a>`).join('');
}

function renderStats() {
  statsGrid.innerHTML = stats.map(s => `
    <div class="card stat-card">
      <div class="stat-icon ${s.color}"><i class="fa-solid ${s.icon}"></i></div>
      <div>
        <p class="stat-label">${s.label}</p>
        <strong class="stat-number">${s.number}</strong>
        <a href="#" class="stat-link">${s.linkText} →</a>
      </div>
    </div>`).join('');
}

function renderAnnouncements() {
  announcementsList.innerHTML = announcements.map(a => `
    <div class="announcement-item">
      <span class="tag announcement-tag ${a.color}">${a.tag}</span>
      <div class="item-details">
        <span class="item-title">${a.title}</span>
        <span class="item-meta">${a.text}</span>
      </div>
      <time class="announcement-date">${a.date}</time>
    </div>`).join('');
}

function renderRecentNotes(searchText = '') {
  const filteredNotes = recentNotes.filter(n => n.title.toLowerCase().includes(searchText));
  recentNotesList.innerHTML = filteredNotes.length ? filteredNotes.map(n => `
    <div class="note-item">
      <div class="file-icon ${n.color}"><i class="fa-solid fa-file-lines"></i></div>
      <div class="item-details">
        <span class="item-title">${n.title}</span>
        <span class="item-meta">By ${n.author} &nbsp;•&nbsp; ${n.time}</span>
      </div>
      <button class="download-btn" title="Download"><i class="fa-solid fa-download"></i></button>
    </div>`).join('') : '<p class="item-meta">No notes found.</p>';
}

function renderQuickAccess() {
  quickAccessList.innerHTML = quickAccessButtons.map(b => `
    <button class="quick-access-btn" data-action="${b.action || ''}">
      <span class="file-icon ${b.color}"><i class="fa-solid ${b.icon}"></i></span>${b.label}
    </button>`).join('');
}

function renderUpcomingEvents() {
  upcomingEventsList.innerHTML = upcomingEvents.map(e => `
    <div class="event-item">
      <div class="event-date"><span class="event-day">${e.day}</span><span class="event-month">${e.month}</span></div>
      <div class="item-details">
        <span class="item-title">${e.title}</span>
        <span class="item-meta"><i class="fa-regular fa-clock"></i> ${e.time}</span>
        <span class="item-meta"><i class="fa-solid fa-location-dot"></i> ${e.place}</span>
      </div>
      <button class="primary-btn register-btn">Register</button>
    </div>`).join('');
}

function renderAiTools() {
  aiToolsList.innerHTML = aiTools.map(t => `
    <div class="ai-tool ${t.color}">
      <span class="file-icon ${t.color}"><i class="fa-solid ${t.icon}"></i></span>
      <div><span class="item-title">${t.title}</span><span class="item-meta">${t.text}</span></div>
    </div>`).join('');
}

function renderRecentLostFound() {
  recentLostFoundList.innerHTML = recentLostFound.map(l => `
    <div class="lost-found-item">
      <div class="item-photo ${l.photoClass}">${l.icon}</div>
      <div class="item-details">
        <span class="tag ${l.tagClass}">${l.status}</span>
        <span class="item-title">${l.item}</span>
        <span class="item-meta"><i class="fa-solid fa-location-dot"></i> ${l.place} &nbsp;•&nbsp; ${l.date}</span>
      </div>
      <button class="contact-btn">Contact</button>
    </div>`).join('');
}

/* ===================== EVENT HANDLERS ===================== */
// Highlight the clicked sidebar link and close the menu on mobile
sidebarMenu.addEventListener('click', (event) => {
  const clickedLink = event.target.closest('.menu-link');
  if (!clickedLink) return;
  event.preventDefault();
  sidebarMenu.querySelectorAll('.menu-link').forEach(link => link.classList.remove('active'));
  clickedLink.classList.add('active');
  showPage(clickedLink.dataset.page === 'Marketplace' ? 'marketplace' : 'dashboard');
  sidebar.classList.remove('open');
});

// Open / close sidebar on mobile
menuToggleBtn.addEventListener('click', () => sidebar.classList.toggle('open'));

// Search filters the "Recently Added Notes" list
searchInput.addEventListener('input', () => renderRecentNotes(searchInput.value.trim().toLowerCase()));

// Register for an event
upcomingEventsList.addEventListener('click', (event) => {
  const registerBtn = event.target.closest('.register-btn');
  if (!registerBtn) return;
  registerBtn.textContent = 'Registered';
  registerBtn.classList.add('registered');
});

// Join study group
joinGroupBtn.addEventListener('click', () => {
  joinGroupBtn.textContent = 'Request Sent';
  joinGroupBtn.disabled = true;
});

/* ===================== MARKETPLACE (BUY & SELL) ===================== */
const STORAGE_KEY = 'campusconnect-listings';
const currentUserName = 'Mushaf Ali';

const categoryStyle = {
  'Books': { icon: 'fa-book', color: 'color-blue' },
  'Calculators': { icon: 'fa-calculator', color: 'color-purple' },
  'Electronics': { icon: 'fa-laptop', color: 'color-green' },
  'Bags': { icon: 'fa-bag-shopping', color: 'color-orange' },
  'Stationery': { icon: 'fa-pen', color: 'color-red' },
  'Lab Equipment': { icon: 'fa-flask', color: 'color-blue' }
};

const sampleListings = [
  { id: 1, title: 'Database Systems Book', category: 'Books', condition: 'Used', price: 1200, description: 'Good condition, a few highlighted pages.', seller: 'Ali Raza', contact: '0300-1234567', postedAt: '2024-09-18', sold: false },
  { id: 2, title: 'Casio fx-991ES Plus', category: 'Calculators', condition: 'Like New', price: 2500, description: 'Used for one semester only.', seller: 'Fatima Noor', contact: 'fatima@example.com', postedAt: '2024-09-17', sold: false },
  { id: 3, title: 'Arduino Uno Kit', category: 'Lab Equipment', condition: 'New', price: 3500, description: 'Sealed kit with sensors and jumper wires.', seller: 'Hamza Tariq', contact: '0311-7654321', postedAt: '2024-09-15', sold: false }
];

function loadListings() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : sampleListings;
  } catch (error) {
    return sampleListings;
  }
}
function saveListings() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(listings)); } catch (error) { /* storage unavailable */ }
}
let listings = loadListings();

// Elements
const dashboardPage = document.getElementById('dashboard-page');
const marketplacePage = document.getElementById('marketplace-page');
const listingsGrid = document.getElementById('listings-grid');
const listingCount = document.getElementById('listing-count');
const marketplaceSearch = document.getElementById('marketplace-search');
const categoryFilter = document.getElementById('category-filter');
const conditionFilter = document.getElementById('condition-filter');
const priceSort = document.getElementById('price-sort');
const myListingsOnly = document.getElementById('my-listings-only');
const sellModal = document.getElementById('sell-modal');
const sellForm = document.getElementById('sell-form');
const openSellModalBtn = document.getElementById('open-sell-modal-btn');
const cancelSellBtn = document.getElementById('cancel-sell-btn');

// Helpers
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
function formatPrice(price) {
  return 'Rs. ' + Number(price).toLocaleString('en-PK');
}

// Switch between Dashboard and Marketplace
function showPage(pageName) {
  dashboardPage.hidden = pageName !== 'dashboard';
  marketplacePage.hidden = pageName !== 'marketplace';
  window.scrollTo(0, 0);
}
function setActiveMenu(pageName) {
  sidebarMenu.querySelectorAll('.menu-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageName);
  });
}

// Show listings (applies search, filters and sorting)
function renderListings() {
  const searchText = marketplaceSearch.value.trim().toLowerCase();

  let visible = listings.filter(item =>
    (item.title + ' ' + item.description).toLowerCase().includes(searchText) &&
    (!categoryFilter.value || item.category === categoryFilter.value) &&
    (!conditionFilter.value || item.condition === conditionFilter.value) &&
    (!myListingsOnly.checked || item.seller === currentUserName)
  );

  if (priceSort.value === 'low-high') visible.sort((a, b) => a.price - b.price);
  else if (priceSort.value === 'high-low') visible.sort((a, b) => b.price - a.price);
  else visible.sort((a, b) => b.id - a.id);

  listingCount.textContent = visible.length + (visible.length === 1 ? ' item' : ' items') + ' found';

  listingsGrid.innerHTML = visible.length ? visible.map(item => {
    const style = categoryStyle[item.category] || categoryStyle['Books'];
    const isMine = item.seller === currentUserName;
    return `
      <article class="listing-card ${item.sold ? 'sold' : ''}">
        <div class="listing-image ${style.color}">
          <i class="fa-solid ${style.icon}"></i>
          ${item.sold ? '<span class="sold-badge">SOLD</span>' : ''}
        </div>
        <div class="listing-body">
          <div class="listing-tags">
            <span class="tag ${style.color}">${escapeHtml(item.category)}</span>
            <span class="tag tag-green">${escapeHtml(item.condition)}</span>
          </div>
          <h4 class="listing-title">${escapeHtml(item.title)}</h4>
          <p class="listing-description">${escapeHtml(item.description || 'No description.')}</p>
          <p class="listing-price">${formatPrice(item.price)}</p>
          <p class="listing-seller"><i class="fa-solid fa-user"></i> ${escapeHtml(item.seller)} • ${escapeHtml(item.postedAt)}</p>
          <p class="listing-contact" hidden>${escapeHtml(item.contact)}</p>
          <div class="listing-actions">
            ${isMine
        ? `<button class="mark-sold-btn" data-id="${item.id}">${item.sold ? 'Mark Available' : 'Mark Sold'}</button>
                 <button class="delete-listing-btn" data-id="${item.id}">Delete</button>`
        : `<button class="contact-seller-btn" ${item.sold ? 'disabled' : ''}>Contact Seller</button>`}
          </div>
        </div>
      </article>`;
  }).join('') : '<p class="no-listings">No items found. Try different filters or sell something!</p>';
}

// Sell form (popup)
function openSellModal() {
  sellModal.hidden = false;
  sellForm.elements.title.focus();
}
function closeSellModal() {
  sellModal.hidden = true;
  sellForm.reset();
}

sellForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(sellForm);
  const newListing = {
    id: Date.now(),
    title: data.get('title').trim(),
    category: data.get('category'),
    condition: data.get('condition'),
    price: Number(data.get('price')),
    description: data.get('description').trim(),
    seller: currentUserName,
    contact: data.get('contact').trim(),
    postedAt: new Date().toISOString().slice(0, 10),
    sold: false
  };
  listings.unshift(newListing);
  saveListings();
  closeSellModal();
  myListingsOnly.checked = false;
  renderListings();
});

openSellModalBtn.addEventListener('click', openSellModal);
cancelSellBtn.addEventListener('click', closeSellModal);
sellModal.addEventListener('click', (event) => { if (event.target === sellModal) closeSellModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !sellModal.hidden) closeSellModal(); });

// Filters re-render the list
[marketplaceSearch, categoryFilter, conditionFilter, priceSort, myListingsOnly].forEach(control => {
  control.addEventListener('input', renderListings);
});

// Buttons inside listing cards: contact / mark sold / delete
listingsGrid.addEventListener('click', (event) => {
  const contactBtn = event.target.closest('.contact-seller-btn');
  if (contactBtn) {
    const contactBox = contactBtn.closest('.listing-body').querySelector('.listing-contact');
    contactBox.hidden = !contactBox.hidden;
    contactBtn.textContent = contactBox.hidden ? 'Contact Seller' : 'Hide Contact';
    return;
  }
  const soldBtn = event.target.closest('.mark-sold-btn');
  if (soldBtn) {
    const item = listings.find(l => l.id === Number(soldBtn.dataset.id));
    if (item) { item.sold = !item.sold; saveListings(); renderListings(); }
    return;
  }
  const deleteBtn = event.target.closest('.delete-listing-btn');
  if (deleteBtn && confirm('Delete this listing?')) {
    listings = listings.filter(l => l.id !== Number(deleteBtn.dataset.id));
    saveListings();
    renderListings();
  }
});

// Quick Access "List for Marketplace" opens the sell form
quickAccessList.addEventListener('click', (event) => {
  const button = event.target.closest('[data-action="sell"]');
  if (!button) return;
  setActiveMenu('Marketplace');
  showPage('marketplace');
  openSellModal();
});

/* ===================== START ===================== */
renderSidebarMenu();
renderStats();
renderAnnouncements();
renderRecentNotes();
renderQuickAccess();
renderUpcomingEvents();
renderAiTools();
renderRecentLostFound();
renderListings();
