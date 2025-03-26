import './AddPost.css'
import { useForm } from "react-hook-form";
import axios from "axios";
import {useState} from "react";
import {Link} from "react-router-dom";


function AddPost({fetchData}) {
    const [message, setMessage] = useState("");
    const [idPost, setIdPost] = useState("");
    // React Hooks
    const {
        register,
        handleSubmit
    } = useForm();

    // Sending Post into are DataState
    const onSubmit = async (data) => {
        data.comments = 0;
        data.shares = 0;
        data.readTime = Math.round((data.content.length /100 * 0.3 ));
        data.created = new Date().toISOString();
        setMessage("");
        try {
            const result = await axios.post("http://localhost:3000/posts", data);
            console.log(result);
            setIdPost(result.data.id);
        }
        catch (error) {
            console.error(error);
            setMessage(error.message);
        }finally {
            fetchData();
        }


    };

    return (
        <>
            <h2 className="posting-title">Post Toevoegen</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="input-container">
                    <label className="block">Titel</label>
                    <input
                        {...register("title")}
                        className="border"
                    />
                </div>

                <div className="input-container">
                    <label className="block">Subtitle</label>
                    <input
                        {...register("subtitle")}
                        className="border"
                    />
                </div>

                <div className="input-container">
                    <label className="block">Naam en achternaam</label>
                    <input
                        {...register("author")}
                        className="border"
                    />
                </div>

                <div className="input-container">
                    <label className="block">Blogpost</label>
                    <textarea
                        {...register("content")}
                        className="border-post"
                        rows="10"
                    />
                </div>

                <button type="submit" className="submit-post">
                    Toevoegen
                </button>
            </form>
            <div>
                {message && <p className="form-error-message">{message}</p>}
                {idPost && <p className="form-message">Post is toegevoegd.<Link className="new-link" to={`/posts/${idPost}`}>Bekijk de hier gemaakte post</Link></p>}
            </div>

        </>
    );
}

export default AddPost;