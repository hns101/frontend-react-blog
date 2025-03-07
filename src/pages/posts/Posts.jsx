import React from 'react';
import './Posts.css'
import { useParams } from "react-router-dom";

function Posts() {
    const { id } = useParams();

    return (
        <>
            <div>Het web ID is {id}</div>


        </>
    );
}

export default Posts;