const { QUESTIONS, CAREERS, TRAITS } = require('./data_models');

function calculateUserProfile(answers) {
    const profile = {};
    TRAITS.forEach(trait => profile[trait] = 0);

    Object.entries(answers).forEach(([qNum, chosenOption]) => {
        if (QUESTIONS[qNum] && QUESTIONS[qNum].options[chosenOption]) {
            const optionData = QUESTIONS[qNum].options[chosenOption];
            if (optionData.trait !== "None" && profile.hasOwnProperty(optionData.trait)) {
                profile[optionData.trait] += optionData.score;
            }
            if (optionData.trait2 && optionData.trait2 !== "None" && profile.hasOwnProperty(optionData.trait2)) {
                profile[optionData.trait2] += optionData.score2;
            }
        } else {
            console.warn(`Warning: Invalid question number '${qNum}' or option '${chosenOption}' in answers.`);
        }
    });

    return profile;
}

function findMatchingCareers(userProfile) {
    if (!userProfile) return [];

    let bestMatch = null;
    let lowestScore = Infinity;

    Object.entries(CAREERS).forEach(([careerId, careerData]) => {
        let distanceSq = 0;
        TRAITS.forEach(trait => {
            const userScore = userProfile[trait] || 0;
            const careerScore = (careerData.ideal_profile && careerData.ideal_profile[trait]) || 0;
            distanceSq += Math.pow(userScore - careerScore, 2);
        });
        const matchScore = Math.sqrt(distanceSq);
        if (matchScore < lowestScore) {
            lowestScore = matchScore;
            bestMatch = {
                id: careerId,
                name: careerData.name,
                match_score: matchScore,
                description: careerData.description
            };
        }
    });

    return bestMatch ? [bestMatch] : [];
}

module.exports = { calculateUserProfile, findMatchingCareers };
