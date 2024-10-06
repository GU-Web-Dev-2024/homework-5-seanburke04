// List of additional artworks to add dynamically
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];
// Add your JavaScript code here.
        
// Handles art panel view tracking
function artPanelViewed(id){
    // Update counter if this panel has not been viewed
    if (id.style.backgroundColor != 'darkgray'){
        // Update art viewed counter
        artCounter++;
        updateCounter();

        // Change background color
        id.style.backgroundColor = 'darkgray';
    }
}

// Updates the Artworks Viewed counter
function updateCounter(){
    document.getElementById('counter').textContent = `Artworks Viewed: ${artCounter}`;
}

var artCounter = 0;
var artPanelIds = [document.getElementById('art-panel-0'), 
    document.getElementById('art-panel-1'), 
    document.getElementById('art-panel-2')]

// Add event listeners for each art panel
for(let i = 0; i < artPanelIds.length; i++){
    artPanelIds[i].addEventListener('click', function() {artPanelViewed(artPanelIds[i])});
}

// Add event listener for Reset button and reset counter and art panel backgrounds
document.getElementById('reset-button').addEventListener('click', function() {
    // Update art viewed counter
    artCounter = 0;
    updateCounter();

    // Reset art panel background colors
    for(let i = 0; i < artPanelIds.length; i++){
        artPanelIds[i].style.backgroundColor = '#eee';
    }
});