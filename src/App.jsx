import { Route, Routes } from "react-router-dom";
import PostLists from "./Pages/PostLists";
import Post from "./Pages/post";
import EditPost from "./Pages/EditPost";

export default function App() {
  return (
    <section className="pl-10 space-y-10">
      <h1 className="text-5xl">BOY Blog</h1>
      <Routes>
        <Route path="/" element={<PostLists />} />,
        <Route path="/post/:id" element={<Post />} />,
        <Route path="/post/:id/edit" element={<EditPost />} />
      </Routes>
    </section>
  );
}
