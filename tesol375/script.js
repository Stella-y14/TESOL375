// Card modal functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

const attributeDetails = {
    "Communication": "Ability to explain concepts clearly and engage students effectively.",
    "Patience": "Maintaining calm and supportive attitude in all teaching situations.",
    "Creativity": "Designing engaging and innovative lesson plans.",
    "Adaptability": "Adjusting teaching methods to students' needs.",
    "Motivation": "Encouraging and inspiring students to learn English.",
    "Cultural Awareness": "Understanding and respecting cultural differences in the classroom.",
    "Organization": "Planning lessons and managing classroom efficiently.",
    "Feedback Skills": "Providing constructive feedback to students."
};

// Open modal on card click
document.querySelectorAll('.card').forEach(card => {
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
