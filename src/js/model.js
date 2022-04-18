export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const res = await fetch(
      // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const resJSON = await res.json();
    console.log(resJSON);
    if (!res.ok) {
      throw new Error(`${resJSON.message}`);
    }

    const { recipe } = resJSON.data;
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
  } catch (error) {}
};
