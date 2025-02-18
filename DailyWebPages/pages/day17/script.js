// List of legitimate words
const words = [
    "Galaxy", "Pineapple", "Rocket", "Serene", "Lantern", "Sapphire", "Quantum", "Mirage", "Dolphin", 
    "Twilight", "Vortex", "Echo", "Nebula", "Tranquil", "Odyssey", "Crystal", "Horizon", "Thunder", 
    "Cipher", "Cobalt", "Revelation", "Specter", "Zephyr", "Cascade", "Luminous", "Pinnacle", "Mystic", 
    "Aurora", "Eclipse", "Raven", "Crescent", "Solitude", "Momentum", "Radiant", "Frost", "Inferno", "Tempest", 
    "Comet", "Astral", "Vivid", "Fathom", "Whisper", "Nebulous", "Jade", "Equinox", "Frostbite", "Excalibur", 
    "Phantom", "Vanguard", "Zenith", "Harmonic", "Lustrous", "Spectral", "Obsidian", "Mystify", "Blaze", "Thrive", "Aether", 
    "Endeavor", "Vortex", "Breeze", "Celestial", "Cinder", "Tranquility", "Storm", "Shimmer", "Mirage", "Horizon", 
    "Wisp", "Radiance", "Noble", "Pursuit", "Legacy", "Voyage", "Solstice", "Pursuit", "Reverie", "Ardor", "Serenity",
     "Basilisk", "Dusk", "Ember", "Dream", "Abyss", "Nova", "Vanguard", "Embrace", "Infernal", "Dawn", "Fable", 
     "Haven", "Pulse", "Celestial", "Reverence", "Rapture", "Nightfall", "Labyrinth", "Eon", "Shroud", "Vigil", 
     "Trinity", "Ascendant", "Rapture", "Cloak", "Odyssey", "Aeon", "Fracture", "Exult", "Blaze", "Silver", 
     "Oblivion", "Fracture", "Zenith", "Quasar", "Aegis", "Sear", "Nocturne", "Fathom", "Abyss", "Torrent", 
     "Luminous", "Omen", "Onyx", "Tide", "Eon", "Wander", "Glide", "Eclipse", "Lucid", "Mirage", "Revelation", 
     "Storm", "Echo", "Sapphire", "Zephyr", "Azure", "Rebirth", "Majesty", "Vortex", "Phoenix", "Onyx", "Whisper", 
     "Seraph", "Venture", "Luminous", "Solace", "Chimera", "Twilight", "Sentinel", "Caliber", "Glory", "Traverse", 
     "Scintilla", "Ember", "Rift", "Zenith", "Chronos", "Quest", "Lucid", "Rogue", "Euphoria", "Odyssey", "Seraph", 
     "Frost", "Blaze", "Elysian", "Mysterium", "Flare", "Celeste", "Shroud", "Dream", "Vanguard", "Celestial", 
     "Tempest", "Nebula", "Spectre", "Vivid", "Inferno", "Omen", "Silent", "Titan", "Drift", "Nebula", "Radiant", 
     "Wander", "Lustrous", "Ember", "Eclipse", "Echo", "Stellar", "Twilight", "Phantom", "Cinder", "Echo", 
     "Journey", "Lunar", "Wanderer", "Astral", "Legacy", "Allegro", "Throne", "Pulse", "Veil", "Serene", 
     "Whisper", "Nimbus", "Frost", "Astral", "Aether", "Sentinel", "Echo", "Cloak", "Glint", "Enigma", 
     "Reverence", "Infernal", "Glory", "Serenity", "Abyss", "Lucid", "Maverick", "Astra", "Elysium", "Cascade", 
     "Chasm", "Reverberation", "Euphoria", "Silent", "Phoenix", "Flicker", "Shine", "Bolt", "Blaze" 
    
]

// Function to generate a password with words and numbers
function generatePassword() {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const randomNumber = Math.floor(Math.random() * 100);  // Add a random number between 0 and 99
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?"; // Special characters for added complexity
    const randomChar = specialChars[Math.floor(Math.random() * specialChars.length)];  // Random special character

    // Combining the word, number, and special character to form the password
    const password = `${randomWord}${randomNumber}${randomChar}`;
    return password;
}

// Function to check password strength
function checkPasswordStrength(password) {
    const strengthText = document.getElementById("passwordStrength");
    let strength = 0;

    // Check password length
    if (password.length >= 8) strength++;

    // Check for uppercase and lowercase letters
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++;

    // Check for numbers
    if (/\d/.test(password)) strength++;

    // Check for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    // Display strength
    if (strength === 0) {
        strengthText.textContent = "Weak password";
        strengthText.style.color = "red";
    } else if (strength === 1) {
        strengthText.textContent = "Fair password";
        strengthText.style.color = "orange";
    } else if (strength === 2) {
        strengthText.textContent = "Good password";
        strengthText.style.color = "yellowgreen";
    } else if (strength === 3) {
        strengthText.textContent = "Strong password";
        strengthText.style.color = "green";
    }
}

// Event listener for password generation
document.getElementById("generatePassword").addEventListener("click", () => {
    const password = generatePassword();  // Generate a password using words and numbers
    document.getElementById("generatedPassword").textContent = password;
    checkPasswordStrength(password);
});

// Event listener for password strength checking
document.getElementById("passwordInput").addEventListener("input", (event) => {
    const password = event.target.value;
    checkPasswordStrength(password);
});
