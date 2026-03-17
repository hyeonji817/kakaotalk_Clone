import { NavLink } from "react-router-dom";

export default function TabBar() {
  return (
    <nav id="tab" aria-label="하단 탭">
      <ul>
        <li>
          <NavLink to="/friends"><span className="tab_f_list_1">친구목록</span></NavLink>
          <NavLink to="/chats"><span className="tab_c_list_1">채팅목록</span></NavLink>
          <a href="#"><span className="tab_page">페이지</span></a>
          <a href="#"><span className="tab_more">더보기</span></a>
        </li>
      </ul>
    </nav>
  );
}
