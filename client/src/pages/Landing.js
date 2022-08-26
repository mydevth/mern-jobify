import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            JOB <span> tracking</span> app
          </h1>
          <p>
            I'm baby sus chartreuse pinterest live-edge. Selfies bespoke
            letterpress poutine green juice. Tumeric ramps organic pork belly
            drinking vinegar salvia try-hard praxis post-ironic DIY art party
            glossier distillery thundercats skateboard. Freegan drinking vinegar
            bodega boys, put a bird on it bruh man bun irony mumblecore vape you
            probably haven't heard of them master cleanse.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img" main-img />
      </div>
    </Wrapper>
  );
};

export default Landing;
