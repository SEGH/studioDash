import React from "react";
import { ARTICLES_NAME } from "../customStudio";
import { connect } from "react-redux";

function Articles(props) {
    const { articles } = props;

    return (
        <main>
            <h1>{ARTICLES_NAME}</h1>
            {articles.map((article) => {
                return <div><h2>{article.title}</h2><p>{article.body}</p></div>
            })}
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(Articles)