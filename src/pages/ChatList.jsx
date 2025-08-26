import Header from "../components/Header.jsx";
import TabBar from "../components/TabBar.jsx";
import ChatItem from "../components/ChatItem.jsx";
import { chats } from "../data/chats.js";

export default function ChatList() {
  return (
    <div id="container">
      <Header />

      <main id="content">
        <a href="#" className="adv">
          {/* 광고/배너 영역: 필요시 이미지 넣기 */}
          {/* <span className="adv_img"><img src="/img/banner.jpg" alt="배너" /></span> */}
        </a>

        {chats.map((c) => <ChatItem key={c.id} chat={c} />)}
      </main>

      <TabBar />
    </div>
  );
}
