import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    console.log(this);
    // page 1, and theere are other pages
    if (this._data.page === 1 && numPages > 1) {
      return `page 1 and others`;
    }

    // page 1, but no other pages

    // last page, no pages left
    if (this._data.page === numPages) {
      return `last and others`;
    }

    // mid page
    const markup = `
    
    `;
  }
}

export default new PaginationView();
