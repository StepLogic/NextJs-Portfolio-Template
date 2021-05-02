import Head from "next/head";
import NavComponent from "../NavComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {


    return (
        <>
            <footer className="footer text-center">
                <div className="container">
                    <ul className="list-inline mb-5">
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white mr-3" href="#!">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white mr-3" href="#!">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle text-white" href="#!">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </li>
                    </ul>
                    <p className="text-muted small mb-0">Copyright &copy; Your Website 2020</p>
                </div>
            </footer>
        </>
    );
};

export default FooterSection;
