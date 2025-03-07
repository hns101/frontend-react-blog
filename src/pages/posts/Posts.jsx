import './Posts.css'
import {Link} from "react-router-dom";

function Posts({data}) {
    // Added formating the date
    const date = new Date(data.created);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("nl-NL", options);

    return (
        <>
            <div className="post-container">
                <h2 className="post-title">{data.title}</h2>
                <p className="post-subtitle">{data.subtitle}</p>
                <p className="post-published">{`Geschreven door ${data.author} op ${formattedDate}`}</p>
                <p className="post-readtime">{`🕒${data.readTime} minuten lezen`}</p>
                <p className="post-content">{data.content}</p>
                <p className="post-info">{`${data.comments} reacties - ${data.shares} keer gedeeld`}</p>
                <Link className="post-backlink" to="/allposts">‹ Terug naar de Overzichtspagina</Link>
            </div>
            <footer className="post-footer">
                 <p className="post-footer-text" >Blogventure © {new Date().getFullYear()}</p>
            </footer>


        </>
    );
}

export default Posts;