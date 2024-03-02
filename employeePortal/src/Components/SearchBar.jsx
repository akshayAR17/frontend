// import React, { useState } from "react";
// import axios from "axios";

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   // Function to handle input change
//   const handleChange = async (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);

//     // Fetch suggestions based on search term
//     const newSuggestions = await getSuggestions(value);
//     setSuggestions(newSuggestions);
//   };

//   // Function to fetch suggestions from the API
//   const getSuggestions = async (term) => {
//     try {
//       const response = await axios.get('http://localhost:8080/employeeNames');
//       const employeeNames = response.data; // Assuming the response contains an array of employee names
//       return employeeNames.filter(name => name.toLowerCase().includes(term.toLowerCase())).slice(0, 5);
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//       return [];
//     }run 
//   };

//   // Function to handle suggestion click
//   const handleSuggestionClick = (suggestion) => {
//     setSearchTerm(suggestion);
//     setSuggestions([]);
//   };

//   return (
//     <div className="search-bar-container">
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={handleChange}
//         placeholder="Search..."
//         className="search-input"
//       />
//       <ul className="suggestions-list">
//         {suggestions.map((suggestion, index) => (
//           <li key={index} onClick={() => handleSuggestionClick(suggestion)} className="suggestion-item">
//             {suggestion}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";
// import axios from "axios";
// import { TextField, Button, List, ListItem, ListItemText, Paper } from '@mui/material';

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   // Function to handle input change
//   const handleChange = async (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);

//     // Fetch suggestions based on search term
//     const newSuggestions = await getSuggestions(value);
//     setSuggestions(newSuggestions);
//   };

//   // Function to fetch suggestions from the API
//   const getSuggestions = async (term) => {
//     try {
//       const response = await axios.get('http://localhost:8080/employeeNames');
//       const employeeNames = response.data; // Assuming the response contains an array of employee names
//       return employeeNames.filter(name => name.toLowerCase().includes(term.toLowerCase())).slice(0, 5);
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//       return [];
//     }
//   };

//   // Function to handle suggestion click
//   const handleSuggestionClick = (suggestion) => {
//     setSearchTerm(suggestion);
//     setSuggestions([]);
//   };

//   // Function to handle search button click
//   const handleSearchClick = async () => {
//     // Perform search action based on the search term
//     console.log("Search clicked:", searchTerm);
//     const userData = await axios.get('');
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <TextField
//         value={searchTerm}
//         onChange={handleChange}
//         placeholder="Search..."
//         sx={{ width: '100%', marginTop: 1 }}
//       />
//       <Paper elevation={3} style={{ width: '100%', marginTop: 1 }}>
//         <List>
//           {suggestions.map((suggestion, index) => (
//             <ListItem
//               key={index}
//               onClick={() => handleSuggestionClick(suggestion)}
//               style={{ cursor: 'pointer' }}
//             >
//               <ListItemText primary={suggestion} />
//             </ListItem>
//           ))}
//         </List>
//       </Paper>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleSearchClick}
//         style={{ marginTop: 1 }}
//       >
//         Search
//       </Button>
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";
// import axios from "axios";
// import { TextField, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, Paper } from '@mui/material';
// import { useNavigate } from 'react-router-dom';


// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const navigate = useNavigate();

//   // Function to handle input change
//   const handleChange = async (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);

//     // Fetch suggestions based on search term
//     const newSuggestions = await getSuggestions(value);
//     setSuggestions(newSuggestions);
//   };

//   // Function to fetch suggestions from the API
//   const getSuggestions = async (term) => {
//     try {
//       const response = await axios.get('http://localhost:8080/employeeNames');
//       const employeeNames = response.data; // Assuming the response contains an array of employee names
//       return employeeNames.filter(name => name.toLowerCase().includes(term.toLowerCase())).slice(0, 5);
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//       return [];
//     }
//   };

//   // Function to handle suggestion click
//   const handleSuggestionClick = (suggestion) => {
//     setSearchTerm(suggestion);
//     setSuggestions([]);
//   };

//   // Function to handle search button click
//   const handleSearchClick = async () => {
//     // Perform search action based on the search term
//     console.log("Search clicked:", searchTerm);
//     navigate(`/details/${id}`);
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <TextField
//         value={searchTerm}
//         onChange={handleChange}
//         placeholder="Search..."
//         sx={{ width: '100%', marginTop: 1 }}
//       />
//       <Paper elevation={3} style={{ width: '100%', marginTop: 1 }}>
//         <List>
//           {suggestions.map((suggestion, index) => (
//             <ListItem
//               key={index}
//               onClick={() => handleSuggestionClick(suggestion)}
//               style={{ cursor: 'pointer' }}
//             >
//               <ListItemAvatar>
//                 <Avatar src="url_to_image" alt="Avatar" />
//               </ListItemAvatar>
//               <ListItemText primary={suggestion} />
//             </ListItem>
//           ))}
//         </List>
//       </Paper>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleSearchClick}
//         style={{ marginTop: 1 }}
//       >
//         Search
//       </Button>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // Function to handle input change
  const handleChange = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Fetch suggestions based on search term
    const newSuggestions = await getSuggestions(value);
    setSuggestions(newSuggestions);
  };

  const getSuggestions = async (term) => {
    try {
      const response = await axios.get('http://localhost:8080/employeeNames');
      const employeeNames = response.data;
      return employeeNames.filter(name => name.toLowerCase().includes(term.toLowerCase())).slice(0, 5);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      return [];
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  const handleSearchClick = async () => {
    console.log("Search clicked:", searchTerm);
    navigate(`/search-by-name/${searchTerm}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TextField
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
        sx={{ width: '100%', marginTop: 1 }}
      />
      <Paper elevation={3} style={{ width: '100%', marginTop: 1 }}>
        <List>
          {suggestions.map((suggestion, index) => (
            <ListItem
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{ cursor: 'pointer' }}
            >
              <ListItemAvatar>
                <Avatar src="url_to_image" alt="Avatar" />
              </ListItemAvatar>
              <ListItemText primary={suggestion} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearchClick}
        style={{ marginTop: 1 }}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;


