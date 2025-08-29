import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import NoteCard from "../components/NoteCard";
import api from "../utils/axios";
import NotesNotFound from "../components/NotesNotFound";
import Loader from "../components/Loader";
import RateLimitedUI from "../components/RateLimitedUI";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/notes/all");
        setNotes(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log(error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (isRateLimited) {
    return <RateLimitedUI />;
  }

  return (
    <Container>
      {notes.length <= 0 && <NotesNotFound />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {notes.map((note) => (
          <NoteCard key={note._id} props={note} setNotes={setNotes} setLoading={setLoading} />
        ))}
      </div>
    </Container>
  );
};

export default Home;
