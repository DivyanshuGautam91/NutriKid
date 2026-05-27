import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecipeCard = ({ recipe }) => {
  const cardStyle = {
    backgroundImage: `url(${recipe.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card h-[200px] rounded-[10px] text-center cursor-pointer" style={cardStyle}>
      <div className="masked pt-[145px] rounded-[10px]">
        <h2 className="recipe-name text-white">{recipe.recipeName}</h2>
      </div>
    </Link>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    recipeName: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCard;
