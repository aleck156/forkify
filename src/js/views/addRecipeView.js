import View from './View';
import previewView from './previewView';
import icons from '../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');

  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _btnUpload = document.querySelector('.upload__btn');

  addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', function () {
      this._overlay.classList.toggle('hidden');
      this._window.classList.toggle('hidden');
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
