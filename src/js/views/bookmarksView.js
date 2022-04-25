import View from './View';
import icons from '../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = `No bookmarks yet ...`;
  _message = ``;

  _generateMarkup() {
    console.log();
    return this._data.map(this._generateMarkupPreview).join('\n');
  }

  _generateMarkupPreview(recipe) {
    const id = window.location.hash.slice(1);

    return `
        <li class="preview">
          <a class="preview__link" href="#23456">
            <figure class="preview__fig">
              <img src="src/img/test-1.jpg" alt="Test" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__name">
                Pasta with Tomato Cream ...
              </h4>
              <p class="preview__publisher">The Pioneer Woman</p>
            </div>
          </a>
        </li>
      `;
  }
}

export default new BookmarksView();
