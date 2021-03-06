import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      // when event bubbling a click, grab the first parent with btn--inline class
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  /**
   * @param {'left', 'right'} direction set in which direction the button will point toward
   * @param {Number} curPage    set the number of current page
   * @returns
   */
  _generateMarkupButton(direction, curPage) {
    const dispPage = direction == 'right' ? curPage + 1 : curPage - 1;
    return `
      <button data-goto="${dispPage}"
      class="btn--inline pagination__btn--${
        direction === 'right' ? 'next' : 'prev'
      }">
        <span>Page ${dispPage}</span>
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
