import "./common.css";
import "../index.css";
import "./reset.css";

export default function Header({ title }) {
  return (
    <div id="header">
      <ul>
        <li className="header_title">
          <span>{title}</span>
        </li>
        <li className="header_iconlist">
          <a href="#"><span className="search">검색</span></a>
          <a href="#"><span className="plus_friend">친구추가</span></a>
          <a href="#"><span className="music">음악</span></a>
          <a href="#"><span className="setup">설정</span></a>
        </li>
      </ul>
    </div>
  );
}