

 import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription,
  DialogFooter, DialogClose
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import PropTypes from "prop-types";

export default function PostDialog({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");

  const handleCreate = () => {
    if (!title || !content) {
      alert("Title and content are required");
      return;
    }
    onSubmit({ title, content, excerpt });
    setTitle("");
    setContent("");
    setExcerpt("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Post</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Blog Post</DialogTitle>
          <DialogDescription>
            Fill in the fields below to publish a new blog post.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <Input
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            placeholder="Post Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
          />

          <Textarea
            placeholder="Short Excerpt (optional)"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={2}
          />
        </div>

        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button variant="outline" type="button">Cancel</Button>
          </DialogClose>
          <Button onClick={handleCreate} type="button">Publish</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

PostDialog.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};