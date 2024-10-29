function toggleChat() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
    document.getElementById('user-input').focus();
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
        const messages = document.getElementById('chatbot-messages');
        
        if (userInput) {
            messages.innerHTML += `<div>User: ${userInput}</div>`;
            document.getElementById('user-input').value = '';

            // Respond to specific queries
            if (userInput.toLowerCase().includes('hire')) {
                messages.innerHTML += `<div>Bot: You can hire me by clicking <a href="mailto:silindileshabangu01@gmail.com">here</a>.</div>`;
            } else if (userInput.toLowerCase().includes('contact')) {
                messages.innerHTML += `<div>Bot: You can contact me at <a href="mailto:silindileshabangu01@gmail.com">silindileshabangu01@gmail.com</a>.</div>`;
            } else if (userInput.toLowerCase().includes('projects')) {
                messages.innerHTML += `<div>Bot: Check out my projects <a href="#projects">here</a>.</div>`;
            } else if (userInput.toLowerCase().includes('studies')) {
                messages.innerHTML += `<div>Bot: View my studies <a href="#education">here</a>.</div>`;
            } else {
                messages.innerHTML += `<div>Bot: I didn't quite get that. You can ask me to hire you, contact you, see your projects, or see your studies.</div>`;
            }
        
            messages.scrollTop = messages.scrollHeight;  // Scroll to the bottom
        
    }
}