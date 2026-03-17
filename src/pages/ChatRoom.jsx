import { useEffect, useState } from "react"; 
import { useParams, Link } from "react-router-dom"; 
import { getChatMessages, sendMessage } from "../api/chatApi.js"; 

export default function ChatRoom() {
  const { id } = useParams(); 
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function fetchMessages() {
      try {
        const data = await getChatMessages(id);
        setMessages(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchMessages();
  }, [id]);

  async function handleSend(e) {
    e.preventDefault();

    if (!input.trim()) return;

    const newMessage = {
      sender: "me", 
      text: input,
    }; 

    try {
      const savedMessage = await sendMessage(id, newMessage);

      setMessages((prev) => [...prev, savedMessage]);
      setInput("");
    } catch (err) {
      console.error(err);
      alert("메시지 전송 실패");
    }
  }

  return (
    <div id="container">
      <header style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
        <Link to="/chats">← 뒤로가기</Link>
      </header>

      <main style={{ padding: "12px", minHeight: "70vh" }}>
        {loading ? (
          <p>불러오는 중...</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: "flex",
                justifyContent: msg.sender === "me" ? "flex-end" : "flex-start",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  maxWidth: "70%",
                  padding: "10px 12px",
                  borderRadius: "12px",
                  background: msg.sender === "me" ? "#fae100" : "#f1f1f1",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))
        )}
      </main>

      <form
        onSubmit={handleSend}
        style={{
          display: "flex",
          gap: "8px",
          padding: "12px",
          borderTop: "1px solid #ddd",
          background: "#fff",
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요"
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 16px",
            border: "none",
            borderRadius: "8px",
            background: "#fae100",
            cursor: "pointer",
          }}
        >
          전송
        </button>
      </form>
    </div>
  );
}