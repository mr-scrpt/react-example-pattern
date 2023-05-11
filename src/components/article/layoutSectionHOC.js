import React from 'react';
import ArticleViewList from './articleViewList';
import ArticleViewTable from './articleViewTable';

function LayoutSectionHOC(Component) {
  return (props) => {

    return (
      <section className='section' style={{color: "red", padding: "150px 30px"}}>
        <h1>{props.titleSection}</h1>
        <Component
          {...props}
        />
      </section>
    );
  };

}
export const ArticleTableWithLayout = LayoutSectionHOC(ArticleViewTable);
export const ArticleListWthLayout = LayoutSectionHOC(ArticleViewList);

export default LayoutSectionHOC;


