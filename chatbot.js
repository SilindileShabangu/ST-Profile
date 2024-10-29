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

                messages.innerHTML += `<div>Bot: You can hire me by clicking <a href="mailto:silindileshabangu01@gmail.com">here </a>.</div>`; 

            } 
            else if (userInput.toLowerCase().includes('contact')) { 

                messages.innerHTML += `<div>Bot: You can contact me at <a href="mailto:silindileshabangu01@gmail.com">Email:silindileshabangu01@gmail.com.Cell 0724279984</a>.</div>`; 

            } 
            else if (userInput.toLowerCase().includes('projects')) { 

                messages.innerHTML += `<div>Bot: Check out my projects <a href="#projects">here</a>.</div>`; 

            }
            else if (userInput.toLowerCase().includes('studies')) { 

            
                messages.innerHTML += `<div>Bot: View my studies <a href="#education">here</a>.</div>`; 

            }

             else if (userInput.toLowerCase().includes('gallery')) { 

            messages.innerHTML += `<div>Bot: View my Gallery click <a href="#Gallery">here</a>.</div>`; 
             }

             else if (userInput.toLowerCase().includes('gallery')) { 

                messages.innerHTML += `<div>Bot: View my Gallery click <a href="#About me">here</a>.</div>`; 
                 }

            else if (userInput.toLowerCase().includes('location')) { 

                messages.innerHTML += `<div>Bot: To see my location click <a href="#Location">here</a>.</div>`; 

            } else { 

                messages.innerHTML += `<div>Bot: I didn't quite get that. You can ask me to hire you, contact you, see your projects, or see your studies.</div>`; 

            } 

         

            messages.scrollTop = messages.scrollHeight;  // Scroll to the bottom 

         

    } 

} 

 

 

 

 

 

 

const chatInput =  

    document.querySelector('.chat-input textarea'); 

const sendChatBtn =  

    document.querySelector('.chat-input button'); 

const chatbox = document.querySelector(".chatbox"); 

 

let userMessage; 

const API_KEY =  

    "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"; 

 

//OpenAI Free APIKey 

 

const createChatLi = (message, className) => { 

    const chatLi = document.createElement("li"); 

    chatLi.classList.add("chat", className); 

    let chatContent =  

        className === "chat-outgoing" ? `<p>${message}</p>` : `<p>${message}</p>`; 

    chatLi.innerHTML = chatContent; 

    return chatLi; 

} 

 

const generateResponse = (incomingChatLi) => { 

    const API_URL = "https://api.openai.com/v1/chat/completions"; 

    const messageElement = incomingChatLi 

    .querySelector("p"); 

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

            messageElement 

            .textContent = data.choices[0].message.content; 

        }) 

        .catch((error) => { 

            messageElement 

            .classList.add("error"); 

            messageElement 

            .textContent = "Oops! Something went wrong. Please try again!"; 

        }) 

        .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight)); 

}; 

 

 

const handleChat = () => { 

    userMessage = chatInput.value.trim(); 

    if (!userMessage) { 

        return; 

    } 

    chatbox 

    .appendChild(createChatLi(userMessage, "chat-outgoing")); 

    chatbox 

    .scrollTo(0, chatbox.scrollHeight); 

 

    setTimeout(() => { 

        const incomingChatLi = createChatLi("Thinking...", "chat-incoming") 

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

        document.body.appendChild(lastMsg) 

    } 

} 