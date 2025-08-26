import { useParams, useNavigate } from "react-router-dom";

export default function ChatRoom() {
  const { chatId } = useParams();
  const nav = useNavigate();

  return (
    <div style={{ padding: 16 }}>
      <button onClick={() => nav(-1)}>&lt; 뒤로가기</button>
      <h1 style={{ marginTop: 12 }}>채팅방: {chatId}</h1>
      <p>여기에 메시지 리스트/입력창을 붙이면 완성됩니다.</p>
    </div>
  );
}
