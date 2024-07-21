import { useEffect, useState } from "react";

export const PlaylistCard = ({ id, name, type, author, bannerImg }) => {
  
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentId = currentPath.split("/").pop();
    setSelectedId(currentId);
  }, []);

  const handleClick = (e, id) => {
    if (selectedId == id) {
      //console.log("entro");
      e.preventDefault();
    } else {
      setSelectedId(id);
    }
  };

  return (
    <a
      className={`flex flex-row gap-3 items-center rounded-[4px] 
        p-2 transition-all duration-150 cursor-pointer 
      ${selectedId == id ? "bg-gray-500/30" : "hover:bg-gray-500/20"}`}
      onClick={(e) => handleClick(e, id)}
      href={`/playlist/${id}`}
    >
      <div className="flex">
        <img
          src={bannerImg}
          className="w-12 h-12 rounded-[4px] object-cover"
          width={48}
          height={48}
          alt={name}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-0.5 mb-0.5">
        <p className="tracking-normal font-medium">{name}</p>
        <div className="flex flex-row items-center gap-2">
          <span className="text-sm">
            {type} • {author}
          </span>
        </div>
      </div>
    </a>
  );
};
