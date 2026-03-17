import 'leaflet/dist/leaflet.css';
import './style.css';
import L from 'leaflet';
import { offices, type Office } from './data';

// ─── Mode config ──────────────────────────────────────────────────────
type Mode = 'lunch' | 'borrel';

const modeConfig = {
  lunch: {
    title: 'Ambtenarenlunch',
    tileUrl: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    modalTitle: 'Stel een lunchplek voor',
    suggestBtnText: 'Stel een lunchplek voor',
    formNameLabel: 'Naam restaurant',
    formQueueLabel: 'Sta je hier (vaak) in de rij?',
    formPriceLabel: 'Hoeveel geef je gemiddeld uit voor lunch hier (in euros)?',
    formWhyLabel: 'Waarom is dit jouw tip en wat bestel jij hier het liefst?',
    emptyIcon: '🍽️',
    emptyText: 'Aanbevelingen voor dit kantoor volgen binnenkort.',
    venueLabel: 'Eettip',
  },
  borrel: {
    title: 'Ambtenarenborrel',
    tileUrl: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    modalTitle: 'Stel een café voor',
    suggestBtnText: 'Stel een café voor',
    formNameLabel: 'Naam café of kroeg',
    formQueueLabel: 'Hoe druk is het hier na werk?',
    formPriceLabel: 'Hoeveel geef je gemiddeld uit per borrel (in euros)?',
    formWhyLabel: 'Waarom is dit jouw tip en wat drink jij hier het liefst?',
    emptyIcon: '🍺',
    emptyText: 'Borrel aanbevelingen voor dit kantoor volgen binnenkort.',
    venueLabel: 'Tip',
  },
} as const;

// ─── State ───────────────────────────────────────────────────────────
let map: L.Map;
let tileLayer: L.TileLayer;
let officeMarkers: Map<string, L.Marker> = new Map();
let restaurantMarkers: L.Marker[] = [];
let currentOfficeId: string | null = null;
let currentMode: Mode = 'lunch';

// ─── DOM refs ─────────────────────────────────────────────────────────
const officePanel = document.getElementById('office-panel')!;
const restaurantPanel = document.getElementById('restaurant-panel')!;
const officeList = document.getElementById('office-list')!;
const restaurantList = document.getElementById('restaurant-list')!;
const panelOfficeName = document.getElementById('panel-office-name')!;
const panelOfficeAddress = document.getElementById('panel-office-address')!;
const backBtn = document.getElementById('back-btn')!;
const suggestModal = document.getElementById('suggest-modal') as HTMLElement;
const suggestForm = document.getElementById('suggest-form') as HTMLFormElement;
const formSuccess = document.getElementById('form-success') as HTMLElement;
const officeSelect = document.getElementById('suggest-office') as HTMLSelectElement;;

// ─── Map initialisation ───────────────────────────────────────────────
function initMap(): void {
  map = L.map('map', {
    center: [52.3676, 4.9041],
    zoom: 12,
    zoomControl: true,
  });

  tileLayer = L.tileLayer(modeConfig.lunch.tileUrl, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  placeOfficeMarkers();

  map.on('click', () => {
    if (restaurantPanel.classList.contains('visible')) {
      goBack();
    }
  });
}

// ─── Office markers ───────────────────────────────────────────────────
function makeOfficeIcon(state: 'normal' | 'selected' | 'deselected'): L.DivIcon {
  const cls = state === 'normal' ? '' : ` ${state}`;
  return L.divIcon({
    className: '',
    html: `<div class="office-marker-icon${cls}" style="width:16px;height:16px;"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
}

function placeOfficeMarkers(): void {
  offices.forEach((office) => {
    const marker = L.marker([office.lat, office.lng], {
      icon: makeOfficeIcon('normal'),
    }).addTo(map);

    marker.bindTooltip(office.name, {
      permanent: false,
      direction: 'top',
      offset: [0, -10],
      className: 'office-tooltip',
    });

    marker.on('click', (e) => { L.DomEvent.stopPropagation(e); selectOffice(office); });
    officeMarkers.set(office.id, marker);
  });
}

// ─── Restaurant markers ───────────────────────────────────────────────
function placeRestaurantMarkers(office: Office): void {
  clearRestaurantMarkers();
  const venues = currentMode === 'lunch' ? office.restaurants : (office.borrelVenues ?? []);

  venues.forEach((restaurant, i) => {
    const icon = L.divIcon({
      className: '',
      html: `
        <div class="restaurant-marker-wrap" style="animation-delay:${0.08 + i * 0.07}s">
          <div class="restaurant-marker-label">${restaurant.name}</div>
          <div class="restaurant-marker-pin"></div>
        </div>`,
      iconSize: [0, 0],
      iconAnchor: [0, 28],
    });

    const marker = L.marker([restaurant.lat, restaurant.lng], { icon }).addTo(map);
    marker.on('click', (e) => { L.DomEvent.stopPropagation(e); selectRestaurant(i); });
    restaurantMarkers.push(marker);
  });
}

function clearRestaurantMarkers(): void {
  restaurantMarkers.forEach((m) => m.remove());
  restaurantMarkers = [];
}

// ─── Office selection ─────────────────────────────────────────────────
function selectOffice(office: Office): void {
  currentOfficeId = office.id;

  // Update marker icons
  officeMarkers.forEach((marker, id) => {
    marker.setIcon(makeOfficeIcon(id === office.id ? 'selected' : 'deselected'));
  });

  // Fly to office
  map.flyTo([office.lat, office.lng], office.zoom, { duration: 1.1 });

  // Show restaurant markers
  placeRestaurantMarkers(office);

  // Render restaurant cards
  renderRestaurantCards(office);

  // Swap panels
  officePanel.style.display = 'none';
  restaurantPanel.classList.add('visible');
  panelOfficeName.textContent = office.name;
  panelOfficeAddress.textContent = office.address;
}

function goBack(): void {
  currentOfficeId = null;

  // Reset all office markers
  officeMarkers.forEach((marker) => {
    marker.setIcon(makeOfficeIcon('normal'));
  });

  clearRestaurantMarkers();

  // Fly back to city overview
  map.flyTo([52.3676, 4.9041], 12, { duration: 1.1 });

  // Swap panels
  restaurantPanel.classList.remove('visible');
  officePanel.style.display = 'flex';
}

// ─── Restaurant selection ─────────────────────────────────────────────
function selectRestaurant(index: number, source: 'card' | 'pin' = 'pin'): void {
  // Update cards
  const cards = restaurantList.querySelectorAll('.restaurant-card');
  cards.forEach((c) => c.classList.remove('selected'));
  const card = cards[index] as HTMLElement | undefined;
  if (card) {
    card.classList.add('selected');
    if (source === 'pin') card.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Update marker labels + pan map
  restaurantMarkers.forEach((m, i) => {
    const el = m.getElement();
    if (!el) return;
    const label = el.querySelector('.restaurant-marker-label');
    if (label) label.classList.toggle('selected', i === index);
  });

  if (source === 'card') {
    const marker = restaurantMarkers[index];
    if (marker) map.panTo(marker.getLatLng(), { animate: true, duration: 0.5 });
  }
}

// ─── Restaurant cards ─────────────────────────────────────────────────
function makeBars(filled: number, colorClass: string): string {
  return `<span class="meta-bars ${colorClass}">${Array.from({ length: 3 }, (_, i) =>
    `<span class="meta-bar${i < filled ? ' filled' : ''}"></span>`
  ).join('')}</span>`;
}

function renderRestaurantCards(office: Office): void {
  restaurantList.innerHTML = '';
  const config = modeConfig[currentMode];
  const venues = currentMode === 'lunch' ? office.restaurants : (office.borrelVenues ?? []);

  if (venues.length === 0) {
    restaurantList.innerHTML = `
      <div class="no-restaurants">
        <div class="no-restaurants-icon">${config.emptyIcon}</div>
        <p class="no-restaurants-text">${config.emptyText}</p>
      </div>`;
    return;
  }

  venues.forEach((r, i) => {
    const busyFilled = r.busynessLevel === 'quiet' ? 1 : r.busynessLevel === 'medium' ? 2 : 3;
    const priceFilled = (r.price.match(/€/g) ?? []).length;

    const card = document.createElement('div');
    card.className = 'restaurant-card';
    card.innerHTML = `
      <div class="card-top">
        <span class="card-name">${r.name}</span>
      </div>
      <p class="card-address">${r.address}</p>
      <p class="card-description">${r.description}</p>
      <div class="card-meta">
        <div class="meta-row">
          <svg class="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          <span><span class="meta-label">Afstand</span><span class="meta-value">${r.walkingTime} min lopen</span></span>
        </div>
        <div class="meta-row">
          <svg class="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <span class="meta-label">Drukte</span>${makeBars(busyFilled, `busy-${r.busynessLevel}`)}
        </div>
        <div class="meta-row">
          <svg class="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 7a6 6 0 1 0 0 10"/><line x1="6" y1="11" x2="14" y2="11"/><line x1="6" y1="13" x2="14" y2="13"/>
          </svg>
          <span class="meta-label">Kosten</span>${makeBars(priceFilled, 'price')}
        </div>
        <div class="meta-row">
          <svg class="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
          </svg>
          <span><span class="meta-label">${config.venueLabel}</span><span class="meta-value">${r.recommend}</span></span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => selectRestaurant(i, 'card'));
    restaurantList.appendChild(card);
  });
}

// ─── Office list (sidebar) ────────────────────────────────────────────
function renderOfficeList(): void {
  offices.forEach((office) => {
    const btn = document.createElement('button');
    btn.className = 'office-btn';
    btn.innerHTML = `
      <span class="office-dot"></span>
      <span class="office-btn-text">
        <span class="office-btn-name">${office.name}</span>
        <span class="office-btn-address">${office.address}</span>
      </span>
    `;
    btn.addEventListener('click', () => selectOffice(office));
    officeList.appendChild(btn);
  });
}

// ─── Mode switching ───────────────────────────────────────────────────
function switchMode(mode: Mode): void {
  currentMode = mode;
  const config = modeConfig[mode];

  // Title + tab
  document.querySelector<HTMLElement>('.site-title')!.textContent = config.title;
  document.title = config.title;

  // Tile layer
  tileLayer.remove();
  tileLayer = L.tileLayer(config.tileUrl, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  // Dark theme
  document.getElementById('app')!.classList.toggle('borrel-mode', mode === 'borrel');

  // Toggle button states
  document.querySelectorAll<HTMLElement>('.mode-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });

  // Suggest button text
  document.querySelectorAll<HTMLElement>('.suggest-btn-text').forEach((el) => {
    el.textContent = config.suggestBtnText;
  });

  // Go back to office list if in restaurant view
  if (restaurantPanel.classList.contains('visible')) goBack();
}

// ─── Suggest modal ────────────────────────────────────────────────────
function openSuggestModal(preselectedOfficeId?: string): void {
  const config = modeConfig[currentMode];

  // Update form labels and modal title
  document.querySelector<HTMLElement>('.modal-title')!.textContent = config.modalTitle;
  document.getElementById('label-suggest-name')!.textContent = config.formNameLabel;
  document.getElementById('label-suggest-queue')!.textContent = config.formQueueLabel;
  document.getElementById('label-suggest-price')!.textContent = config.formPriceLabel;
  document.getElementById('label-suggest-why')!.textContent = config.formWhyLabel;
  (document.getElementById('suggest-mode') as HTMLInputElement).value = currentMode;

  // Populate office dropdown
  officeSelect.innerHTML = '<option value="">Kies een kantoor…</option>';
  offices.forEach((office) => {
    const opt = document.createElement('option');
    opt.value = office.name;
    opt.textContent = office.name;
    if (preselectedOfficeId && office.id === preselectedOfficeId) opt.selected = true;
    officeSelect.appendChild(opt);
  });

  suggestForm.hidden = false;
  formSuccess.hidden = true;
  suggestForm.reset();
  if (preselectedOfficeId) {
    const match = offices.find((o) => o.id === preselectedOfficeId);
    if (match) officeSelect.value = match.name;
  }
  suggestModal.removeAttribute('hidden');
}

function closeSuggestModal(): void {
  suggestModal.setAttribute('hidden', '');
}

document.getElementById('modal-close')!.addEventListener('click', closeSuggestModal);
suggestModal.addEventListener('click', (e) => { if (e.target === suggestModal) closeSuggestModal(); });

document.getElementById('suggest-btn-office')!.addEventListener('click', () => openSuggestModal());
document.getElementById('suggest-btn-restaurant')!.addEventListener('click', () => {
  openSuggestModal(currentOfficeId ?? undefined);
});

suggestForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = suggestForm.querySelector('.form-submit') as HTMLButtonElement;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Bezig…';

  const data = new FormData(suggestForm);
  const res = await fetch('https://formspree.io/f/xyknblow', {
    method: 'POST',
    body: data,
    headers: { Accept: 'application/json' },
  });

  if (res.ok) {
    suggestForm.hidden = true;
    formSuccess.hidden = false;
  } else {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Verstuur suggestie';
    alert('Er ging iets mis. Probeer het opnieuw.');
  }
});

// ─── Boot ─────────────────────────────────────────────────────────────
backBtn.addEventListener('click', goBack);
document.querySelectorAll<HTMLElement>('.mode-btn').forEach((btn) => {
  btn.addEventListener('click', () => switchMode(btn.dataset.mode as Mode));
});
renderOfficeList();
initMap();
