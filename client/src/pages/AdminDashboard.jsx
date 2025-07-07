import { useEffect, useState } from "react";
import API from "../services/api";
import PostCard from "../components/PostCard";
import PostDialog from "../components/PostDialog";
import Navbar from "../components/Navbar";
import { toast } from "sonner";

export default function AdminDashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const response = await API.get("/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error loading posts:", error);
      toast.error("Failed to load posts");
    }
  };

  const createPost = async (post) => {
    try {
      const res = await API.post("/posts", post);
      setPosts((prev) => [res.data, ...prev]);
      toast.success("Post created successfully");
    } catch (error) {
      toast.error("Error creating post");
    }
  };

  const togglePost = async (id) => {
    try {
      const task = posts.find((t) => t._id === id);
      const res = await API.put(`/posts/${id}`, { completed: !task?.completed });
      setPosts((prev) => prev.map((t) => (t._id === id ? res.data : t)));
      toast.success("Post updated ✔️");
    } catch (error) {
      toast.error("Failed to update post");
    }
  };

  const deletePost = async (id) => {
    try {
      await API.delete(`/posts/${id}`);
      setPosts((prev) => prev.filter((t) => t._id !== id));
      toast.success("Post deleted 🗑️");
    } catch (error) {
      toast.error("Failed to delete post");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <PostDialog onSave={createPost} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              onToggle={() => togglePost(post._id)}
              onDelete={() => deletePost(post._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
