import logoDh from "../assets/img/logo-dh.png"
import Sidebar from "./Sidebar";

export default function Menu() {
  return (
    <header className="menu-wrap">
      <figure className="user">
        <div className="user-avatar">
          <img src={logoDh} alt="Logo Digital House	" />
        </div>
        <figcaption>Digital House</figcaption>
      </figure>
      <Sidebar />
    </header>
  );
}