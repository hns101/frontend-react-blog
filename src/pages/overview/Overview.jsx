import React from 'react';
import './Overview.css'
import JsonData from "../../constants/data.json";
import {Link} from "react-router-dom";

function Overview() {
    const [jsonData, setJsonData] = React.useState(JsonData);
    return (
        <>
            <h2 className="overview-title">{`Bekijk alle ${jsonData.length} posts op het platform`}</h2>
            <div className="overview-container">
                {jsonData.map((data) => (
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