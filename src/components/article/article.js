import React, {useState, useEffect} from 'react';
import data from '../../data/data.json';

function Article() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState([]);

  useEffect(() => {
    setTitle(data.title);
    setDescription(data.description);
    setContent(data.content);
  }, []);

  return (
    <div>
      <h1>Article</h1>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>{content && content.map(item => (
        <li key={item.id}> {item} </li>
      ))}</ul>
    </div>
  );
}

export default Article;

