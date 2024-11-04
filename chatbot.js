function toggleChat() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
    document.getElementById('user-input').focus();
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const messages = document.getElementById('chatbot-messages');

    if (userInput) {
        messages.innerHTML += `<div class="chat-bubble user">User: ${userInput}</div>`;
        document.getElementById('user-input').value = '';   // Div for header 

        // Respond to specific queries
        if (userInput.toLowerCase().includes('hire')) {
            messages.innerHTML += `<div class="chat-bubble bot">Bot: You want to hire me by clicking <a href="mailto:silindileshabangu01@gmail.com">here</a>.</div>`;
        } else if (userInput.toLowerCase().includes('contact')) {
            messages.innerHTML += `<div class="chat-bubble bot">Bot: You can get in touch with me by clicking <a href="#Get In Touch">here</a> or contact me at <a href="mailto:silindileshabangu01@gmail.com">Email: silindileshabangu01@gmail.com, Cell: 0724279984</a>.</div>`;
        } else if (userInput.toLowerCase().includes('projects')) {
            messages.innerHTML += `<div class="chat-bubble bot">Bot: These are the projects that i have implemented Human Computer Interaction🧑‍💻Work Intergrated Learning🧑‍💻System Analysis and Design To view and download my projects click<a href="#projects">here</a>.</div>`;
        } else if (userInput.toLowerCase().includes('hi') || userInput.toLowerCase().includes('hello') || userInput.toLowerCase().includes('hey')) {
            messages.innerHTML += `<div class="chat-bubble bot">Bot: Hello 👋 How can I help you today?</div>`;
        } else if (userInput.toLowerCase().includes('about')) {
            messages.innerHTML += `<div class="chat-bubble bot">Bot: 😊 My name is Silindile Shabangu and I am 27 years old. Want to know more about me? Click <a href="#about">here</a>.</div>`;
        } else if (userInput.toLowerCase().includes('studies') || userInput.toLowerCase().includes('education')) {
            messages.innerHTML += `<div class="chat-bubble bot">Bot: I have a Diploma in Information Technology Management 📚 and a Bachelor of Information Technology in Business Systems from Rosebank College🏫. For more information, click<a href="#education">here</a>.</div>`;
        } else if (userInput.toLowerCase().includes('skills')) {
            messages.innerHTML += `<div class="chat-bubble bot">Bot: View my skills <a href="#skills">here</a>.</div>`;
        } else if (userInput.toLowerCase().includes('gallery')|| userInput.toLowerCase().includes('pictures')) {
            messages.innerHTML += `<div class="chat-bubble bot">Bot: To view my Gallery 🖼️please click <a href="#Gallery">here</a>.</div>`;
        } else if (userInput.toLowerCase().includes('location')) {
            messages.innerHTML += `<div class="chat-bubble bot">Bot: To see my location, click <a href="#Location">here</a>.</div>`;

        }else if (userInput.toLowerCase().includes('how') || userInput.toLowerCase().includes('doing') || userInput.toLowerCase().includes('feeling')) {
                messages.innerHTML += `<div class="chat-bubble bot">Bot: I am doing well 😊Thank you for asking!!</div>`;
        
        }else if (userInput.toLowerCase().includes('Where') || userInput.toLowerCase().includes('live') || userInput.toLowerCase().includes('from') || userInput.toLowerCase().includes('stay')) {
                    messages.innerHTML += `<div class="chat-bubble bot">Bot: I am from a township in Nelspruit called Mastsulu🏚️ For more information and coordinates click <a href="#Location">here</a>.  </div>`;

        } 
        
        else if (userInput.toLowerCase().includes('cv')) {
            messages.innerHTML += `<div class="chat-bubble bot">Bot: To view my CV click <a href="ST Shabangu CV Updated.pdf">here </a>to open or download.</div>`;
        }
        else {
            messages.innerHTML += `<div class="chat-bubble bot">Bot:😔 I didn't quite get that.</div>`;
        }

        messages.scrollTop = messages.scrollHeight;  // For scrolling
    }
}

const chatInput = document.querySelector('.chat-input textarea');
const sendChatBtn = document.querySelector('.chat-input button');
const chatbox = document.querySelector(".chatbox");

let userMessage;
const API_KEY = "your-api-key-here"; 

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = `<p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    role: "user",
                    content: userMessage
                }
            ]
        })
    };

    fetch(API_URL, requestOptions)
        .then(res => {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .then(data => {
            messageElement.textContent = data.choices[0].message.content;
        })
        .catch((error) => {
            messageElement.classList.add("error");
            messageElement.textContent = "Oops! Something went wrong. Please try again!";
        })
        .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) {
        return;
    }
    chatbox.appendChild(createChatLi(userMessage, "chat-outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "chat-incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

sendChatBtn.addEventListener("click", handleChat);

function cancel() {
    let chatbotcomplete = document.querySelector(".chatBot");
    if (chatbotcomplete.style.display != 'none') {
        chatbotcomplete.style.display = "none";
        let lastMsg = document.createElement("p");
        lastMsg.textContent = 'Thanks for using our Chatbot!';
        lastMsg.classList.add('lastMessage');
        document.body.appendChild(lastMsg);
    }
}
