import express from "express";
import { chats as seedChats } from "../data/chats.js";

const router = express.Router();

/**
 * 원본 seedChats는 절대 안 건드림
 * 실행 중 사용할 복사본만 따로 만듦
 */
let chatStore = seedChats.map((chat) => ({ ...chat }));

/**
 * 채팅 메시지 저장소
 * chat id 기준으로 메시지 배열 관리
 */
let messageStore = {
  kitty: [
    { id: 1, sender: "other", text: "폼폼푸린아~ 그 모자 어디서 샀는지 알려줘" },
  ],
  cinamoroll: [
    { id: 1, sender: "other", text: "야이 병신새꺄 축구 나와라ㅋㅋㅋ 지난번처럼 째지말고" },
  ],
  sanriofam: [
    { id: 1, sender: "other", text: "오늘 회식 잊지 마세요~! 저녁 6:00 산리오 타워 1층" },
  ],
  keropi: [
    { id: 1, sender: "other", text: "이따가 수영장 콜?" },
  ],
  mymelody: [
    { id: 1, sender: "other", text: "담에 과자 또 만들어줘!" },
  ],
  kuromi: [
    { id: 1, sender: "other", text: "너 또, 과제 안하고 째냐ㅋㅋㅋㅋ" },
  ],
  pochaco: [
    { id: 1, sender: "other", text: "같이 도서관가자" },
  ],
};

// 채팅 목록 조회
router.get("/", (req, res) => {
  res.json(chatStore);
});

// 특정 채팅방 메시지 조회
router.get("/:id/messages", (req, res) => {
  const chatId = req.params.id;
  res.json(messageStore[chatId] || []);
});

// 메시지 전송
router.post("/:id/messages", (req, res) => {
  const chatId = req.params.id;
  const { sender, text } = req.body;

  if (!text || !text.trim()) {
    return res.status(400).json({ message: "메시지 내용이 비어 있습니다." });
  }

  const newMessage = {
    id: Date.now(),
    sender: sender || "me",
    text: text.trim(),
  };

  if (!messageStore[chatId]) {
    messageStore[chatId] = [];
  }

  messageStore[chatId].push(newMessage);

  // 원본 seedChats는 그대로 두고, chatStore만 갱신
  chatStore = chatStore.map((chat) =>
    chat.id === chatId
      ? {
          ...chat,
          lastMessage: newMessage.text,
          time: new Date().toLocaleTimeString("ko-KR", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }),
        }
      : chat
  );

  res.status(201).json(newMessage);
});

export default router;