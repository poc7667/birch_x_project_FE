import Header from "./components/Header";
import React from "react";

const StoreLayout = (props) => {
    return (
        <>
            <Header>
            </Header>
            <section className="section">
                <div className="container">
                    <div id="page-content">
                        {props.children}
                    </div>
                </div>
            </section>

        </>
    )
}
export default StoreLayout;