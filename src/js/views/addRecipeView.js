import View from './View';
import previewView from './previewView';
import icons from '../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
