if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kadge_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kadge_main'.");
}
var kadge_main = function (_, Kotlin) {
  'use strict';
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  function main$lambda$lambda() {
    preview();
  }
  function main$lambda$lambda_0(closure$uploadInput) {
    return function (it) {
      $(closure$uploadInput).click();
    };
  }
  function main(args) {
    var app = document.getElementById('app');
    var $receiver = img('template');
    $receiver.setAttribute('src', 'kadge-template.png');
    var templateImage = $receiver;
    var $receiver_0 = document.createElement('div');
    $receiver_0.appendChild(img('preview'));
    $receiver_0.appendChild(templateImage);
    addClass($receiver_0, ['column gone']);
    var templateDiv = $receiver_0;
    var $receiver_1 = document.createElement('input');
    $receiver_1.id = 'upload';
    $receiver_1.setAttribute('type', 'file');
    $receiver_1.setAttribute('accept', 'image/*');
    addClass($receiver_1, ['upload-photo']);
    $($receiver_1).change(main$lambda$lambda);
    var uploadInput = $receiver_1;
    var $receiver_2 = document.createElement('span');
    $receiver_2.appendChild(document.createTextNode('Select image'));
    var uploadSpan = $receiver_2;
    var $receiver_3 = document.createElement('a');
    addClass($receiver_3, ['level-item button is-primary']);
    $receiver_3.appendChild(uploadSpan);
    $receiver_3.appendChild(uploadInput);
    $receiver_3.addEventListener('click', main$lambda$lambda_0(uploadInput));
    var selectImgBtn = $receiver_3;
    var $receiver_4 = document.createElement('div');
    addClass($receiver_4, ['columns']);
    $receiver_4.appendChild(selectImgBtn);
    var selectImgDiv = $receiver_4;
    var $receiver_5 = document.createElement('canvas');
    $receiver_5.id = 'profile';
    var canvasImage = $receiver_5;
    var $receiver_6 = document.createElement('div');
    addClass($receiver_6, ['column']);
    $receiver_6.appendChild(canvasImage);
    var canvasDiv = $receiver_6;
    var $receiver_7 = document.createElement('div');
    addClass($receiver_7, ['columns']);
    $receiver_7.appendChild(canvasDiv);
    var imagesDiv = $receiver_7;
    var $receiver_8 = document.createElement('div');
    addClass($receiver_8, ['container']);
    $receiver_8.appendChild(imagesDiv);
    $receiver_8.appendChild(selectImgDiv);
    $receiver_8.appendChild(templateDiv);
    var container = $receiver_8;
    var $receiver_9 = document.createElement('section');
    addClass($receiver_9, ['section']);
    $receiver_9.appendChild(container);
    var section = $receiver_9;
    app != null ? app.appendChild(section) : null;
  }
  function img(id) {
    var $receiver = document.createElement('img');
    $receiver.id = id;
    $receiver.setAttribute('width', '400px');
    $receiver.setAttribute('height', '400px');
    return $receiver;
  }
  var package$com = _.com || (_.com = {});
  var package$github = package$com.github || (package$com.github = {});
  var package$babedev = package$github.babedev || (package$github.babedev = {});
  package$babedev.main_kand9s$ = main;
  package$babedev.img_61zpoe$ = img;
  Kotlin.defineModule('kadge_main', _);
  main([]);
  return _;
}(typeof kadge_main === 'undefined' ? {} : kadge_main, kotlin);

//@ sourceMappingURL=kadge_main.js.map
