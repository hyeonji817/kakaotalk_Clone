import { Link } from "react-router-dom";

export default function ChatItem({ chat }) {
  const isGroup = chat.type === "group";

  return (
    <div className="content_c_list">
      <Link
        className={isGroup ? "content_c_list_2" : "content_c_list_1"}
        to={`/chat/${chat.id}`}
      >
        {isGroup ? (
          <span className="group_list" aria-hidden="true">
            {chat.avatars.slice(0, 4).map((src, i) => (
              <img key={i} src={src} alt="" />
            ))}
          </span>
        ) : (
          <img src={chat.avatar} alt={`${chat.name} 프로필`} />
        )}

        <span className="c_list_name">{chat.name}</span>
        <span className="c_list_con">{chat.lastMessage}</span>
        <span className="c_list_time">{chat.time}</span>

        {isGroup && (
          <span className="c_list_member" aria-label="멤버 수">
            {chat.memberCount}
          </span>
        )}
      </Link>
    </div>
  );
}
