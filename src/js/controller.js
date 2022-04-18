import * as model from './model';
import recipeView from './views/recipeView';
import 'core-js';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    recipeView.renderSpinner(recipeContainer);
    // 1) loading recipee
    const id = window.location.hash.slice(1);

    if (!id) return;

    await model.loadRecipe(id);

    // 2) rendering recipee
    recipeView.render(model.state.recipe);
  } catch (error) {
    alert(error);
  }
};

['hashchange', 'load'].forEach(elem =>
  window.addEventListener(elem, controlRecipes)
);
