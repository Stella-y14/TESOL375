// Card modal functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

const attributeDetails = {
    "The Learner as a Doer": "I believe learning happens by doing. \nMy goal is to shift students from passive listeners to active participants by using purposeful questioning and holding them accountable for their own practice.",
    
    "Negotiation for Meaning": "Clear explanation isn't enough. \nI implement strategies where students must paraphrase instructions or check with partners, ensuring they actively process and negotiate meaning rather than just listening.",
    
    "The Language of Questions": "Effective questioning guides comprehension, but student inquiry is equally important. \nI use 'wait time' and open-ended prompts to create a supportive space where students feel safe asking their own questions.",
    
    "Attending to the Learner": "Connection drives engagement. \nI combine non-verbal cues like eye contact with the intentional use of student names to ensure every learner feels individually recognized and included in the discussion.",
    
    "Teacher's Meta-Language": "Abstract concepts need concrete hooks. \nI use clear metaphors (like the 'Hamburger structure') and visual models to scaffold writing processes, helping students visualize expectations before they begin.",
    
    "Learning Outcomes": "Balance is key. \nI explicitly outline goals to provide structure, while using implicit, meaning-focused tasks that allow students to discover language rules through authentic interaction.",
    
    "Checking for Learning": "Assessment shouldn't interrupt flow. \nI use frequent, low-stakes checks (like 'Okay?' or 'Questions?') and ask students to summarize key points to ensure everyone is on track without slowing the lesson.",
    
    "Error Feedback": "Confidence comes first. \nIn fluency tasks, I prioritize communication over accuracy, using selective and gentle feedback to create a culture where mistakes are seen as a natural part of learning."
};

// Open modal on card click
document.querySelectorAll('.attribute-card').forEach(card => {
    card.addEventListener('click', () => {
        const attribute = card.dataset.attribute;
        modalTitle.textContent = attribute;
        modalText.textContent = attributeDetails[attribute];
        modal.style.display = 'block';
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
