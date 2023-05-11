import React from 'react';

function ArticleViewTable({title, description, content}) {

  return (
    <div>
      <h1>Article</h1>
      <h1>{title}</h1>
      <p>{description}</p>
      {content && <table border={3}>

        <tr>{content.map(item => (
          <td key={item.id}> {item} </td>
        ))}</tr>
      </table>
      }
    </div>
  );
}

export default ArticleViewTable;
