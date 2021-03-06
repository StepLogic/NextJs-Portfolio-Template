import Head from "next/head";
import NavComponent from "../NavComponent";
import {faFacebook, faHtml5} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptop, faPencilRuler, faPhone, faTags} from "@fortawesome/free-solid-svg-icons";

const ServiceSection = () => {


    return (
        <>
            <section className="content-section bg-primary text-white text-center" id="services">
                <div className="container">
                    <div className="content-section-heading">
                        <h3 className="text-secondary mb-0">Services</h3>
                        <h2 className="mb-5">What We Offer</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
          <span className="service-icon rounded-circle mx-auto mb-3">
           <FontAwesomeIcon icon={faPhone}/>
          </span>
                            <h4>
                                <strong>Responsive</strong>
                            </h4>
                            <p className="text-faded mb-0">Looks great on any screen size!</p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
          <span className="service-icon rounded-circle mx-auto mb-3">
            <FontAwesomeIcon icon={faPencilRuler}/>
          </span>
                            <h4>
                                <strong>Redesigned</strong>
                            </h4>
                            <p className="text-faded mb-0">Freshly redesigned for Bootstrap 4.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
          <span className="service-icon rounded-circle mx-auto mb-3">
            <FontAwesomeIcon icon={faHtml5}/>
          </span>
                            <h4>
                                <strong>Favorited</strong>
                            </h4>
                            <p className="text-faded mb-0">Millions of users
                                <i className="fas fa-heart"/>
                                Start Bootstrap!</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
          <span className="service-icon rounded-circle mx-auto mb-3">
       <FontAwesomeIcon icon={faLaptop}/>
          </span>
                            <h4>
                                <strong>Question</strong>
                            </h4>
                            <p className="text-faded mb-0">I mustache you a question...</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceSection;
