import MovieCard from "./LibraryCard";

const DynamicValues = () => {

    let paragraph = () => {
        let text = "Hello shahzaib";
        console.log(0 && text);
        return text;
    };
    
    const age = 18

    const student = [4,5,6]

    return ( 
        <>

            <p>{paragraph()}</p>
            <h3>Age: {age}</h3>
            <p>Student length: {!student.length ? "no student found" : student.length}</p>

            <button>{age>= 18 ? "See" : "Error..."}</button>

            <MovieCard/>

        </>
     );
}
 
export default DynamicValues;




