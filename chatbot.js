function toggleChat() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
    document.getElementById('user-input').focus();
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        const messages = document.getElementById('chatbot-messages');
        messages.innerHTML += `<div>User: ${userInput}</div>`;
        document.getElementById('user-input').value = '';

        // Simulate a response from the chatbot
        setTimeout(() => {
            messages.innerHTML += `<div>Bot: I'm here to help! Let's talk about "${userInput}".</div>`;
            messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
        }, 1000);
    }
}