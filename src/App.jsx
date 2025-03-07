import './App.css'
import Navbar from './compoments/navbar/Navbar.jsx'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AddPost from "./pages/addpost/AddPost.jsx";
import Overview from "./pages/overview/Overview.jsx";
import Error404 from "./pages/error404/Error404.jsx";
import Posts from "./pages/posts/Posts.jsx";
import JsonData from './constants/data.json';
import { useState } from "react";

function App() {
    const  [data, setData] = useState(JsonData);

    return (<>

        <Navbar/>
        <main className="main-container">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/allposts" element={<Overview data={data}/>}/>
                <Route path="/addpost" element={<AddPost/>}/>
                {data.map((data) => (
                    <Route key={data.id} path={`/posts/${data.id}`} element={<Posts data={data} />}/>
                ))}
                {/*<Route path="/posts/:id" element={<Posts data={data} />}/>*/}
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </main>


    </>)
}

export default App
