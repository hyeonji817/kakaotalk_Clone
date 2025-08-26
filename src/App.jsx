// src/App.jsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./components/common.css";
import "./components/reset.css";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// 페이지들
import Home from "./pages/Home.jsx";
import ChatList from "./pages/ChatList.jsx";
import ChatRoom from "./pages/ChatRoom.jsx";

function useHeaderTitle() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/chat/")) return "채팅방";
  if (pathname.startsWith("/chats")) return "채팅";
  return "친구";
}

export default function App() {
  const title = useHeaderTitle();

  return (
    <div id="container">
      {/* 상단영역 */}
      <Header title={title} />

      {/* 내용영역: 라우팅으로 분리 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<ChatList />} />
        <Route path="/chat/:chatId" element={<ChatRoom />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* 하단(공통) */}
      <Footer />
    </div>
  );
}
