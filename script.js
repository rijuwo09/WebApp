function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}

function showTickets() {
    document.getElementById('my-tickets').style.display = 'block';
}

function openSettings() {
    alert('Einstellungen werden hier hinzugefügt.');
}

// Standardmäßig die Karte anzeigen
document.addEventListener('DOMContentLoaded', () => {
    showPage('karte');
});

// Karte initialisieren
function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const mapDiv = document.getElementById('map');
            mapDiv.innerHTML = `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`;
            // Hier könntest du eine hübschere Karte einbinden, z.B. OpenStreetMap
        });
    } else {
        alert('Geolocation wird von diesem Browser nicht unterstützt.');
    }
}

document.addEventListener('DOMContentLoaded', initMap);
