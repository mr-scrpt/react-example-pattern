import React, {useState, useEffect} from 'react';
import data from '../../data/data.json';
import ArticleViewList from './articleViewList';
import ArticleViewTable from './articleViewTable';

function ArticleSuperHOC(Component) {
  const ArticleWithData = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState([]);

    useEffect(() => {
      setTitle(data.title);
      setDescription(data.description);
      setContent(data.content);
    }, []);

    return (
      <Component
        title={title}
        description={description}
        content={content}
        {...props}
      />
    );
  };

  return ArticleWithData;
}
export const ArticleWithHOCTable = ArticleSuperHOC(ArticleViewTable);
export const ArticleWithHOCList = ArticleSuperHOC(ArticleViewList);

export default ArticleSuperHOC;

