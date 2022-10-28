// context API (Warehouse)
// Provider (Delivery Boy)
// Consumer / useContext (You)
// children (your order)
// To make available delivery boy everywhere you need to wrap Provider in a index.js then it will pass data everywhere in the app.
import React,{useContext, useState} from 'react';



//make warehouse / context
const AppContext = React.createContext();

//create Provider / Delivery boy
const AppProvider = ({children}) => {

    // const [isLoading, setIsLoading] = useState(true);
    // const [movie, setMovie] = useState([]);
    // const [isError, setIsError] = useState({show:"false", msg:""});
    // const [search,setSearch] = useState("slow");

    
    // const getMode = () => {
    //     return  JSON.parse(localStorage.getItem("mode")) || false;
    //  }

    const [bgGray, setBgGray]= useState(false);
    const [langEng,setLangEng] = useState(true);
    const [langHindi,setLangHindi] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const[searchOnPhone,setSearchOnPhone] = useState(false);

    // useEffect(() => {
    //     localStorage.setItem("mode",JSON.stringify(dark));
    // },[dark]);
   

   const toggleBgGray = () => {
        setBgGray(!bgGray);
   }


    return <AppContext.Provider 
    value={{bgGray, setBgGray, toggleBgGray, langEng, setLangEng, langHindi, setLangHindi,
    searchInput,setSearchInput,
    searchOnPhone,setSearchOnPhone,
    }}>
    {children}
    </AppContext.Provider>
};

//global custom hooks
const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};