import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    // page 1, and theere are other pages

    // page 1, but no other pages

    // last page, no pages left

    // mid page
    const markup = `
    
    `;
  }
}

export default new PaginationView();
