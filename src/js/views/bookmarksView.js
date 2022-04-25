import View from './View';
import previewView from './previewView';
import icons from '../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = `No bookmarks yet ...`;
  _message = ``;

  _generateMarkup() {
    console.log(this._data);
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('\n');
  }

  // _generateMarkupPreview(recipe) {
  //   const id = window.location.hash.slice(1);

  //   return `
  //       <li class="preview">
  //         <a class="preview__link ${
  //           recipe.id === id ? 'preview__link--active' : ''
  //         }" href="#${recipe.id}">
  //           <figure class="preview__fig">
  //             <img src="${recipe.image}" alt="${recipe.title}" />
  //           </figure>
  //           <div class="preview__data">
  //             <h4 class="preview__name">
  //               ${recipe.title}
  //             </h4>
  //             <p class="preview__publisher">${recipe.publisher}</p>
  //           </div>
  //         </a>
  //       </li>
  //     `;
  // }
}

export default new BookmarksView();
