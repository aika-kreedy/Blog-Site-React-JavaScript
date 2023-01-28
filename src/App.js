import{ React,useState} from 'react';
import posts from './components/items';
import List from './components/List';
import Catagries from './components/Catagries';
import Footer from './components/Footer';
import Navbar from './components/Navbar';




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
  <header><Navbar /></header>
  <main>
    <section className="menu section">
      <div className="title">
        <h2>Aika Blog</h2>
      </div>

      <Catagries category={category} filterList={filterList} />
      <div className="underline"></div>

    <List listPosts={listPosts}/>
    </section>

    <Footer  className="footer" />
  </main>
  </>
);
}

export default App;