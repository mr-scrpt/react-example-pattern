import './App.css';
import Article from './components/article/article';
import ArticleSmart from './components/article/articleSmart';
import ArticleSimple from './components/article/articleSimple';
import {ArticleWithHOCTable, ArticleWithHOCList} from './components/article/articleSuperHOC';
import {ArticleListWthLayout, ArticleTableWithLayout} from './components/article/layoutSectionHOC';


function App() {
  return (
    <div className="App">
      <ArticleSimple />
      <Article />
      <ArticleSmart />
      <ArticleWithHOCTable />
      <ArticleWithHOCList />
      <ArticleListWthLayout titleSection="Секция со списком" />
      <ArticleTableWithLayout titleSection="Cекция с таблицей" />
    </div>
  );
}

export default App;
