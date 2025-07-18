import math
from data_models import QUESTIONS, CAREERS, TRAITS

def calculate_user_profile(answers):
    """
    Calculates the user's trait scores based on their answers.

    Args:
        answers (dict): A dictionary where keys are question numbers (str)
                        and values are the chosen options (str), e.g., {"1": "a", "2": "c"}

    Returns:
        dict: A dictionary mapping trait names to calculated scores.
              e.g., {"Investigative": 12.5, "Artistic": 6, ...}
    """
    profile = {trait: 0 for trait in TRAITS}  # Initialize scores to zero

    for q_num, chosen_option in answers.items():
        if q_num in QUESTIONS and chosen_option in QUESTIONS[q_num]["options"]:
            option_data = QUESTIONS[q_num]["options"][chosen_option]
            if option_data["trait"] != "None" and option_data["trait"] in profile:
                profile[option_data["trait"]] += option_data["score"]
            if "trait2" in option_data and option_data["trait2"] != "None" and option_data["trait2"] in profile:
                profile[option_data["trait2"]] += option_data["score2"]
        else:
            print(f"Warning: Invalid question number '{q_num}' or option '{chosen_option}' in answers.")

    return profile

def find_matching_careers(user_profile, top_n=1):
    """
    Finds the single best-matching career using Euclidean distance.

    Args:
        user_profile (dict): The user's calculated trait scores.
        top_n (int): Ignored; kept for compatibility. Always returns one match.

    Returns:
        list: A single-item list containing a dictionary with career details.
              Format: [{'id': career_id, 'name': career_name, 'match_score': score, 'description': description}]
    """
    if not user_profile:  # Handle empty profile case
        return []

    best_match = None
    lowest_score = float('inf')

    for career_id, career_data in CAREERS.items():
        distance_sq = 0
        for trait in TRAITS:
            user_score = user_profile.get(trait, 0)
            career_score = career_data.get("ideal_profile", {}).get(trait, 0)
            distance_sq += (user_score - career_score) ** 2

        match_score = math.sqrt(distance_sq)
        if match_score < lowest_score:
            lowest_score = match_score
            best_match = {
                'id': career_id,
                'name': career_data['name'],
                'match_score': match_score,
                'description': career_data['description']
            }

    return [best_match] if best_match else []

print("Core logic functions defined.")