/* >User types message
   >User clicks the send button
   The message is updated in the conversation window
   The conversation sessions is saved
   the message is sent to the assistant
   The response from the assistant is updated in the conversation window
   the Session is saved to file Json style.*/
let userMessage;
document.getElementById("send_message_btn").addEventListener("click", send_message);

function send_message() {
    userMessage= document.getElementById("user_message").value;
    console.log(userMessage);
    update_conversation_user();
}

function update_conversation_user() {
    console.log("update_conversation_user");
    let conversation_window = document.getElementById("session_conversation");
    let user_message_div = document.createElement("div");
    user_message_div.className = "user_message";
    user_message_div.innerHTML = userMessage;
    conversation_window.appendChild(user_message_div);
    document.getElementById("user_message").value = userMessage;
    conversation_window.scrollTop = conversation_window.scrollHeight;
    //save_session();
    //prompt_assistant();
}

function update_conversation_assistant() {
    console.log("update_conversation_assistant");

}

function prompt_assistant() {
    console.log("prompt_assistant");

}   
