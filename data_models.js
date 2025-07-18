const TRAITS = ["Investigative", "Artistic", "Realistic", "Social", "Enterprising", "Conventional"]


const QUESTIONS = {
    "1": {
        "text": "Which subjects do you enjoy most in school?",
        "options": {
            "a": {"text": "Math & Science", "trait": "Investigative", "score": 1.0},
            "b": {"text": "English & History", "trait": "Artistic", "score": 0.5, "trait2": "Social", "score2": 0.5},
            "c": {"text": "Art & Design", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Physical Education & Sports", "trait": "Realistic", "score": 1.0}
        }
    },
    "2": {
        "text": "How do you prefer to work?",
        "options": {
            "a": {"text": "In a team", "trait": "Social", "score": 1.0},
            "b": {"text": "Independently", "trait": "Investigative", "score": 1.0},
            "c": {"text": "A combination of both", "trait": "Social", "score": 0.5, "trait2": "Investigative", "score2": 0.5},
            "d": {"text": "I’m unsure", "trait": "None", "score": 0}
        }
    },
    "3": {
        "text": "What motivates you to work hard?",
        "options": {
            "a": {"text": "Solving complex problems", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Helping others", "trait": "Social", "score": 1.0},
            "c": {"text": "Creative expression", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Earning a good salary", "trait": "Enterprising", "score": 1.0}
        }
    },
    "4": {
        "text": "How do you prefer to learn?",
        "options": {
            "a": {"text": "Through hands-on activities", "trait": "Realistic", "score": 1.0},
            "b": {"text": "Reading books or articles", "trait": "Investigative", "score": 0.5, "trait2": "Artistic", "score2": 0.5},
            "c": {"text": "Listening to lectures", "trait": "Social", "score": 1.0},
            "d": {"text": "Visual aids, such as videos", "trait": "Artistic", "score": 1.0}
        }
    },
    "5": {
        "text": "Which type of environment do you feel most comfortable in?",
        "options": {
            "a": {"text": "A busy office or laboratory", "trait": "Investigative", "score": 0.5, "trait2": "Conventional", "score2": 0.5},
            "b": {"text": "Outdoors or in nature", "trait": "Realistic", "score": 1.0},
            "c": {"text": "A creative studio or gallery", "trait": "Artistic", "score": 1.0},
            "d": {"text": "A quiet place where I can focus", "trait": "Investigative", "score": 1.0}
        }
    },
    "6": {
        "text": "How would you describe your personality?",
        "options": {
            "a": {"text": "Logical and analytical", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Compassionate and helpful", "trait": "Social", "score": 1.0},
            "c": {"text": "Creative and imaginative", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Energetic and social", "trait": "Enterprising", "score": 1.0}
        }
    },
    "7": {
        "text": "Do you prefer working with:",
        "options": {
            "a": {"text": "Data and numbers", "trait": "Conventional", "score": 1.0},
            "b": {"text": "People and emotions", "trait": "Social", "score": 1.0},
            "c": {"text": "Ideas and concepts", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Physical tasks or hands-on work", "trait": "Realistic", "score": 1.0}
        }
    },
    "8": {
        "text": "What kind of impact do you want to have on the world?",
        "options": {
            "a": {"text": "Improve people’s lives through science or technology", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Help others through counseling or social work", "trait": "Social", "score": 1.0},
            "c": {"text": "Express ideas through art or design", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Lead and inspire others", "trait": "Enterprising", "score": 1.0}
        }
    },
    "9": {
        "text": "Which of these do you find most interesting?",
        "options": {
            "a": {"text": "Machines and how they work", "trait": "Investigative", "score": 0.5, "trait2": "Realistic", "score2": 0.5},
            "b": {"text": "Solving human problems and conflicts", "trait": "Social", "score": 1.0},
            "c": {"text": "Expressing feelings or ideas through art", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Organizing and planning events or projects", "trait": "Enterprising", "score": 1.0}
        }
    },
    "10": {
        "text": "Do you prefer:",
        "options": {
            "a": {"text": "Working with technology and gadgets", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Working with people directly", "trait": "Social", "score": 1.0},
            "c": {"text": "Working in a creative or artistic field", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Working in a hands-on, practical field", "trait": "Realistic", "score": 1.0}
        }
    },
    "11": {
        "text": "Which of the following sounds most appealing?",
        "options": {
            "a": {"text": "Being a doctor or engineer", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Being a teacher or social worker", "trait": "Social", "score": 1.0},
            "c": {"text": "Being an artist or graphic designer", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Being a manager or entrepreneur", "trait": "Enterprising", "score": 1.0}
        }
    },
    "12": {
        "text": "What kind of challenges do you like to face?",
        "options": {
            "a": {"text": "Solving technical problems", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Helping others overcome obstacles", "trait": "Social", "score": 1.0},
            "c": {"text": "Creating something new", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Managing teams or organizing projects", "trait": "Enterprising", "score": 1.0}
        }
    },
    "13": {
        "text": "How do you feel about traveling for work?",
        "options": {
            "a": {"text": "I love to travel and explore new places", "trait": "Enterprising", "score": 1.0},
            "b": {"text": "I would prefer not to travel much", "trait": "Conventional", "score": 1.0},
            "c": {"text": "I’m open to occasional travel", "trait": "Social", "score": 0.5, "trait2": "Enterprising", "score2": 0.5},
            "d": {"text": "I would love to travel but only if it aligns with my career", "trait": "None", "score": 0}
        }
    },
    "14": {
        "text": "What’s more important to you in a career?",
        "options": {
            "a": {"text": "Financial stability", "trait": "Conventional", "score": 1.0},
            "b": {"text": "Making a difference in the world", "trait": "Social", "score": 1.0},
            "c": {"text": "Creative freedom", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Personal growth and development", "trait": "Enterprising", "score": 1.0}
        }
    },
    "15": {
        "text": "Which of these would you be most excited about?",
        "options": {
            "a": {"text": "Developing new technologies", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Helping people heal or learn", "trait": "Social", "score": 1.0},
            "c": {"text": "Designing something beautiful", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Leading a company or team", "trait": "Enterprising", "score": 1.0}
        }
    },
    "16": {
        "text": "How do you approach decision-making?",
        "options": {
            "a": {"text": "I rely on facts and data", "trait": "Investigative", "score": 1.0},
            "b": {"text": "I listen to others' advice", "trait": "Social", "score": 1.0},
            "c": {"text": "I trust my gut feeling", "trait": "Artistic", "score": 1.0},
            "d": {"text": "I like to weigh all options carefully", "trait": "Conventional", "score": 1.0}
        }
    },
    "17": {
        "text": "How much interaction with others do you want in your job?",
        "options": {
            "a": {"text": "Very little; I prefer to work alone", "trait": "Investigative", "score": 1.0},
            "b": {"text": "A lot; I enjoy working with others", "trait": "Social", "score": 1.0},
            "c": {"text": "A balance of both", "trait": "Social", "score": 0.5, "trait2": "Investigative", "score2": 0.5},
            "d": {"text": "I’m not sure yet", "trait": "None", "score": 0}
        }
    },
    "18": {
        "text": "Which of these roles sounds the most exciting to you?",
        "options": {
            "a": {"text": "Software developer or engineer", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Teacher or psychologist", "trait": "Social", "score": 1.0},
            "c": {"text": "Artist or filmmaker", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Entrepreneur or business leader", "trait": "Enterprising", "score": 1.0}
        }
    },
    "19": {
        "text": "What would be your dream job?",
        "options": {
            "a": {"text": "A scientist or researcher", "trait": "Investigative", "score": 1.0},
            "b": {"text": "A therapist or counselor", "trait": "Social", "score": 1.0},
            "c": {"text": "A musician or writer", "trait": "Artistic", "score": 1.0},
            "d": {"text": "A CEO or manager", "trait": "Enterprising", "score": 1.0}
        }
    },
    "20": {
        "text": "How do you like to spend your free time?",
        "options": {
            "a": {"text": "Working on projects or experiments", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Volunteering or helping others", "trait": "Social", "score": 1.0},
            "c": {"text": "Creating or performing", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Networking or organizing events", "trait": "Enterprising", "score": 1.0}
        }
    },
    "21": {
        "text": "Would you prefer a career that is:",
        "options": {
            "a": {"text": "Well-structured and predictable", "trait": "Conventional", "score": 1.0},
            "b": {"text": "Flexible and ever-Changing", "trait": "Enterprising", "score": 1.0},
            "c": {"text": "Focused on self-expression", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Focused on leading and managing", "trait": "Enterprising", "score": 1.0}
        }
    },
    "22": {
        "text": "How do you feel about leadership roles?",
        "options": {
            "a": {"text": "I enjoy leading and making decisions", "trait": "Enterprising", "score": 1.0},
            "b": {"text": "I prefer to support others in leadership", "trait": "Social", "score": 1.0},
            "c": {"text": "I’m interested but not sure how to lead", "trait": "None", "score": 0},
            "d": {"text": "I prefer not to lead at all", "trait": "Investigative", "score": 1.0}
        }
    },
    "23": {
        "text": "How much value do you place on job security?",
        "options": {
            "a": {"text": "Very important", "trait": "Conventional", "score": 1.0},
            "b": {"text": "Somewhat important", "trait": "Conventional", "score": 0.5, "trait2": "Social", "score2": 0.5},
            "c": {"text": "Not important to me", "trait": "Enterprising", "score": 1.0},
            "d": {"text": "I’m not sure", "trait": "None", "score": 0}
        }
    },
    "24": {
        "text": "What type of work would you prefer to do?",
        "options": {
            "a": {"text": "Analytical and problem-solving tasks", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Helping people and offering support", "trait": "Social", "score": 1.0},
            "c": {"text": "Creative and expressive tasks", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Managing and organizing work", "trait": "Enterprising", "score": 1.0}
        }
    },
    "25": {
        "text": "Are you interested in a career in the following areas?",
        "options": {
            "a": {"text": "Technology", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Health & medicine", "trait": "Social", "score": 1.0},
            "c": {"text": "Arts & entertainment", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Business & entrepreneurship", "trait": "Enterprising", "score": 1.0}
        }
    },
    "26": {
        "text": "How do you feel about the possibility of having to relocate for work?",
        "options": {
            "a": {"text": "I would be excited about moving to a new place", "trait": "Enterprising", "score": 1.0},
            "b": {"text": "I’d prefer to stay close to family and friends", "trait": "Social", "score": 1.0},
            "c": {"text": "I’m open to it if necessary", "trait": "None", "score": 0},
            "d": {"text": "I’m not sure", "trait": "None", "score": 0}
        }
    },
    "27": {
        "text": "How would you rate your communication skills?",
        "options": {
            "a": {"text": "Very strong", "trait": "Social", "score": 1.0},
            "b": {"text": "Strong", "trait": "Social", "score": 0.5, "trait2": "Enterprising", "score2": 0.5},
            "c": {"text": "Average", "trait": "None", "score": 0},
            "d": {"text": "Not strong", "trait": "Investigative", "score": 1.0}
        }
    },
    "28": {
        "text": "Do you prefer:",
        "options": {
            "a": {"text": "A structured 9-to-5 job", "trait": "Conventional", "score": 1.0},
            "b": {"text": "A job with irregular hours", "trait": "Artistic", "score": 1.0},
            "c": {"text": "A freelance or flexible job", "trait": "Enterprising", "score": 1.0},
            "d": {"text": "Not sure", "trait": "None", "score": 0}
        }
    },
    "29": {
        "text": "What is your preferred method of learning new skills?",
        "options": {
            "a": {"text": "Online courses or classes", "trait": "Investigative", "score": 1.0},
            "b": {"text": "On-the-job training", "trait": "Realistic", "score": 1.0},
            "c": {"text": "Books and research", "trait": "Investigative", "score": 0.5, "trait2": "Artistic", "score2": 0.5},
            "d": {"text": "Talking with mentors or peers", "trait": "Social", "score": 1.0}
        }
    },
    "30": {
        "text": "Would you rather:",
        "options": {
            "a": {"text": "Work with numbers, data, or analysis", "trait": "Conventional", "score": 1.0},
            "b": {"text": "Work in a helping or care-based profession", "trait": "Social", "score": 1.0},
            "c": {"text": "Work in a creative and artistic environment", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Work in a fast-paced business or startup environment", "trait": "Enterprising", "score": 1.0}
        }
    },
    "31": {
        "text": "How do you feel about taking risks in your career?",
        "options": {
            "a": {"text": "I’m comfortable with taking risks", "trait": "Enterprising", "score": 1.0},
            "b": {"text": "I prefer to avoid risks", "trait": "Conventional", "score": 1.0},
            "c": {"text": "I’m open to risks if they seem worth it", "trait": "Enterprising", "score": 0.5, "trait2": "Investigative", "score2": 0.5},
            "d": {"text": "I’m not sure", "trait": "None", "score": 0}
        }
    },
    "32": {
        "text": "Do you prefer to:",
        "options": {
            "a": {"text": "Stick to a plan and follow procedures", "trait": "Conventional", "score": 1.0},
            "b": {"text": "Go with the flow and adapt as you go", "trait": "Artistic", "score": 1.0},
            "c": {"text": "Think creatively and find new solutions", "trait": "Artistic", "score": 0.5, "trait2": "Investigative", "score2": 0.5},
            "d": {"text": "Focus on the big picture and delegate tasks", "trait": "Enterprising", "score": 1.0}
        }
    },
    "33": {
        "text": "How do you feel about working in high-pressure situations?",
        "options": {
            "a": {"text": "I thrive under pressure", "trait": "Enterprising", "score": 1.0},
            "b": {"text": "I prefer a calmer environment", "trait": "Social", "score": 1.0},
            "c": {"text": "I can handle it when necessary", "trait": "Conventional", "score": 1.0},
            "d": {"text": "I’m unsure", "trait": "None", "score": 0}
        }
    },
    "34": {
        "text": "Do you enjoy:",
        "options": {
            "a": {"text": "Solving technical issues or puzzles", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Helping people through counseling or healthcare", "trait": "Social", "score": 1.0},
            "c": {"text": "Creating things from scratch", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Organizing events and projects", "trait": "Enterprising", "score": 1.0}
        }
    },
    "35": {
        "text": "Which of these is your biggest strength?",
        "options": {
            "a": {"text": "Problem-solving", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Empathy and helping others", "trait": "Social", "score": 1.0},
            "c": {"text": "Creativity and innovation", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Leadership and organization", "trait": "Enterprising", "score": 1.0}
        }
    },
    "36": {
        "text": "How would you feel about working in a job that involves constant learning and development?",
        "options": {
            "a": {"text": "I would enjoy it", "trait": "Investigative", "score": 1.0},
            "b": {"text": "I would find it stressful", "trait": "Conventional", "score": 1.0},
            "c": {"text": "I would appreciate the challenge", "trait": "Enterprising", "score": 1.0},
            "d": {"text": "I’m unsure", "trait": "None", "score": 0}
        }
    },
    "37": {
        "text": "Would you rather work in:",
        "options": {
            "a": {"text": "A large corporation", "trait": "Conventional", "score": 1.0},
            "b": {"text": "A small, close-knit team", "trait": "Social", "score": 1.0},
            "c": {"text": "A creative studio or agency", "trait": "Artistic", "score": 1.0},
            "d": {"text": "A startup or business you own", "trait": "Enterprising", "score": 1.0}
        }
    },
    "38": {
        "text": "Do you like to:",
        "options": {
            "a": {"text": "Analyze situations before taking action", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Act quickly based on intuition", "trait": "Enterprising", "score": 1.0},
            "c": {"text": "Explore many possibilities before deciding", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Consult others before making decisions", "trait": "Social", "score": 1.0}
        }
    },
    "39": {
        "text": "What’s more important to you?",
        "options": {
            "a": {"text": "Making a lot of money", "trait": "Enterprising", "score": 1.0},
            "b": {"text": "Doing meaningful work", "trait": "Social", "score": 1.0},
            "c": {"text": "Working on something creative", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Having a balanced work-life schedule", "trait": "Conventional", "score": 1.0}
        }
    },
    "40": {
        "text": "How do you feel about working remotely?",
        "options": {
            "a": {"text": "I would love to work from home", "trait": "Investigative", "score": 1.0},
            "b": {"text": "I prefer to work in an office", "trait": "Conventional", "score": 1.0},
            "c": {"text": "I’m open to both options", "trait": "None", "score": 0},
            "d": {"text": "I’m unsure", "trait": "None", "score": 0}
        }
    },
    "41": {
        "text": "Which of these hobbies do you enjoy most?",
        "options": {
            "a": {"text": "Solving technical problems", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Volunteering or helping people", "trait": "Social", "score": 1.0},
            "c": {"text": "Drawing, painting, or crafting", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Organizing events or projects", "trait": "Enterprising", "score": 1.0}
        }
    },
    "42": {
        "text": "How important is flexibility in your career?",
        "options": {
            "a": {"text": "Very important", "trait": "Enterprising", "score": 1.0},
            "b": {"text": "Somewhat important", "trait": "Social", "score": 0.5, "trait2": "Conventional", "score2": 0.5},
            "c": {"text": "Not very important", "trait": "Conventional", "score": 1.0},
            "d": {"text": "I’m not sure", "trait": "None", "score": 0}
        }
    },
    "43": {
        "text": "Would you prefer a job that:",
        "options": {
            "a": {"text": "Involves a lot of travel", "trait": "Enterprising", "score": 1.0},
            "b": {"text": "Involves working from home", "trait": "Investigative", "score": 1.0},
            "c": {"text": "Involves interacting with clients or customers", "trait": "Social", "score": 1.0},
            "d": {"text": "Involves working with a small team", "trait": "Social", "score": 0.5, "trait2": "Enterprising", "score2": 0.5}
        }
    },
    "44": {
        "text": "Do you enjoy working with:",
        "options": {
            "a": {"text": "Numbers, data, or research", "trait": "Conventional", "score": 1.0},
            "b": {"text": "People in need or those facing challenges", "trait": "Social", "score": 1.0},
            "c": {"text": "Ideas, art, or creativity", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Organizing tasks and managing people", "trait": "Enterprising", "score": 1.0}
        }
    },
    "45": {
        "text": "Are you interested in starting your own business?",
        "options": {
            "a": {"text": "Yes, I’m very interested", "trait": "Enterprising", "score": 1.0},
            "b": {"text": "Maybe, but I’m not sure how to start", "trait": "Enterprising", "score": 0.5, "trait2": "None", "score2": 0},
            "c": {"text": "Not at all", "trait": "Conventional", "score": 1.0},
            "d": {"text": "I’m open to the idea", "trait": "Enterprising", "score": 0.5, "trait2": "None", "score2": 0}
        }
    },
    "46": {
        "text": "Which of the following sounds most interesting to you?",
        "options": {
            "a": {"text": "Software development or engineering", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Nursing or psychology", "trait": "Social", "score": 1.0},
            "c": {"text": "Film, theater, or music production", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Management or business leadership", "trait": "Enterprising", "score": 1.0}
        }
    },
    "47": {
        "text": "How do you prefer to spend your time?",
        "options": {
            "a": {"text": "Solving complex problems", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Helping others with personal issues", "trait": "Social", "score": 1.0},
            "c": {"text": "Expressing creativity", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Organizing and leading teams", "trait": "Enterprising", "score": 1.0}
        }
    },
    "48": {
        "text": "Do you prefer:",
        "options": {
            "a": {"text": "A structured, clear job path", "trait": "Conventional", "score": 1.0},
            "b": {"text": "A career where I can shape my own journey", "trait": "Enterprising", "score": 1.0},
            "c": {"text": "A job that focuses on creativity", "trait": "Artistic", "score": 1.0},
            "d": {"text": "A job where I can lead a team", "trait": "Enterprising", "score": 1.0}
        }
    },
    "49": {
        "text": "How important is the work environment to you?",
        "options": {
            "a": {"text": "Very important", "trait": "Social", "score": 0.5, "trait2": "Artistic", "score2": 0.5},
            "b": {"text": "Somewhat important", "trait": "Conventional", "score": 1.0},
            "c": {"text": "Not very important", "trait": "Investigative", "score": 1.0},
            "d": {"text": "I’m not sure", "trait": "None", "score": 0}
        }
    },
    "50": {
        "text": "Which of these careers interests you the most?",
        "options": {
            "a": {"text": "Engineer or data scientist", "trait": "Investigative", "score": 1.0},
            "b": {"text": "Counselor or nurse", "trait": "Social", "score": 1.0},
            "c": {"text": "Artist or graphic designer", "trait": "Artistic", "score": 1.0},
            "d": {"text": "Business owner or entrepreneur", "trait": "Enterprising", "score": 1.0}
        }
    }
}

const CAREERS = {
    "SWE": {
        "name": "Software Engineer",
        "description": "Designs, develops, and maintains software systems.",
        "ideal_profile": {"Investigative": 15, "Realistic": 5, "Artistic": 2, "Social": 3, "Enterprising": 4, "Conventional": 6}
    },
    "Nurse": {
        "name": "Nurse",
        "description": "Provides patient care in various healthcare settings.",
        "ideal_profile": {"Social": 18, "Investigative": 8, "Realistic": 6, "Conventional": 5, "Enterprising": 2, "Artistic": 1}
    },
    "GraphicDesigner": {
        "name": "Graphic Designer",
        "description": "Creates visual concepts to communicate ideas.",
        "ideal_profile": {"Artistic": 17, "Investigative": 5, "Enterprising": 6, "Conventional": 3, "Realistic": 2, "Social": 4}
    },
    "DataScientist": {
        "name": "Data Scientist",
        "description": "Analyzes complex data to uncover insights and drive decisions.",
        "ideal_profile": {"Investigative": 18, "Conventional": 8, "Realistic": 4, "Enterprising": 3, "Social": 2, "Artistic": 2}
    },
    "Teacher": {
        "name": "Teacher",
        "description": "Educates and inspires students in various subjects.",
        "ideal_profile": {"Social": 20, "Artistic": 8, "Investigative": 5, "Enterprising": 4, "Conventional": 5, "Realistic": 1}
    },
    "Writer": {
        "name": "Writer",
        "description": "Creates content for books, articles, scripts, or media.",
        "ideal_profile": {"Artistic": 16, "Investigative": 6, "Social": 4, "Enterprising": 3, "Conventional": 3, "Realistic": 1}
    },
    "Engineer": {
        "name": "Engineer",
        "description": "Designs and builds infrastructure, machines, or systems.",
        "ideal_profile": {"Investigative": 14, "Realistic": 10, "Conventional": 6, "Enterprising": 3, "Social": 2, "Artistic": 2}
    },
    "Doctor": {
        "name": "Doctor",
        "description": "Diagnoses and treats patients to improve health outcomes.",
        "ideal_profile": {"Investigative": 16, "Social": 15, "Realistic": 5, "Conventional": 3, "Enterprising": 2, "Artistic": 1}
    },
    "Architect": {
        "name": "Architect",
        "description": "Designs buildings and structures, blending creativity and engineering.",
        "ideal_profile": {"Artistic": 12, "Investigative": 10, "Realistic": 8, "Enterprising": 4, "Conventional": 3, "Social": 2}
    },
    "Researcher": {
        "name": "Researcher",
        "description": "Conducts experiments or studies to advance knowledge.",
        "ideal_profile": {"Investigative": 20, "Conventional": 6, "Realistic": 4, "Social": 3, "Artistic": 2, "Enterprising": 1}
    },
    "DataAnalyst": {
        "name": "Data Analyst",
        "description": "Interprets data to support business or research decisions.",
        "ideal_profile": {"Investigative": 16, "Conventional": 10, "Enterprising": 4, "Realistic": 3, "Social": 2, "Artistic": 1}
    },
    "FinancialAnalyst": {
        "name": "Financial Analyst",
        "description": "Evaluates financial data to guide investment decisions.",
        "ideal_profile": {"Investigative": 12, "Conventional": 12, "Enterprising": 8, "Realistic": 2, "Social": 2, "Artistic": 1}
    },
    "ProjectManager": {
        "name": "Project Manager",
        "description": "Oversees projects to ensure timely and successful completion.",
        "ideal_profile": {"Enterprising": 15, "Conventional": 8, "Social": 8, "Investigative": 4, "Realistic": 2, "Artistic": 2}
    },
    "Entrepreneur": {
        "name": "Entrepreneur",
        "description": "Starts and manages businesses, innovating and taking risks.",
        "ideal_profile": {"Enterprising": 18, "Investigative": 6, "Social": 5, "Artistic": 4, "Conventional": 3, "Realistic": 2}
    },
    "Counselor": {
        "name": "Counselor",
        "description": "Guides individuals through personal or career challenges.",
        "ideal_profile": {"Social": 20, "Investigative": 6, "Artistic": 4, "Enterprising": 3, "Conventional": 3, "Realistic": 1}
    },
    "Psychologist": {
        "name": "Psychologist",
        "description": "Studies behavior and provides therapy or research insights.",
        "ideal_profile": {"Social": 16, "Investigative": 12, "Artistic": 4, "Conventional": 3, "Enterprising": 2, "Realistic": 1}
    },
    "SocialWorker": {
        "name": "Social Worker",
        "description": "Supports communities and individuals with social services.",
        "ideal_profile": {"Social": 22, "Investigative": 5, "Enterprising": 4, "Conventional": 4, "Artistic": 2, "Realistic": 2}
    },
    "Artist": {
        "name": "Artist",
        "description": "Creates visual, performing, or literary art for expression.",
        "ideal_profile": {"Artistic": 20, "Investigative": 4, "Social": 3, "Enterprising": 3, "Conventional": 2, "Realistic": 2}
    },
    "Animator": {
        "name": "Animator",
        "description": "Designs moving graphics for films, games, or media.",
        "ideal_profile": {"Artistic": 18, "Investigative": 5, "Realistic": 4, "Enterprising": 3, "Social": 2, "Conventional": 2}
    },
    "FashionDesigner": {
        "name": "Fashion Designer",
        "description": "Creates clothing and accessories with aesthetic appeal.",
        "ideal_profile": {"Artistic": 19, "Enterprising": 6, "Investigative": 3, "Social": 3, "Conventional": 2, "Realistic": 2}
    },
    "Photographer": {
        "name": "Photographer",
        "description": "Captures images to tell stories or document events.",
        "ideal_profile": {"Artistic": 16, "Investigative": 4, "Enterprising": 5, "Social": 4, "Realistic": 3, "Conventional": 2}
    },
    "MarketingManager": {
        "name": "Marketing Manager",
        "description": "Develops strategies to promote products or services.",
        "ideal_profile": {"Enterprising": 16, "Artistic": 8, "Social": 6, "Investigative": 4, "Conventional": 4, "Realistic": 1}
    },
    "HRManager": {
        "name": "HR Manager",
        "description": "Manages recruitment, training, and employee relations.",
        "ideal_profile": {"Social": 15, "Enterprising": 10, "Conventional": 8, "Investigative": 3, "Artistic": 2, "Realistic": 1}
    },
    "Consultant": {
        "name": "Consultant",
        "description": "Advises organizations on business or technical strategies.",
        "ideal_profile": {"Investigative": 12, "Enterprising": 12, "Social": 8, "Conventional": 4, "Artistic": 2, "Realistic": 1}
    },
    "Chef": {
        "name": "Chef",
        "description": "Prepares and innovates dishes in culinary settings.",
        "ideal_profile": {"Realistic": 12, "Artistic": 10, "Enterprising": 6, "Social": 4, "Conventional": 3, "Investigative": 2}
    },
    "PhysicalTherapist": {
        "name": "Physical Therapist",
        "description": "Helps patients recover mobility and manage pain.",
        "ideal_profile": {"Social": 18, "Investigative": 8, "Realistic": 8, "Conventional": 3, "Enterprising": 2, "Artistic": 1}
    },
    "EnvironmentalScientist": {
        "name": "Environmental Scientist",
        "description": "Studies ecosystems to address environmental issues.",
        "ideal_profile": {"Investigative": 16, "Realistic": 8, "Social": 6, "Conventional": 4, "Enterprising": 2, "Artistic": 2}
    },
    "Lawyer": {
        "name": "Lawyer",
        "description": "Advises and represents clients in legal matters.",
        "ideal_profile": {"Investigative": 12, "Enterprising": 12, "Social": 8, "Conventional": 6, "Artistic": 2, "Realistic": 1}
    },
    "ITSpecialist": {
        "name": "IT Specialist",
        "description": "Manages and troubleshoots technology systems.",
        "ideal_profile": {"Investigative": 14, "Realistic": 8, "Conventional": 8, "Enterprising": 3, "Social": 2, "Artistic": 1}
    }
}

module.exports = { TRAITS, QUESTIONS, CAREERS };