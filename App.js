import React, { useState } from "react";

import Home from "./src/screens/home";
import AddNote from "./src/screens/addNote";
import EditNote from "./src/screens/editNote";

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  getData,
  dataPage,
  editNote,
  deleteNote,
}) => {
  switch (currentPage) {
    case "home":
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          getData={getData}
          deleteNote={deleteNote}
        />
      );
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      return (
        <EditNote
          setCurrentPage={setCurrentPage}
          dataPage={dataPage}
          editNote={editNote}
        />
      );
    default:
      return <Home />;
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem Ipsum is simply dummy text",
    },
    {
      id: 2,
      title: "Note kedua",
      desc: "Lorem Ipsum is simply dummy text",
    },
  ]);
  const [dataPage, setDataPage] = useState(null);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const getData = (id) => {
    const data = noteList.map((note) => {
      if (id == note.id) setDataPage(note);
    });
  };

  const editNote = (id, title, desc) => {
    const newNote = [];
    for (const note of noteList) {
      if (id == note.id) {
        newNote.push({ id, title, desc });
      } else {
        newNote.push(note);
      }
    }

    setNoteList(newNote);
  };

  const deleteNote = (id) => {
    const newNote = [];
    for (const note of noteList) {
      if (id != note.id) {
        newNote.push(note);
      }
    }

    setNoteList(newNote);
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      getData={getData}
      dataPage={dataPage}
      editNote={editNote}
      deleteNote={deleteNote}
    />
  );
}
