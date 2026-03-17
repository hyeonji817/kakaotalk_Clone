export default function Header2() {
  return (
    <header id="header2">
      <div className="header2_title"><span>채팅</span></div>
      <div className="header2_iconlist">
        <button className="search" aria-label="검색">검색</button>
        <button className="add_chat" aria-label="채팅추가">채팅추가</button>
        <button className="music" aria-label="음악">음악</button>
        <button className="setup" aria-label="설정">설정</button>
      </div>
    </header>
  );
}
