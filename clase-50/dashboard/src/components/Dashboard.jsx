import './Dashboard.css'
import Menu from "./Menu";
import SearchWrap from "./Search-wrap";
import ContentWrap from "./Content-wrap";

function Dashboard() {
  return (
    <div className="dashboard">
      <SearchWrap />
      <Menu />
      <ContentWrap />
    </div>
  );
}

export default Dashboard;