import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import toast from "react-hot-toast";
import api from "../utils/axios";
import { useNavigate } from "react-router";
import { CloudUpload } from "lucide-react";
import Loader from "../components/Loader";

const Add = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("title & content is required !!!");
    } else {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("image", file);

        await api.post("/notes/add", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("note created successfully !!!");
        navigate("/");
      } catch (error) {
        toast.error("something went wrong !!!");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5"
      >
        <div className="img ">
          <div className="flex flex-col items-center gap-3 relative bg-transparent">
            <label
              htmlFor="file"
              className="flex flex-col items-center justify-center w-80 p-6 border-2 border-dashed border-base-content/20 rounded-2xl cursor-pointer   text-base-content shadow-lg hover:border-primary transition  bg-transparent"
            >
              {preview && (
                <img
                  src={preview}
                  alt="preview"
                  className=" object-contain h-full opacity-50 rounded-lg border shadow absolute z-10"
                />
              )}
              <CloudUpload className="size-10 text-primary" />
              <p className="text-sm relative z-20 ">Drag & Drop</p>
              <p className="text-xs text-base-content/60 relative z-20 ">or</p>
              <span className="mt-1 px-3 py-1 bg-primary text-primary-content rounded-lg text-sm hover:bg-primary/80 transition relative z-20 ">
                Browse file
              </span>
              <input
                id="file"
                type="file"
                onChange={handleFileChange}
                className="hidden relative z-20 "
              />
            </label>
          </div>
        </div>
        <div className="title">
          <fieldset className="fieldset min-w-2xs ">
            <legend className="fieldset-legend text-xl ">Title</legend>
            <input
              type="text"
              className="input md:input-lg"
              placeholder=" Title "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </fieldset>
        </div>
        <div className="content">
          <fieldset className="fieldset min-w-2xs">
            <legend className="fieldset-legend text-xl ">Content</legend>
            <textarea
              className=" textarea  md:textarea-lg h-24"
              placeholder="Your content here"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </fieldset>
        </div>
        <div className="button">
          <button type="submit" className="btn ">
            Submit
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Add;
