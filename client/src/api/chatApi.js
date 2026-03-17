const BASE_URL = "http://localhost:5001/api"; 

export async function getChats() {
  const res = await fetch(`${BASE_URL}/chats`);
  if (!res.ok) throw new Error("채팅 목록 조회 실패");
  return res.json();
}

export async function getChatMessages(chatId) {
  const res = await fetch(`${BASE_URL}/chats/${chatId}/messages`);
  if (!res.ok) throw new Error("채팅 메시지 조회 실패");
  return res.json();
}

export async function sendMessage(chatId, message) {
  const res = await fetch(`${BASE_URL}/chats/${chatId}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });

  if (!res.ok) throw new Error("메시지 전송 실패");
  return res.json();
}