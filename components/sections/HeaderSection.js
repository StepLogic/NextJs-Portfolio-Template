import Head from "next/head";
import NavComponent from "../NavComponent";

const HeaderSection = () => {


    return (
        <>
            <header className="container-fluid" id="masthead">
                    <NavComponent/>
                    <div id="text-container" className="text-center">
                    <h1 className="mb-1">Stylish Portfolio</h1>
                    <h3 className="mb-5">
                        <em>A Free Bootstrap Theme by Start Bootstrap</em>
                    </h3>
                    <a className="btn btn-primary btn-xl" href="#about">Find Out More</a>
                    </div>
            </header>
        </>
    );
};

export default HeaderSection;
