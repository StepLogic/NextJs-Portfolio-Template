import Head from "next/head";
import NavComponent from "../NavComponent";

const CallbackSection = () => {


    return (
        <>
            <section className="callout">
                <div className="container text-center">
                    <h2 className="mx-auto mb-5">Welcome to<br/>
                        <em>your</em><br/>
                        next website!</h2>
                    <a className="btn btn-primary btn-xl" href="https://startbootstrap.com/theme/stylish-portfolio/">Download
                        Now!</a>
                </div>
            </section>
        </>
    );
};

export default CallbackSection;
