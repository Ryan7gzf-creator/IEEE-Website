import './Home.css';
import Join from '../../assets/First-image.svg';
import Find from '../../assets/Second-image.svg';

const Home = () => {
    return (
        <>
            <div className="row">
                <div className="Joining">
                    <h1>
                        Jumpstart
                        <br/>
                        Your Future
                    </h1>
                    <p>
                        IEEE is a professional home to help students
                        <br/>
                        transition to industry by providing valuable skills
                        <br/>
                        and a like minded community of individuals.
                    </p>
                    <button className="link-buttons"><h4>JOIN US</h4></button>
                </div>
                <div>
                    <img className="Join-Image" src={Join} alt="Join-Us"/>
                </div>
            </div>

            <div className="row">
                <div>
                    <img src={Find} alt="Join-Us"/>
                </div>
                <div className="Find-More">
                    <h2>
                        Helping Students
                        <br/>
                        Transition To Industry
                    </h2>
                    <p>
                        Home to over 500,000 members globally, IEEE UoA
                        <br/>
                        Student Branch is here to foster a future of engineering
                        <br/>
                        with you.
                    </p>
                    <button className="link-buttons"><h4>FIND OUT MORE</h4></button>
                </div>
            </div>
        </>
    );
}

export default Home;