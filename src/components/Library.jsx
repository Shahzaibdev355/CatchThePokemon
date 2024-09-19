import LibraryCard from "./LibraryCard";
import Books from "./Books.json";

import 'bootstrap/dist/css/bootstrap.min.css';

const Library = () => {
  return (
    <>
      <div className="row justify-content-between">
        {Books.map((element) => (
           <LibraryCard key={element._id} element={element} />
        ))}
      </div>
    </>
  );
};

export default Library;





