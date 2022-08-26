import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

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
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img" main-img />
      </div>
    </Wrapper>
  );
};

export default Landing;
