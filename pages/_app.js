import { Fragment } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </Fragment>
    );
}

export default MyApp;
