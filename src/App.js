import './App.css';
import Article from './components/article/article';
import ArticleSmart from './components/article/articleSmart';
import ArticleSimple from './components/article/articleSimple';
import {ArticleWithHOCTable, ArticleWithHOCList} from './components/article/articleSuperHOC';

function App() {
  return (
    <div className="App">
      <ArticleSimple />
      <Article />
      <ArticleSmart />
      <ArticleWithHOCTable />
      <ArticleWithHOCList />
    </div>
  );
}

export default App;
