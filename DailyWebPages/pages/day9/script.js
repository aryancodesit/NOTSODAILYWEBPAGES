document.getElementById("searchBtn").addEventListener("click", () => {
    const word = document.getElementById("wordInput").value.trim();
    const resultDiv = document.getElementById("result");

    if (!word) {
        resultDiv.innerHTML = "<p>Please enter a word to search.</p>";
        return;
    }

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Word not found");
            }
            return response.json();
        })
        .then(data => {
            const meaning = data[0].meanings[0];
            const phonetics = data[0].phonetics.find(p => p.audio) || {};
            
            const wordDetails = `
                <h2>${data[0].word}</h2>
                <p><strong>Part of Speech:</strong> ${meaning.partOfSpeech}</p>
                <p><strong>Definition:</strong> ${meaning.definitions[0].definition}</p>
                ${meaning.definitions[0].example ? `<p><strong>Example:</strong> ${meaning.definitions[0].example}</p>` : ""}
                ${phonetics.audio ? `<audio controls><source src="${phonetics.audio}" type="audio/mpeg">Your browser does not support audio.</audio>` : ""}
            `;
            resultDiv.innerHTML = wordDetails;
        })
        .catch(error => {
            resultDiv.innerHTML = `<p>Word not found. Please try another word.</p>`;
        });
});
