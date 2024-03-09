import { useState, useEffect } from "react";
export default function App() {
  const [cards, setCards] = useState([]);
  const fetchData = async () => {
    // let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let a = await fetch("https://jsonplaceholder.typicode.com/photos");
    let data = await a.json();
    setCards(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <>
      <nav className="bg-slate-700">
        <ul className="flex gap-4 text-slate-300 p-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="flex flex-wrap gap-4 p-4 bg-red-300">
        {cards.map((card) => {
          return (
            <div key={card.id} className="max-w-[23vw] m-auto p-4 border-2">
              <h1 className="text-xl font-bold">{card.title}</h1>
              {/* <img src={card.url} alt="" /> */}
              <img src={card.thumbnailUrl} alt="" />
              <p className="py-4">{card.body}</p>
              {/* <span>By: UserId: {card.userId}</span> */}
              <span>By: AlbumId: {card.albumId}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
