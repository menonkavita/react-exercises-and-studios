import recipeData from './recipe.json';
import './styling.css';

function AuthorInfo() {

  const authorName = recipeData.map((name) =>
    <h4 key={name.author}>
      {name.author}
    </h4>
  );

  const image = recipeData.map((img) =>
    <img className="authorImage" key={img.author} alt={img.author}
      src={img.authorImage}
      width={200} height={150} />
  );

  const website = recipeData.map((site) =>
    <a key={site.author} href={site.website} > Chocolate Bark Recipe  </a>
  );

  return (
    <div>
      {image}
      {authorName}
      {website}
    </div>
  );
}

export default AuthorInfo;

//import styles.css
//import json file for author info
//image, name, website
//css for styling image
