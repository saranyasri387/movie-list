// import React, { useState,useEffect } from 'react';
// import { getPopularMovies } from '../services/api';
// import axios from 'axios';
// import MovieCard from '../components/MovieCard';



// const MovieApp = () => {
//   const [movies, setMovies] = useState([])
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const API_KEY = 'ceefecfa9d5079f77ce0c642d8336bad';
//   const BASE_URL = 'https://api.themoviedb.org/3';

//   useEffect(()=>{
//     const fetchMovies = async ()=>{
//       try{
//         const popular = await getPopularMovies();
//         setMovies(popular);
//       }catch(error){
//         console.error("error loading movies:", error);
//       }
//     }
//       fetchMovies();
//   }, [])

//   // Function to fetch specific movie details
//   const fetchMovieDetails = async (movieId) => {
//     setLoading(true);
//     console.log("clicked movie id:", movieId);
    

//     try {
        
//       const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
//       console.log("movie details". response.data);
      
    
//       setSelectedMovie(response.data); // This contains the 'overview'
//     } catch (error) {
//       console.error("Error fetching movie details:", error);
//     } finally {
//       setLoading(false);
//     }
//   }; 

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>My Movie List</h2>
//       {/* Example Trigger - In a real app, you'd map through a list here */}

//       <div>{movies.map((movie)=> (
//       <div key={movie.id} onClick={()=>fetchMovieDetails(movie.id)}>
//         <MovieCard movie={movie}/>
//       </div>
//       ))}
//       </div>

//       {loading && <p>Loading details...</p>}

//       {/* The Popup / Modal */}
//       {selectedMovie && (
//         <div style={modalStyles.overlay}>
//           <div style={modalStyles.content}>
//             <button onClick={() => setSelectedMovie(null)} style={{ float: 'right' }}>X</button>
//             <h3>{selectedMovie.title}</h3>
//             <p><strong>Description:</strong> {selectedMovie.overview}</p>
//           </div>
//         </div>
//       )}
//       </div>
//   );
// }

// // Simple inline styles for the popup
// const modalStyles = {
//     overlay: {
//         position: "fixed",
//         top:0,
//         left:0,
//         right:0,
//         bottom:0,
//         backgroundColor: "black",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         zIndex: 1000,

//     },
//     content:{
//         backgroundColor: "white",
//         padding: "20px",
//         borderRadius: "8px",
//         maxWidth: "500px",
//         color: "#333",
//     },
// };

// export default MovieApp;