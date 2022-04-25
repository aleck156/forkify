import View from './View';
import icons from '../../img/icons.svg';

class PreviewView {
  _parentElement = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return `
        <li class="preview">
          <a class="preview__link ${
            recipe.id === id ? 'preview__link--active' : ''
          }" href="#${recipe.id}">
            <figure class="preview__fig">
              <img src="${recipe.image}" alt="${recipe.title}" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__name">
                ${recipe.title}
              </h4>
              <p class="preview__publisher">${recipe.publisher}</p>
            </div>
          </a>
        </li>
      `;
  }
}

export default new PreviewView();
