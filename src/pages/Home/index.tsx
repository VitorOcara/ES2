import PageHeader from "../../components/PageHeader";
import Footer2 from "../../components/Footer";
import "./styles.css";

function Home() {
  return (
    <div className="containerHome">
      <PageHeader />
      <div className="bodyHome">
        <div className="box"></div>
      </div>
      <Footer2 />
    </div>
  );
}
export default Home;
