import "./common.css"; 
import "./reset.css";

export default function FriendItem({ img, alt, name, message, compact }) {
  return (
    <>
      <a href="#" className="profile_f_picture" onClick={(e) => e.preventDefault()}>
        <img src={img} alt={alt} />
      </a>
      <a 
        href="#"
        className={compact ? "profile_f_detail_2" : "profile_f_detail_1"}
        onClick={(e) => e.preventDefault()}
      >
        <span className="id_name">{name}</span>
        {message && <span className="id_message">{message}</span>}
      </a>
    </>
  );
}