import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import TabBar from "../components/TabBar.jsx";
import ChatItem from "../components/ChatItem.jsx";
import { getChats } from "../api/chatApi.js";

export default function ChatList() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchChats() {
      try {
        const data = await getChats();
        setChats(data);
      } catch (err) {
        setError("채팅 목록을 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    }

    fetchChats();
  }, []);

  return (
    <div id="container">
      <Header />

      <main id="content">
        <a href="#" className="adv" onClick={(e) => e.preventDefault()}>
          {/* 광고/배너 영역 */}
        </a>

        {loading && <p style={{ padding: "12px" }}>불러오는 중...</p>}
        {error && <p style={{ padding: "12px", color: "red" }}>{error}</p>}

        {!loading && !error && chats.map((c) => (
          <ChatItem key={c.id} chat={c} />
        ))}
      </main>

      <TabBar />
    </div>
  );
}