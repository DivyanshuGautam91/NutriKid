

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecipeCardCustomize = ({ recipe }) => {
  const cardStyle = {
    backgroundImage: `url(${recipe.img_url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <Link to={`/recipecustomize/${recipe.Recipe_id}`} className="recipe-card h-[200px] rounded-[10px] text-center cursor-pointer" style={cardStyle}>
      <div className="masked pt-[145px] rounded-[10px]">
        <h2 className="recipe-name text-white">{recipe.Recipe_title}</h2>
      </div>
    </Link>
  );
};

RecipeCardCustomize.propTypes = {
  recipe: PropTypes.shape({
    img_url: PropTypes.string.isRequired,
    Recipe_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    Recipe_title: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCardCustomize;













