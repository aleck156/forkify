import View from './View';
import icons from '../../img/icons.svg';

class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return `
        <li class="preview">
          <a class="preview__link ${
            this._data.id === id ? 'preview__link--active' : ''
          }" href="#${this._data.id}">
            <figure class="preview__fig">
              <img src="${this._data.image}" alt="${this._data.title}" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">
                ${this._data.title}
              </h4>
              <p class="preview__publisher">${this._data.publisher}</p>
              <div class="preview__user-generated ${
                this._data.key ? '' : 'hidden'
              }">
                <svg>
                  <use href="${icons}#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>
      `;
  }
}

export default new PreviewView();

// _generateMarkup() {
//   console.log(this._data);

//   return this._data.map(this._generateMarkupPreview).join('\n');
// }

// _generateMarkupPreview(recipe) {
//   const id = window.location.hash.slice(1);

//   return `
//       <li class="preview">
//         <a class="preview__link ${
//           recipe.id === id ? 'preview__link--active' : ''
//         }" href="#${recipe.id}">
//           <figure class="preview__fig">
//             <img src="${recipe.image}" alt="${recipe.title}" />
//           </figure>
//           <div class="preview__data">
//             <h4 class="preview__title">${recipe.title}</h4>
//             <p class="preview__publisher">${recipe.publisher}</p>
//           </div>
//         </a>
//       </li>
//       `;
// }

//        <li class="preview">
//           <a class="preview__link preview__link--active" href="#23456">
//             <figure class="preview__fig">
//               <img src="src/img/test-1.jpg" alt="Test" />
//             </figure>
//             <div class="preview__data">
//               <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
//               <p class="preview__publisher">The Pioneer Woman</p>
//               <div class="preview__user-generated">
//                 <svg>
//                   <use href="src/img/icons.svg#icon-user"></use>
//                 </svg>
//               </div>
//             </div>
//           </a>
//         </li>
//          -->
