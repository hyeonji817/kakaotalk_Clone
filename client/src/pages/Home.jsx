// src/pages/Home.jsx
import { useMemo } from "react";
import MenuSection from "../components/MenuSection.jsx";
import FriendItem from "../components/FriendItem.jsx";
import { sections, myProfile, friends } from "../data/friends";

export default function Home() {
  const friendCount = useMemo(() => friends.length, [friends]);

  return (
    <div id="body">
      <ul>
        {/* 내 프로필 */}
        <li className="body_profile">
          <a href="#" className="profile_picture" onClick={(e)=>e.preventDefault()}>
            <img src="/img/pompom_purin.jpg" alt="프로필" />
          </a>
          <a href="#" className="profile_explain" onClick={(e)=>e.preventDefault()}>
            <span className="id_name">{myProfile.name}</span>
            <span className="id_message">{myProfile.message}</span>
          </a>
        </li>

        {/* 메뉴 섹션(아코디언) */}
        {sections.map((sec) => (
          <MenuSection
            key={sec.key}
            title={sec.title}
            iconSrc={sec.iconSrc}
            description={sec.description}
            items={sec.items}
          />
        ))}

        {/* 친구 목록 헤더 */}
        <a href="#" className="friends_collection" onClick={(e)=>e.preventDefault()}>
          <span>친구</span>
          <span>{friendCount}</span>
          <span className="b_menu_icon">페이지 열기 화살표</span>
        </a>

        {/* 친구 목록 */}
        {friends.map((f) => (
          <li className="body_f_profile" key={f.id}>
            <FriendItem {...f} />
          </li>
        ))}
      </ul>
    </div>
  );
}
