import React, { useState } from 'react'
import './writewithus.css';



const WriteWithUs= () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle journal entry submission, e.g., save to a database
  };

  return (
    <div className="news-entry">
      <h2>Create a New News Entry</h2>
      <form onSubmit={handleSubmit}>
       
        <div className='newsEntry-title'>
        <label>Title: <input className='newsEntry-input-title' type="text" value={title} onChange={handleTitleChange} />
        </label>
        </div>
        <div className='newsEntry-text'>
        <label>Text: <textarea value={text} onChange={handleTextChange} />
        </label>
        </div>

       <div className='newsEntry-img'><label>Image: <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        </div>
      <div ><button className='newsEntry-btn' type="submit">Save Entry</button></div>  
      </form>
      <div className="newsEntry-preview">
        {image && <img src={URL.createObjectURL(image)} alt="News Entry" />}
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};




export default WriteWithUs