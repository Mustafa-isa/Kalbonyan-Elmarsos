import { MdPostAdd, MdMessage } from 'react-icons/md';
import ".//MainHeader.css"

function MainHeader(props) {
  return (
    <header className="header">
      <h1 className="logo">
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className="button" onClick={props.onclick}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;