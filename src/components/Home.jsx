import "../styles/home.css";
import heroImage from "../assets/images/hero/profile.png";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Transforming <span>Ideas</span> Into <br /> Digital Reality
        </h1>
        <p>
          We craft modern, responsive, and intelligent digital solutions for your business — merging creativity with technology.
        </p>
      </div>
      <div className="home-image">
        <img src={heroImage} alt="Profile" />
      </div>
    </section>
  );
}
