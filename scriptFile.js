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
    console.log(id);

    // Update counter if this panel has not been viewed
    if (id.style.backgroundColor != 'darkgray'){
        // Update art viewed counter
        artCounter++;
        updateCounter();

        // Change background color
        id.style.backgroundColor = 'darkgray';
    }
}

// Handles adding a new art panel
function addArtPanel(){
    const newPanel = document.createElement("div");
    newPanel.className = "art-panel";
    newPanel.textContent = "test";
    newPanel.id = `art-panel-${panelCounter}}`;
    // TODO: Remove log statements
    console.log(newPanel.id);

    // Set panel background color
    newPanel.style.backgroundColor = '#eee';
    // newPanel.style.border = '1px solid #ccc';
    // newPanel.style.borderRadius = '1opx';
    // newPanel.style.padding = '20px';
    // newPanel.style.textAlign = 'center';
    // newPanel.style.transition = 'background-color 0.3s, transform 0.3s';

    // Add hover functionality
    newPanel.addEventListener("mouseover", () => {
        newPanel.style.transform = 'scale(1.05)';
    });

    newPanel.addEventListener("mouseout", () => {
        newPanel.style.transform = 'scale(1.0)';
    });
    
    // Append the new art panel into the art-grid
    document.getElementsByClassName("art-grid")[0].appendChild(newPanel);

    // Add event listener to art panel
    newPanel.addEventListener('click', function() {artPanelViewed(document.getElementById(newPanel.id))});
    
    // Add panel to panel id array
    artPanelIds.push(document.getElementById(newPanel.id))
    
    // Increment panel counter
    panelCounter++;
}

// Add art panel on button press
document.getElementById("add-art-button").addEventListener("click", addArtPanel);

// Updates the Artworks Viewed counter
function updateCounter(){
    document.getElementById('counter').textContent = `Artworks Viewed: ${artCounter}`;
}

var artCounter = 0;
var panelCounter = 3;
var artPanelIds = [document.getElementById('art-panel-0'), 
    document.getElementById('art-panel-1'), 
    document.getElementById('art-panel-2')]

// Add event listeners for default art panels
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