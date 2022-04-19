import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceURL: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (error) {
    throw error;
  }
};

export const loadSearchResults = async function (query) {
  try {
  } catch (error) {
    console.log(`[loadSearchResults]: ${error.message}`);
    throw error;
  }
};
