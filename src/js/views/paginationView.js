import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const curPage = this._data.page;

    console.log(numPages);
    console.log(this);
    // page 1, and theere are other pages
    if (curPage === 1 && numPages > 1) {
      return `page 1 and others`;
    }

    // last page, no pages left
    if (curPage === numPages) {
      return `
      <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>
    `;
    }

    // mid page
    if (curPage < numPages) {
      return `other pages`;
    }

    // page 1, but no other pages
    return `only 1 page`;

    const markup = `
    
    `;
  }
}

export default new PaginationView();
