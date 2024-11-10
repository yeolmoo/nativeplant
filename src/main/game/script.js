const locations = [
    {
        name: "Helsinki",
        country: "Finland",
        image: "helsinki.jpeg",
        nativePlants: "Silver Birch, Scots Pine",
        farmerPlants: "Barley, Potatoes",
        typeOfRegion: "Temperate",
        waterScarcityLevel: 1,
        pestRisk: 2,
        soilHealth: 4,
        tip: "During winter, the sun doesn’t set for weeks – get ready for a magical winter wonderland experience!"
    },
    {
        name: "Edinburgh",
        country: "Scotland",
        image: "edinburgh.jpeg",
        nativePlants: "Heather, Scottish Thistle",
        farmerPlants: "Barley, Wheat",
        typeOfRegion: "Temperate",
        waterScarcityLevel: 1,
        pestRisk: 2,
        soilHealth: 4,
        tip: "Edinburgh is known for its festivals, so be sure to check out the Edinburgh Fringe Festival!"
    },
    {
        name: "Lisbon",
        country: "Portugal",
        image: "lisbon.jpeg",
        nativePlants: "Cork Oak, Lavender",
        farmerPlants: "Olives, Grapes",
        typeOfRegion: "Mediterranean",
        waterScarcityLevel: 3,
        pestRisk: 3,
        soilHealth: 3,
        tip: "The best time to visit Lisbon is in spring when the weather is warm but not too hot!"
    },
    {
        name: "Oaxaca",
        country: "Mexico",
        image: "oaxaca.png",
        nativePlants: "Oaxaca Palm, Mexican Pine",
        farmerPlants: "Corn, Agave",
        typeOfRegion: "Tropical",
        waterScarcityLevel: 2,
        pestRisk: 4,
        soilHealth: 3,
        tip: "Oaxaca is the birthplace of mole, so make sure to try this iconic Mexican sauce!"
    },
    {
        name: "Warsaw",
        country: "Poland",
        image: "warsaw.webp",
        nativePlants: "European Beech, White Willow",
        farmerPlants: "Wheat, Potatoes",
        typeOfRegion: "Temperate",
        waterScarcityLevel: 1,
        pestRisk: 2,
        soilHealth: 4,
        tip: "Poland’s autumn foliage is breathtaking, making it the perfect time to visit forests around Warsaw!"
    },
    {
        name: "Riyadh",
        country: "Saudi Arabia",
        image: "riyadh.jpeg",
        nativePlants: "Date Palm, Acacia",
        farmerPlants: "Wheat, Barley",
        typeOfRegion: "Arid",
        waterScarcityLevel: 5,
        pestRisk: 3,
        soilHealth: 2,
        tip: "In Riyadh, don't forget to drink plenty of water – the heat can be intense, especially in summer!"
    },
    {
        name: "Lagos",
        country: "Nigeria",
        image: "lagos.jpeg",
        nativePlants: "Oil Palm, Bamboo",
        farmerPlants: "Cassava, Yams",
        typeOfRegion: "Tropical",
        waterScarcityLevel: 2,
        pestRisk: 4,
        soilHealth: 4,
        tip: "Lagos is known for its vibrant arts scene, so be sure to visit some of the city's museums and galleries!"
    },
    {
        name: "Durban",
        country: "South Africa",
        image: "durban.jpeg",
        nativePlants: "Yellowwood, Protea",
        farmerPlants: "Sugar Cane, Maize",
        typeOfRegion: "Tropical",
        waterScarcityLevel: 3,
        pestRisk: 3,
        soilHealth: 4,
        tip: "Durban's beaches are famous for surfing, so if you're into water sports, it's a must-visit!"
    }
];


// Letters and their IDs for the "HELLO WORLD" sequence
const letters = ["h", "e", "l", "l2", "o", "w", "r", "l3", "d"];
// Keeping track of how many times each letter has appeared
let letterCounts = {
    h: 0,
    e: 0,
    l: 0,
    l2: 0,
    o: 0,
    w: 0,
    r: 0,
    l3: 0,
    d: 0
};

// To track whether we've darkened the first or second 'O'
let oHasAppearedOnce = false; // For the 'O' in HELLO or WORLD

// Get a random location
function getRandomLocation() {
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    return randomLocation;
}

// Update the letter panel by darkening the appropriate letter
function updateLetterPanel(firstLetter) {
    const firstLetterLower = firstLetter.toLowerCase();

    // Handle 'L' and 'O' specifically
    if (firstLetterLower === 'l') {
        if (letterCounts.l < 1) {
            document.getElementById('l').style.color = "black"; // First 'L'
            letterCounts.l++;
        } else if (letterCounts.l === 1 && letterCounts.l2 < 1) {
            document.getElementById('l2').style.color = "black"; // Second 'L'
            letterCounts.l2++;
        } else if (letterCounts.l2 === 1 && letterCounts.l3 < 1) {
            document.getElementById('l3').style.color = "black"; // Third 'L'
            letterCounts.l3++;
        }
    } else if (firstLetterLower === 'o') {
        if (!oHasAppearedOnce) {
            // Darken the 'O' in HELLO (first occurrence)
            document.getElementById('o').style.color = "black";
            letterCounts.o++;
            oHasAppearedOnce = true; // Mark that the first 'O' has been darkened
        } else {
            // Darken the 'O' in WORLD (second occurrence)
            document.getElementById('o2').style.color = "black";
            letterCounts.o2++;
        }
    } else {
        // For all other letters, just darken once when it's triggered
        if (letterCounts[firstLetterLower] === 0) {
            document.getElementById(firstLetterLower).style.color = "black";
            letterCounts[firstLetterLower]++;
        }
    }
}

document.getElementById("locationBtn").addEventListener("click", function() {
    const randomLocation = getRandomLocation();

    document.getElementById("locationName").textContent = `${randomLocation.name} (${randomLocation.country})`;
    document.getElementById("locationImage").src = randomLocation.image;
    document.getElementById("nativePlants").textContent = `Native Plants: ${randomLocation.nativePlants}`;
    document.getElementById("farmerGrownPlants").textContent = `Farmer Grown Plants: ${randomLocation.farmerPlants}`;
    document.getElementById("locationTypeOfRegion").textContent = `Type of Region: ${randomLocation.typeOfRegion}`;
    document.getElementById("locationWaterScarcity").textContent = `Water Scarcity Level: ${randomLocation.waterScarcityLevel}`;
    document.getElementById("locationPestRisk").textContent = `Pest Risk: ${randomLocation.pestRisk}`;
    document.getElementById("locationSoilHealth").textContent = `Soil Health: ${randomLocation.soilHealth}`;
    document.getElementById("locationTip").textContent = `Tip: ${randomLocation.tip}`;

    // Check if the country name starts with a letter from 'HELLO WORLD'
    updateLetterPanel(randomLocation.name.charAt(0));
});

// Select elements
const moonIcon = document.getElementById('moonIcon');
const body = document.body;

// Event listener for moon icon click
moonIcon.addEventListener('click', () => {
    // Toggle between day and night background
    if (body.style.backgroundImage === 'url("night.png")') {
        body.style.backgroundImage = 'url("day.png")';
    } else {
        body.style.backgroundImage = 'url("night.png")';
    }
});


// Add event listener to the moon icon
moonIcon.addEventListener("click", toggleBackground);

document.getElementById("locationBtn").addEventListener("click", function() {
    const randomLocation = getRandomLocation();

    // Update the location details
    document.getElementById("locationName").textContent = `${randomLocation.name} (${randomLocation.country})`;
    document.getElementById("locationImage").src = randomLocation.image;
    document.getElementById("nativePlants").textContent = `Native Plants: ${randomLocation.nativePlants}`;
    document.getElementById("farmerGrownPlants").textContent = `Farmer Grown Plants: ${randomLocation.farmerPlants}`;
    document.getElementById("locationTypeOfRegion").textContent = `Type of Region: ${randomLocation.typeOfRegion}`;
    document.getElementById("locationWaterScarcity").textContent = `Water Scarcity Level: ${randomLocation.waterScarcityLevel}`;
    document.getElementById("locationPestRisk").textContent = `Pest Risk: ${randomLocation.pestRisk}`;
    document.getElementById("locationSoilHealth").textContent = `Soil Health: ${randomLocation.soilHealth}`;
    document.getElementById("locationTip").textContent = `Tip: ${randomLocation.tip}`;

    // Check if the country name starts with a letter from 'HELLO WORLD'
    updateLetterPanel(randomLocation.name.charAt(0));
});
