import React from "react";
import PropTypes from "prop-types";
import { Container } from "../../atoms/Container";
import articles from "../../../content/latest-articles.json";

LatestArticles.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export function LatestArticles({ className = "", padding }) {
    return (
        <section className={` ${className}`}>
            <div
                style={{
                    width: "90vw",
                    margin: "0px auto",
                    fontSize: "22px",
                }}
            >
                Latest from Mula
            </div>
            <Container className="gap-12" padding={padding}>
                {articles.map((article, index) => (
                    <div className="md:col-span-4" key={index}>
                        <img src={article.coverImage} />
                        <div
                            style={{
                                padding: "20px 0px",
                                fontSize: "12px",
                                color: "grey",
                            }}
                        >
                            {article.publishDate}
                        </div>
                        <div>{article.heading}</div>
                    </div>
                ))}
            </Container>
        </section>
    );
}
