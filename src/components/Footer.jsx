import { NavLink } from "react-router-dom";
import "./common.css";

export default function Footer() {
  return (
    <div id="footer">
      <ul>
        <li>
          <a href="/"><span className="ft_f_list">친구목록</span></a>
          <a href="/chats"><span className="ft_c_list">채팅목록</span></a>
          <a href="#"><span className="ft_page">페이지</span></a>
          <a href="#"><span className="ft_more">더보기</span></a>
        </li>
      </ul>
    </div>
  );
}