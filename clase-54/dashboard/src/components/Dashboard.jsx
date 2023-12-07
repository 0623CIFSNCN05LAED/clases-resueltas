import './Dashboard.css'
import Menu from "./Menu";
import ContentWrap from "./Content-wrap";

function Dashboard() {
  return (
    <div className="dashboard">
      <Menu />
      <ContentWrap />
    </div>
  );
}

export default Dashboard;