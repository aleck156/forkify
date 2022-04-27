import { async } from 'regenerator-runtime';
import { API_URL, RESULTS_PER_PAGE } from './config';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: RESULTS_PER_PAGE,
    page: 1,
  },
  bookmarks: [],
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
    if (state.bookmarks.some(bookmark => bookmark.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
  } catch (error) {
    throw error;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
    state.search.page = 1;
  } catch (error) {
    console.log(`[loadSearchResults]: ${error.message}`);
    throw error;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  if (!Number.isInteger(page) || page < 0) return;

  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  // side effects! you should create new object with ingredients quantity update
  state.recipe.ingredients.forEach(ing => {
    ing.quantity *= newServings / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // add bookmark
  state.bookmarks.push(recipe);

  // mark current recipe as bookmark
  if (recipe.id === state.recipe.id) {
    state.recipe.bookmarked = true;
  }

  persistBookmarks();
};

export const deleteBookmark = function (id) {
  // find an index of that recipe in bookmarks
  const index = state.bookmarks.findIndex(el => el.id === id);
  // return when nothing found
  if (index === -1) return;

  // remove bookmark prop
  if (id === state.recipe.id) {
    state.recipe.bookmarked = false;
  }

  // remove that recipe from bookmarks
  state.bookmarks.splice(index, 1);

  persistBookmarks();
};

const init = function () {
  const localBookmarks = localStorage.getItem('bookmarks');
  if (!localBookmarks) {
    console.log('No bookmarks found locally.');
    return;
  }

  console.log(`loading bookmarks from local storage ...`);
  state.bookmarks = JSON.parse(localBookmarks);
};

init();

const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};

clearBookmarks();
