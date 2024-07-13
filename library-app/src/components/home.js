import { useState } from "react";
import "../CSS/home.css";

function Home() {
  const user = JSON.parse(localStorage.getItem("userData"));
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "مقدمة ابن خلدون ",
      author: "ابن خلدون ",
      isbn: "1289499030",
    },
    {
      id: 2,
      title: "الحاوي في الطب ",
      author: "ابو بكر الرازي ",
      isbn: "893847239479",
    },
    {
      id: 3,
      title: "عبقرية الإمام علي",
      author: "عباس محمود العقاد",
      isbn: "9789777194693",
    },
    {
      id: 4,
      title: "عبقرية محمد",
      author: "عباس محمود العقاد ",
      isbn: " 9789777195331",
    },
    {
      id: 5,
      title: "عبقرية الصديق",
      author: "عباس محمود العقاد ",
      isbn: "9789777194266",
    },
    {
      id: 6,
      title: "حياة المسيح",
      author: "عباس محمود العقاد",
      isbn: " 9789777195195",
    },
    {
      id: 7,
      title: "طوق الحمامة",
      author: "ابن حزم",
      isbn: "9782745187777",
    },
    {
      id: 8,
      title: "ألف ليلة وليلة",
      author: "مجهول",
      isbn: "9786050681152",
    },
    {
      id: 9,
      title: "رسالة الغفران",
      author: "أبو العلاء المعري",
      isbn: "9789953844857",
    },
    {
      id: 10,
      title: "العقد الفريد",
      author: "ابن عبد ربه",
      isbn: "9782745127049",
    },
  ]);

  return (
    <>
      <h1>Wlecome {user ? user.name : <></>}</h1>
      <div className="container">
        {books.map((book) => (
          <div className="card">
            <p>{book.id}</p>
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
            <p>{book.isbn}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
