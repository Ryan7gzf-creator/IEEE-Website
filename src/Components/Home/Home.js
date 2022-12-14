import './Home.css';
import Join from '../../assets/First-image.svg';
import Find from '../../assets/Second-image.svg';

const Home = () => {
    return (
        <>
            <div className="new">
                <div className="information">
                    <p id="intro-info"> Supporting future innovators. </p>
                    <h1>
                        IEEE UOA
                        <br/>
                        STUDENT BRANCH
                    </h1>
                    <p>
                        IEEE is a professional home to help
                        students transition to industry by providing
                        valuable skills and a like minded community of
                        individuals.
                    </p>
                </div>
            </div>
            <div className="row">
                <div>
                    <img className="Join-Image" src={Join} alt="Join-Us"/>
                </div>
                <div className="Joining">
                    <h1>
                        Who
                        Are We?
                    </h1>
                    <p>
                        The Institute of Electrical and Electronic Engineers (IEEE)
                        is a professional association founded in 1963. Globally, there
                        are over 500,000 members
                    </p>
                    <button className="link-buttons"><h4>JOIN US</h4></button>
                </div>
            </div>

            <div className="row">
                <div className="Joining">
                    <h2>
                        Helping Students
                        Transition To Industry
                    </h2>
                    <p>
                        Home to over 500,000 members globally, IEEE UoA
                        Student Branch is here to foster a future of engineering
                        with you.
                    </p>
                    <button className="link-buttons"><h4>FIND OUT MORE</h4></button>
                </div>
                <div>
                    <img className="Find-Image" src={Find} alt="Join-Us"/>
                </div>
            </div>
        </>
    );
}
export default Home;