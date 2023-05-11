import React from 'react';

function ArticleViewList({title, description, content}) {

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

export default ArticleViewList;
