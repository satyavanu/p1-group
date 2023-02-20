import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header logoSrc="ET-logo.png" logoAlt="P1 Group" />
            <main>
                <div className="content">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
};

export default Layout;