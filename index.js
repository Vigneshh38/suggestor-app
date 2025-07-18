const express = require('express');
const cors = require('cors');
const path = require('path');
const { QUESTIONS } = require('./data_models');
const { calculateUserProfile, findMatchingCareers } = require('./logic');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve questions
app.get('/get-questions', (req, res) => {
    res.json(QUESTIONS);
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Submit answers
app.post('/submit-answers', (req, res) => {
    const data = req.body;
    if (!data || !data.answers) {
        return res.status(400).json({ error: "Missing 'answers' in request body" });
    }
    const userAnswers = data.answers;
    if (typeof userAnswers !== 'object') {
        return res.status(400).json({ error: "'answers' should be an object/dictionary" });
    }
    try {
        const userProfile = calculateUserProfile(userAnswers);
        const suggestions = findMatchingCareers(userProfile);
        res.json({
            user_profile: userProfile,
            suggestions: suggestions
        });
    } catch (e) {
        console.error("Error processing /submit-answers:", e);
        res.status(500).json({ error: "An internal server error occurred." });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
