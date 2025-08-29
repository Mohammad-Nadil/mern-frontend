import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import api from "../utils/axios";

const NoteCard = ({ props, setNotes, setLoading }) => {
  const handleDelete = async (e) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      setLoading(true);
      await api.delete(`/notes/delete/${props._id}`);
      toast.success("Note deleted successfully !!!");
      setNotes((prevNote) => prevNote.filter((note) => note._id !== props._id));
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Link
        to={`/show/${props._id}`}
        className="card bg-base-100 image-full w-full shadow-sm"
      >
        <figure>
          <img src={props.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.content}</p>
          <div className="card-actions justify-end">
            <Link to={`/update/${props._id}`}>
              <button className="btn btn-primary hover:scale-110 duration-300 transition-all">
                Update
              </button>
            </Link>
            <button
              className="btn btn-error hover:scale-110 duration-300 transition-all "
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NoteCard;
