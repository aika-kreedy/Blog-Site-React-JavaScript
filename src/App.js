import{ React,useState} from 'react';
import posts from './components/items';
import List from './components/List';
import Catagries from './components/Catagries';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Search from './components/SearchBar';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import SearchList from "./components/SearchList";
import { Routes, Route } from 'react-router-dom'; 
import WriteWithUs from './components/writewithus/WriteWithUs';


const App = () => {
  
 const tagsArr = posts.map((i)=>i.tags);
 const mergArr = [].concat(...tagsArr);
  const allCategory = ["All",...new Set(mergArr)];
  const chooseRandom = ( allCategory, num = 1) => {
    const res = [];
    for(let i = 0; i < num; ){
      const random = Math.floor(Math.random() * allCategory.length);
      if(res.indexOf(allCategory[random]) !== -1){
        continue;
      };
      res.push(allCategory[random]);
      i++;
    };
    return res;
  };
  const fiveItemsArr = chooseRandom(allCategory, 5);
  console.log(fiveItemsArr);
  const [listPosts,setlistPosts] = useState(posts);
  const [category,setCategory] = useState(allCategory);
  const [searchResults, setSearchResults] = useState([]);
  const filterList = (c) =>{
    if (c === 'All') {
      setlistPosts(posts);
      return;
    }
    const newList = posts.filter((i)=>(i.tags).includes(c) === true)
     setlistPosts(newList);
    
  };
  
 
return (
  <>
  <header className='header'><Navbar /></header>
  <main>

  <Routes>
        <Route
          path="/"
          element={
     <>
    <section className="menu section">
      <div className="title">
        <h2>Aika Blog</h2>
      </div>
        <Catagries category={category} filterList={filterList} />
      <div> 
            <Search listPosts={listPosts} searchResults={searchResults} setSearchResults={setSearchResults} />
              {searchResults.length <= 0 ? (<List listPosts={listPosts}/>):(<SearchList searchResults={searchResults} /> )}
      </div>
         <div className="underline"></div>
    </section>
     </>}/>

        <Route path="/about" element={<About />} />
        <Route path="/write" element={<WriteWithUs />} />
        <Route path="/contact" element={<Contact />} />

        </Routes>
    <Footer  className="footer" />
  </main>
  </>
);
}

export default App;