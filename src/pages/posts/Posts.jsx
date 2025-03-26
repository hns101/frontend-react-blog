import './Posts.css'
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

function Posts({dataId, fetchData}) {
    // Added formating the date

    const navigate = useNavigate();
    const [dataPost, setDatapost] = useState([]);

    const fetchPost = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/posts/${dataId}`, {})
            setDatapost(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const deletePost = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/posts/${dataId}`, {})
            console.log(response.statusText)
            fetchData();
        } catch (error) {
            console.error(error);
        } finally {
            navigate("/allposts");
        }
    };

    const date = new Date(dataPost.created);
    const options = {day: "numeric", month: "long", year: "numeric"};
    const formattedDate = date.toLocaleDateString("nl-NL", options);

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <>
            <div className="post-container">
                <h2 className="post-title">{dataPost.title}</h2>
                <p className="post-subtitle">{dataPost.subtitle}</p>
                <p className="post-published">{`Geschreven door ${dataPost.author} op ${formattedDate}`}</p>
                <p className="post-readtime">{`🕒${dataPost.readTime} minuten lezen`}</p>
                <p className="post-content">{dataPost.content}</p>
                <p className="post-info">{`${dataPost.comments} reacties - ${dataPost.shares} keer gedeeld`}</p>
                <Link className="post-backlink" to="/allposts">‹ Terug naar de Overzichtspagina</Link>
            </div>

            <button className="delete-button" onClick={deletePost}>Delete Post</button>
            <footer className="post-footer">
                <p className="post-footer-text">Blogventure © {new Date().getFullYear()}</p>
            </footer>
        </>
    );
}

export default Posts;