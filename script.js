document.addEventListener('DOMContentLoaded', function() {
    // Define the data structure for topics, subtopics, and languages
    const contentData = {
        quran: {
            topics: {
                "mushabihatulquran": {
                    name: "Mushabihatul Qur'an",
                    subtopics: {
                        "بِسۡمِ اللّٰهِ الرَّحۡمٰنِ الرَّحِیۡمِ": {
                            name: "بِسۡمِ اللّٰهِ الرَّحۡمٰنِ الرَّحِیۡمِ",
                            languages: ["arabic", "english"]
                        },
                        "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِیْنَ": {
                            name: "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِیْنَ",
                            languages: ["arabic", "english"]
                        },
                        "الرَّحۡمٰنِ الرَّحِیۡمِ": {
                            name: "الرَّحۡمٰنِ الرَّحِیۡمِ",
                            languages: ["arabic", "english"]
                        },
                        "مٰلِكِ یَوۡمِ الدِّیۡنِ": {
                            name: "مٰلِكِ یَوۡمِ الدِّیۡنِ",
                            languages: ["arabic", "english"]
                        }
                    }
                },
                "imaan": {
                    name: "Imaan",
                    subtopics: {
                        "The Six Pillars of Iman": {
                            name: "The Six Pillars of Iman",
                            languages: ["english", "bengali", "urdu", "arabic"]
                        },
                        "Belief in Allah": {
                            name: "Belief in Allah",
                            languages: ["english", "arabic"]
                        },
                        "Belief in Angels": {
                            name: "Belief in Angels",
                            languages: ["english", "bengali", "arabic"]
                        },
                        "Belief in Divine Books": {
                            name: "Belief in Divine Books",
                            languages: ["english", "urdu", "arabic"]
                        }
                    }
                },
                "salah": {
                    name: "Salah",
                    subtopics: {
                        "The Five Daily Prayers": {
                            name: "The Five Daily Prayers",
                            languages: ["english", "bengali", "urdu", "arabic"]
                        },
                        "Conditions of Salah": {
                            name: "Conditions of Salah",
                            languages: ["english", "arabic"]
                        },
                        "Pillars of Salah": {
                            name: "Pillars of Salah",
                            languages: ["english", "urdu", "arabic"]
                        },
                        "Sunnah Acts of Salah": {
                            name: "Sunnah Acts of Salah",
                            languages: ["english", "bengali", "arabic"]
                        }
                    }
                },
                "saum": {
                    name: "Saum",
                    subtopics: {
                        "Obligation of Fasting": {
                            name: "Obligation of Fasting",
                            languages: ["english", "bengali", "urdu", "arabic"]
                        },
                        "Conditions of Fasting": {
                            name: "Conditions of Fasting",
                            languages: ["english", "arabic"]
                        },
                        "Acts That Invalidate Fasting": {
                            name: "Acts That Invalidate Fasting",
                            languages: ["english", "urdu", "arabic"]
                        },
                        "Virtues of Ramadan": {
                            name: "Virtues of Ramadan",
                            languages: ["english", "bengali", "arabic"]
                        }
                    }
                }
            }
        },
        hadith: {
            topics: {
                "belief": {
                    name: "Belief (Aqeedah)",
                    subtopics: {
                        "Oneness of Allah": {
                            name: "Oneness of Allah",
                            languages: ["english", "arabic"]
                        },
                        "Prophethood": {
                            name: "Prophethood",
                            languages: ["english", "bengali", "arabic"]
                        },
                        "Hereafter": {
                            name: "Hereafter",
                            languages: ["english", "urdu", "arabic"]
                        },
                        "Divine Decree": {
                            name: "Divine Decree",
                            languages: ["english", "bengali", "urdu", "arabic"]
                        }
                    }
                },
                "worship": {
                    name: "Worship (Ibadah)",
                    subtopics: {
                        "Purification": {
                            name: "Purification",
                            languages: ["english", "arabic"]
                        },
                        "Prayer": {
                            name: "Prayer",
                            languages: ["english", "bengali", "arabic"]
                        },
                        "Charity": {
                            name: "Charity",
                            languages: ["english", "urdu", "arabic"]
                        },
                        "Pilgrimage": {
                            name: "Pilgrimage",
                            languages: ["english", "bengali", "urdu", "arabic"]
                        }
                    }
                },
                "morality": {
                    name: "Morality (Akhlaq)",
                    subtopics: {
                        "Truthfulness": {
                            name: "Truthfulness",
                            languages: ["english", "arabic"]
                        },
                        "Patience": {
                            name: "Patience",
                            languages: ["english", "bengali", "arabic"]
                        },
                        "Humility": {
                            name: "Humility",
                            languages: ["english", "urdu", "arabic"]
                        },
                        "Kindness": {
                            name: "Kindness",
                            languages: ["english", "bengali", "urdu", "arabic"]
                        }
                    }
                },
                "social": {
                    name: "Social Relations",
                    subtopics: {
                        "Family Ties": {
                            name: "Family Ties",
                            languages: ["english", "arabic"]
                        },
                        "Neighbors' Rights": {
                            name: "Neighbors' Rights",
                            languages: ["english", "bengali", "arabic"]
                        },
                        "Business Ethics": {
                            name: "Business Ethics",
                            languages: ["english", "urdu", "arabic"]
                        },
                        "Community Affairs": {
                            name: "Community Affairs",
                            languages: ["english", "bengali", "urdu", "arabic"]
                        }
                    }
                }
            }
        }
    };

    // Get DOM elements
    const sourceSelect = document.getElementById('source');
    const topicSelect = document.getElementById('topic');
    const subtopicSelect = document.getElementById('subtopic');
    const languageSelect = document.getElementById('language');
    const generateBtn = document.getElementById('generate-btn');
    const codeOutput = document.getElementById('code-output');
    const downloadContainer = document.getElementById('download-container');
    const copyBtn = document.getElementById('copy-btn');
    const downloadBtn = document.getElementById('download-btn');

    // Initialize dropdowns
    function initializeDropdowns() {
        // Clear existing options
        topicSelect.innerHTML = '<option value="">Select a topic</option>';
        subtopicSelect.innerHTML = '<option value="">Select a sub-topic</option>';
        languageSelect.innerHTML = '<option value="">Select a language</option>';
        
        // Get selected source
        const selectedSource = sourceSelect.value;
        
        // Populate topics based on source
        if (selectedSource && contentData[selectedSource]) {
            const topics = contentData[selectedSource].topics;
            for (const [value, topic] of Object.entries(topics)) {
                const option = document.createElement('option');
                option.value = value;
                option.textContent = topic.name;
                topicSelect.appendChild(option);
            }
        }
    }

    // Update subtopics when topic changes
    function updateSubtopics() {
        // Clear existing options
        subtopicSelect.innerHTML = '<option value="">Select a sub-topic</option>';
        languageSelect.innerHTML = '<option value="">Select a language</option>';
        
        // Get selected source and topic
        const selectedSource = sourceSelect.value;
        const selectedTopic = topicSelect.value;
        
        // Populate subtopics based on source and topic
        if (selectedSource && selectedTopic && 
            contentData[selectedSource] && 
            contentData[selectedSource].topics[selectedTopic]) {
            
            const subtopics = contentData[selectedSource].topics[selectedTopic].subtopics;
            for (const [value, subtopic] of Object.entries(subtopics)) {
                const option = document.createElement('option');
                option.value = value;
                option.textContent = subtopic.name;
                subtopicSelect.appendChild(option);
            }
        }
    }

    // Update languages when subtopic changes
    function updateLanguages() {
        // Clear existing options
        languageSelect.innerHTML = '<option value="">Select a language</option>';
        
        // Get selected source, topic, and subtopic
        const selectedSource = sourceSelect.value;
        const selectedTopic = topicSelect.value;
        const selectedSubtopic = subtopicSelect.value;
        
        // Populate languages based on source, topic, and subtopic
        if (selectedSource && selectedTopic && selectedSubtopic && 
            contentData[selectedSource] && 
            contentData[selectedSource].topics[selectedTopic] &&
            contentData[selectedSource].topics[selectedTopic].subtopics[selectedSubtopic]) {
            
            const languages = contentData[selectedSource].topics[selectedTopic].subtopics[selectedSubtopic].languages;
            languages.forEach(lang => {
                const option = document.createElement('option');
                option.value = lang;
                option.textContent = lang.charAt(0).toUpperCase() + lang.slice(1);
                languageSelect.appendChild(option);
            });
        }
    }

    // Event listeners
    sourceSelect.addEventListener('change', initializeDropdowns);
    topicSelect.addEventListener('change', updateSubtopics);
    subtopicSelect.addEventListener('change', updateLanguages);

    // Initialize on page load
    initializeDropdowns();

    // Generate button functionality
    generateBtn.addEventListener('click', async function() {
        const source = sourceSelect.value;
        const topic = topicSelect.value;
        const subtopic = subtopicSelect.value;
        const language = languageSelect.value;
        
        if (!source || !topic || !subtopic || !language) {
            alert("Please select all options!");
            return;
        }

        // Clear previous content
        codeOutput.innerHTML = '';
        downloadContainer.classList.add('hidden');
        
        // Show typing animation
        codeOutput.classList.add('typing-animation');
        
        try {
            // Generate filename based on selections
            const filename = `${source}_${topic}_${subtopic.replace(/ /g, '_')}_${language}.txt`;
            
            // Fetch content from the text file
            const response = await fetch(`contents/${filename}`);
            
            if (!response.ok) {
                throw new Error('File not found!');
            }
            
            const textContent = await response.text();
            
            // Simulate typing effect
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < textContent.length) {
                    codeOutput.innerHTML += textContent.charAt(i);
                    codeOutput.scrollTop = codeOutput.scrollHeight;
                    i++;
                } else {
                    clearInterval(typingInterval);
                    codeOutput.classList.remove('typing-animation');
                    downloadContainer.classList.remove('hidden');
                }
            }, 10);
            
        } catch (error) {
            console.error('Error loading content:', error);
            codeOutput.innerHTML = "Error: Content not found. Please check your selections.";
            codeOutput.classList.remove('typing-animation');
        }
    });

    // Copy button functionality
    copyBtn.addEventListener('click', function() {
        const textToCopy = codeOutput.textContent;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check mr-1"></i> Copied!';
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });

    // Download button functionality
    downloadBtn.addEventListener('click', function() {
        const code = codeOutput.textContent;
        const blob = new Blob([code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'islamic-content.txt';
        document.body.appendChild(a);
        a.click();
        
        // Clean up
        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 100);
    });
});