import './AddPost.css'
import { useForm } from "react-hook-form";


function AddPost({post, setPost}) {

    // React Hooks
    const {
        register,
        handleSubmit
    } = useForm();

    // Sending Post into are DataState
    const onSubmit = (data) => {
        data.comments = 0;
        data.shares = 0;
        data.readTime = Math.round((data.content.length /100 * 0.3 ));
        data.created = new Date().toISOString();
        data.id = post.length + 1;
        setPost((prevPosts) => [...prevPosts, data]);
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

        </>
    );
}

export default AddPost;