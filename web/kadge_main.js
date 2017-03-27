if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kadge_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kadge_main'.");
}
var kadge_main = function (_, Kotlin) {
  'use strict';
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  function main$lambda() {
    preview();
  }
  function main$lambda_0(closure$uploadInput) {
    return function (it) {
      $(closure$uploadInput).click();
    };
  }
  function main(args) {
    var app = document.getElementById('app');
    var templateImage = document.createElement('img');
    templateImage.id = 'template';
    templateImage.setAttribute('src', 'kadge-template.png');
    templateImage.setAttribute('width', '400px');
    templateImage.setAttribute('height', '400px');
    addClass(templateImage, ['inner-template']);
    var previewImage = document.createElement('img');
    previewImage.id = 'preview';
    previewImage.setAttribute('width', '400px');
    previewImage.setAttribute('height', '400px');
    addClass(previewImage, ['inner-template']);
    var templateDiv = document.createElement('div');
    templateDiv.appendChild(previewImage);
    templateDiv.appendChild(templateImage);
    addClass(templateDiv, ['column template']);
    var uploadInput = document.createElement('input');
    uploadInput.id = 'upload';
    uploadInput.setAttribute('type', 'file');
    uploadInput.setAttribute('accept', 'image/*');
    addClass(uploadInput, ['upload-photo']);
    $(uploadInput).change(main$lambda);
    var uploadSpan = document.createElement('span');
    uploadSpan.appendChild(document.createTextNode('Select image'));
    var selectImgBtn = document.createElement('a');
    addClass(selectImgBtn, ['level-item button is-primary']);
    selectImgBtn.appendChild(uploadSpan);
    selectImgBtn.appendChild(uploadInput);
    selectImgBtn.addEventListener('click', main$lambda_0(uploadInput));
    var selectImgDiv = document.createElement('div');
    addClass(selectImgDiv, ['columns']);
    selectImgDiv.appendChild(selectImgBtn);
    var canvasImage = document.createElement('canvas');
    canvasImage.id = 'profile';
    var canvasDiv = document.createElement('div');
    addClass(canvasDiv, ['column']);
    canvasDiv.appendChild(canvasImage);
    var imagesDiv = document.createElement('div');
    addClass(imagesDiv, ['columns']);
    imagesDiv.appendChild(templateDiv);
    imagesDiv.appendChild(canvasDiv);
    var container = document.createElement('div');
    addClass(container, ['container']);
    container.appendChild(imagesDiv);
    container.appendChild(selectImgDiv);
    var section = document.createElement('section');
    addClass(section, ['section']);
    section.appendChild(container);
    app != null ? app.appendChild(section) : null;
  }
  var package$com = _.com || (_.com = {});
  var package$github = package$com.github || (package$com.github = {});
  var package$babedev = package$github.babedev || (package$github.babedev = {});
  package$babedev.main_kand9s$ = main;
  Kotlin.defineModule('kadge_main', _);
  main([]);
  return _;
}(typeof kadge_main === 'undefined' ? {} : kadge_main, kotlin);

//@ sourceMappingURL=kadge_main.js.map
