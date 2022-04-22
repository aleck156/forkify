import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  /**
   *
   * @param {'left', 'right'} direction set in which direction the button will point toward
   * @param {Number} curPage    set the number of current page
   * @returns
   */
  _generateMarkupButton(direction, curPage) {
    return `
      <button class="btn--inline pagination__btn--${
        direction === 'right' ? 'next' : 'prev'
      }">
        <span>Page ${direction == 'right' ? curPage + 1 : curPage - 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-${direction}"></use>
        </svg>
      </button>
    `;
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const curPage = this._data.page;

    console.log(numPages);
    console.log(this);
    // page 1, and theere are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton('right', curPage);
    }

    // last page, no pages left
    if (curPage === numPages) {
      return this._generateMarkupButton('left', curPage);
    }

    // mid page
    if (curPage < numPages) {
      return (
        this._generateMarkupButton('left', curPage) +
        this._generateMarkupButton('right', curPage)
      );
    }

    // page 1, but no other pages
    return `only 1 page`;

    const markup = `
    
    `;
  }
}

export default new PaginationView();
