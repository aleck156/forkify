import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import 'core-js';
import 'regenerator-runtime/runtime';
import { search } from 'core-js/fn/symbol';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    recipeView.renderSpinner();
    // 1) loading recipee
    const id = window.location.hash.slice(1);

    if (!id) return;

    await model.loadRecipe(id);

    // 2) rendering recipee
    recipeView.render(model.state.recipe);
  } catch (error) {
    // alert(error);
    recipeView.renderError(error);
  }
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    await model.loadSearchResults(`pizza`);

    console.log(model.state.search.results);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  controlSearchResults();
};

init();
