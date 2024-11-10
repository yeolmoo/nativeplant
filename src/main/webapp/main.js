document.addEventListener('DOMContentLoaded', () => {
    const mapImage = document.getElementById('map-image');
    const areas = document.querySelectorAll('area');

    areas.forEach(area => {
        area.addEventListener('mouseover', () => {
            mapImage.style.cursor = 'pointer';
            // Optionally, you can add hover effects here
        });
        area.addEventListener('mouseout', () => {
            mapImage.style.cursor = 'default';
        });
    });
});
