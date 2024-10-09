/**
 * Name: Sean Burke
 * Class: 332 - Web Development
 * Assignment: HW5
 * Last Modified: 10/8/24
 */

// List of additional artworks to add dynamically
const newArtworks = [
    {
        title: "The Scream",
        artist: "Edvard Munch",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "The Birth of Venus",
        artist: "Sandro Botticelli",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "The Night Watch",
        artist: "Rembrandt van Rijn",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "The Kiss",
        artist: "Gustav Klimt",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "American Gothic",
        artist: "Grant Wood",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "Las Meninas",
        artist: "Diego Velázquez",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "The Last Supper",
        artist: "Leonardo da Vinci",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "Water Lilies",
        artist: "Claude Monet",
        img: "https://via.placeholder.com/200",
    },
    {
        title: "Starry Night Over the Rhône",
        artist: "Vincent van Gogh",
        img: "https://via.placeholder.com/200",
    },
];

let artCounter = 0;
let panelCounter = 3;
const artPanelIds = [
    document.getElementById("art-panel-0"),
    document.getElementById("art-panel-1"),
    document.getElementById("art-panel-2"),
];

// Handles art panel view tracking
function artPanelViewed(id) {
    // Update counter if this panel has not been viewed
    if (id.style.backgroundColor != "darkgray") {
        // Update art viewed counter
        artCounter++;
        updateCounter();

        // Change background color
        id.style.backgroundColor = "darkgray";
    }
}

// Handles adding a new art panel
function addArtPanel() {
    const newPanel = document.createElement("div");
    newPanel.className = "art-panel";
    newPanel.id = `art-panel-${panelCounter}}`;
    const newArtIndex = Math.floor(Math.random() * 11);

    // Set panel background color
    newPanel.style.backgroundColor = "#eee";

    // Add hover functionality
    newPanel.addEventListener("mouseover", () => {
        newPanel.style.transform = "scale(1.05)";
    });

    newPanel.addEventListener("mouseout", () => {
        newPanel.style.transform = "scale(1.0)";
    });

    // Append the new art panel into the art-grid
    document.getElementsByClassName("art-grid")[0].appendChild(newPanel);

    // Add event listener to art panel
    newPanel.addEventListener("click", function () {
        artPanelViewed(document.getElementById(newPanel.id));
    });

    // Add art panel content
    // Add the image
    const image = document.createElement("img");
    image.src = newArtworks[newArtIndex].img;
    document.getElementById(newPanel.id).appendChild(image);

    // Add title and artist
    const p = document.createElement("p");
    const divText = `<p>${newArtworks[newArtIndex].title} by ${
        newArtworks[newArtIndex].artist
    }`;
    p.innerHTML = divText;
    document.getElementById(newPanel.id).appendChild(p);

    // Add panel to panel id array
    artPanelIds.push(document.getElementById(newPanel.id));

    // Increment panel counter
    panelCounter++;
}

// Add art panel on button press
document.getElementById("add-art-button").addEventListener(
    "click",
    addArtPanel,
);

// Updates the Artworks Viewed counter
function updateCounter() {
    document.getElementById("counter").textContent =
        `Artworks Viewed: ${artCounter}`;
}

// Add event listeners for default art panels
for (let i = 0; i < artPanelIds.length; i++) {
    artPanelIds[i].addEventListener("click", function () {
        artPanelViewed(artPanelIds[i]);
    });
}

// Add event listener for Reset button and reset counter and art panel backgrounds
document.getElementById("reset-button").addEventListener("click", function () {
    // Update art viewed counter
    artCounter = 0;
    updateCounter();

    // Reset art panel background colors
    for (let i = 0; i < artPanelIds.length; i++) {
        artPanelIds[i].style.backgroundColor = "#eee";
    }
});

