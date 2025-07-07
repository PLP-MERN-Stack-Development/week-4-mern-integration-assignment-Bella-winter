import { useEffect, useState } from "react";
import { postService } from "../services/api";
import Navbar from "../components/Navbar";
import PostCard from "../Components/PostCard";
import PostDialog from "../components/PostDialog";
import { toast } from "sonner";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  // Load all posts by the logged-in user
  const loadPosts = async () => {
    try {
      const res = await postService.getAllPosts(); // You might filter by user in backend
      setPosts(res.posts || []);
    } catch (err) {
      toast.error("Failed to load posts");
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const createPost = async (data) => {
    try {
      const newPost = await postService.createPost(data);
      setPosts(prev => [newPost, ...prev]);
      toast.success("Post created ✔️");
    } catch (err) {
      toast.error("Failed to create post");
    }
  };

  const deletePost = async (id) => {
    try {
      await postService.deletePost(id);
      setPosts(prev => prev.filter(p => p._id !== id));
      toast.success("Post deleted 🗑️");
    } catch (err) {
      toast.error("Failed to delete post");
    }
  };

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">Manage your blog posts</p>
          </div>
          <PostDialog onSubmit={createPost} />
        </div>

        <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h2 className="font-semibold text-blue-900 dark:text-blue-100">Your Posts</h2>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Total posts: {posts.length}
          </p>
        </div>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              onDelete={deletePost}
            />
          ))}
        </section>
      </main>
    </>
  );
}