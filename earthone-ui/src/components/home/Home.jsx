import "./home.css";
import SnowfallCanvas from "../snowfall/SnowfallCanvas";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <SnowfallCanvas />
      <div className="home">
        <video
          src="./images/bgvideo.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        ></video>
        <div className="content">
          <h1 className="text">Grow Anything</h1>
          <NavLink to="/shop">
            <button className="btn">Buy Now</button>
          </NavLink>
        </div>
      </div>
      <div className="gradient"></div>
    </>
  );
}

export default Home;
