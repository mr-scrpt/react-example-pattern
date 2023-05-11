import React, {useState, useEffect} from 'react';
import data from '../../data/data.json';
import ArticleViewList from './articleViewList';

function ArticleSmart() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState([]);

  useEffect(() => {
    setTitle(data.title);
    setDescription(data.description);
    setContent(data.content);
  }, []);

  return <ArticleViewList
    title={title}
    description={description}
    content={content}
  />;
}

export default ArticleSmart;
