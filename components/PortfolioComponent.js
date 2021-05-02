import Head from "next/head";

const PortfolioComponent = (props) => {


    return (
        <div className="col-lg-6">
            <a className="portfolio-item" href={props.link}>
                <div className="caption">
                    <div className="caption-content">
                        <div className="h2">{props.title}</div>
                        <p className="mb-0">{props.description}</p>
                    </div>
                </div>
                <img className="img-fluid" src={props.image} alt=""/>
            </a>
        </div>
    );
};

export default PortfolioComponent;
