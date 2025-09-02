import { useState } from "react"; 
import "../components/common.css";
import "./reset.css";
import "../index.css";

export default function MenuSection({ title, iconSrc, description, items }) {
  const [open, setOpen] = useState(false);

  return (
      <div className="body_menulist">
        {/* 바꿔치기 */}
        <div
          role="button"
          tabIndex={0}
          className="content-toggle"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
        >
          <span className="b_menu_listname">{title}</span>
          <span className="b_menu_icon">페이지 열기 화살표</span>

          <div className="channel-icon">
            <img src={iconSrc} alt="" />
            <span className="id_content">{description}</span>
          </div>
        </div>


        {/* 펼침 내용 */}
        <div className="content" style={{ display: open ? "block" : "none" }}>
          {items.map((item) => (
            <a 
              href="#"
              className="profile_f_detail_1"
              key={item.id}
              onClick={(e) => e.preventDefault()}
              style={{ display: "flex", gap: 8, alignItems: "center", padding: "8px 0" }}
           >
            <img className="profile_f_picture" src={item.img} alt={item.alt} />
            <div>
              <span className="id_name">{item.name}</span>
              {item.message && <span className="id_message">{item.message}</span>}
            </div>
          </a>
        ))}
        </div>
      </div>
  );
}