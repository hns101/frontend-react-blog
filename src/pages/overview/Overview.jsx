import React from 'react';
import './Overview.css'
import {Link} from "react-router-dom";

function Overview({data,error}) {
    return (
        <>
            <h2 className="overview-title">{`Bekijk alle ${data.length} posts op het platform`}</h2>
            {error && <h3 className="error-message">{error}</h3>}
            <div className="overview-container">
                {data.map((data) => (
                    <Link key={data.id} to={`/posts/${data.id}`} className="link-field">
                        <div key={data.id} className="link-card">
                            <h3 className="link-title">{data.title}</h3>
                            <span className="link-author">{`(${data.author})`}</span>
                            <p className="link-info">{`${data.comments} reacties - ${data.shares} keer gedeeld`}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Overview;