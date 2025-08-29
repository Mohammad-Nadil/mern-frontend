import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { Link, useNavigate, useParams } from "react-router";
import api from "../utils/axios";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

const Show = () => {
  const [note, setNotes] = useState("");
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const req = await api.get(`/notes/find/${id}`);
        setNotes(req.data.data);
        console.log(req.data.data);
      } catch (error) {
        console.log(error);
        toast.error("something went wrong !!!");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      setLoading(true);
      await api.delete(`/notes/delete/${note._id}`);
      toast.success("Note deleted successfully !!!");
      setNotes((prevNote) => prevNote.filter((note) => note._id !== props._id));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <div className=" flex items-start justify-start h-full p-3 lg:p-10">
        <div className="card w-full  bg-base-100 card-xl shadow-sm">
          <div className="card-body">
            <img className="w-2/3  " src={note.image} alt="" />
            <h2 className="card-title">{note.title}</h2>
            <p>{note.content}</p>
            <div className="justify-end card-actions">
              <Link to={`/update/${note._id}`}>
                <button className="btn btn-primary hover:scale-110 duration-300 transition-all">
                  Edit
                </button>
              </Link>
              <div>
                <button
                  onClick={handleDelete}
                  className="btn btn-error hover:scale-110 duration-300 transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Show;
