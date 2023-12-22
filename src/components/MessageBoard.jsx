import { useState } from "react";

function MessageBoard() {
  const [outputMessage, setOutputMessage] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const addOutputMessage = (event) => {
    event.preventDefault();
    const newOutputMessage = [...outputMessage];
    newOutputMessage.push(inputMessage);
    setOutputMessage(newOutputMessage);
    setInputMessage("");
  };

  const listMessage = outputMessage.map((item, index) => {
    return (
      <div className="message">
        <h1>{item}</h1>
        <button
          className="delete-button"
          onClick={() => {
            deleteMessage(index);
          }}
        >
          x
        </button>
      </div>
    );
  });

  const deleteMessage = (messageIndex) => {
    const newOutputMessage = [...outputMessage];
    newOutputMessage.splice(messageIndex, 1);
    setOutputMessage(newOutputMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            onChange={(event) => {
              setInputMessage(event.target.value);
            }}
            value={inputMessage}
            placeholder="Enter message here"
          />
        </label>
        <button className="submit-message-button" onClick={addOutputMessage}>
          Submit
        </button>
      </div>
      <div class="board">{listMessage}</div>
    </div>
  );
}

export default MessageBoard;
