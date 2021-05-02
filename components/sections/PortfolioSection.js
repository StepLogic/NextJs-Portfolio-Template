import Head from "next/head";
import NavComponent from "../NavComponent";
import {projects} from "../../data/projects";
import PortfolioComponent from "../PortfolioComponent";

const PortfolioSection = () => {


    return (
        <>
            <section className="content-section" id="portfolio">
                <div className="container">
                    <div className="content-section-heading text-center">
                        <h3 className="text-secondary mb-0">Portfolio</h3>
                        <h2 className="mb-5">Recent Projects</h2>
                    </div>
                    <div className="row no-gutters">
                        {projects.map(projects=>{return(
                            <PortfolioComponent
                            title={projects.title}
                            image={projects.image}
                            description={projects.description}
                            link={projects.link}
                            />

                            )})}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioSection;
