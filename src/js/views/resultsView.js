import View from './View';
import previewView from './previewView';
import icons from '../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `Zero recipes found! Please try again ...`;
  _message = ``;

  _generateMarkup() {
    console.log(this._data);
    return this._data
      .map(result => previewView.render(result, false))
      .join('\n');
  }
}

export default new ResultsView();
