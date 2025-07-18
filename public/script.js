// script.js
document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('questions-container');
    const submitBtn = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result-container');
    const resultDiv = document.getElementById('result');
    const errorMessage = document.getElementById('error-message');

    console.log('script.js loaded');

    // Fetch questions using relative URL
    console.log('Fetching questions from /get-questions');
    fetch('/get-questions', { 
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    })
        .then(response => {
            console.log('Response status:', response.status, response.statusText);
            console.log('Response headers:', [...response.headers.entries()]);
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(questions => {
            console.log('Received questions:', Object.keys(questions).length, 'questions');
            if (Object.keys(questions).length === 0) {
                throw new Error('No questions received from server');
            }
            renderQuestions(questions);
        })
        .catch(error => {
            console.error('Fetch error:', error.message);
            errorMessage.textContent = 'Error loading questions. Open console (F12) for details.';
            questionsContainer.textContent = 'Failed to load questions.';
        });

    function renderQuestions(questions) {
        console.log('Rendering questions');
        questionsContainer.innerHTML = '';
        Object.keys(questions).sort((a, b) => parseInt(a) - parseInt(b)).forEach(qNum => {
            const question = questions[qNum];
            console.log(`Question ${qNum}: ${question.text}`);
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.innerHTML = `<h3>${qNum}. ${question.text}</h3>`;
            Object.keys(question.options).forEach(opt => {
                const option = question.options[opt];
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                optionDiv.innerHTML = `
                    <input type="radio" name="q${qNum}" value="${opt}" id="q${qNum}-${opt}">
                    <label for="q${qNum}-${opt}">${option.text}</label>
                `;
                questionDiv.appendChild(optionDiv);
            });
            questionsContainer.appendChild(questionDiv);
        });

        questionsContainer.addEventListener('change', () => {
            const answered = document.querySelectorAll('input[type="radio"]:checked').length;
            console.log(`Answered: ${answered}/50`);
            submitBtn.disabled = answered !== 50;
            errorMessage.textContent = answered < 50 ? `Please answer all 50 questions (currently ${answered}).` : '';
        });

        document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('mousedown', function(e) {
        if (this.checked) {
            this.wasChecked = true;
        } else {
            this.wasChecked = false;
        }
    });
    radio.addEventListener('click', function(e) {
        if (this.wasChecked) {
            this.checked = false;
        }
    });
});
    }

    submitBtn.addEventListener('click', () => {
        console.log('Submit button clicked');
        errorMessage.textContent = '';
        resultContainer.style.display = 'none';
        const answers = {};
        document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
            const qNum = radio.name.replace('q', '');
            answers[qNum] = radio.value;
        });
        console.log('Submitting answers:', answers);

        fetch('/submit-answers', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ answers })
        })
        .then(response => {
            console.log('Submit response status:', response.status, response.statusText);
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Submit response:', data);
            if (data.error) {
                errorMessage.textContent = data.error;
                return;
            }
            const suggestion = data.suggestions[0];
            resultDiv.innerHTML = `
                <h3>${suggestion.name}</h3>
                <p>${suggestion.description}</p>
                <p>Match Score: ${suggestion.match_score.toFixed(2)}</p>
            `;
            resultContainer.style.display = 'block';
            window.scrollTo(0, resultContainer.offsetTop);
        })
        .catch(error => {
            console.error('Submit error:', error.message);
            errorMessage.textContent = 'Error submitting answers. Open console (F12).';
        });
    });
});