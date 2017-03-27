if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kadge_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kadge_main'.");
}
var kadge_main = function (_, Kotlin) {
  'use strict';
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  function app(id, child) {
    if (id === void 0)
      id = 'app';
    var app_0 = document.getElementById(id);
    app_0 != null ? app_0.appendChild(child()) : null;
  }
  var div = Kotlin.defineInlineFunction('kadge_main.com.github.babedev.div_yxccol$', function (id, className, child) {
    if (id === void 0)
      id = '';
    if (className === void 0)
      className = '';
    var div_0 = document.createElement('div');
    var $receiver = className;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver))
      Kotlin.kotlin.dom.addClass_hhb33f$(div_0, [className]);
    div_0.id = id;
    div_0.appendChild(child());
    return div_0;
  });
  function strong(text_1) {
    if (text_1 === void 0)
      text_1 = '';
    var strong_0 = document.createElement('strong');
    strong_0.appendChild(text_0(text_1));
    return strong_0;
  }
  function text_0(text_1) {
    if (text_1 === void 0)
      text_1 = '';
    return document.createTextNode(text_1);
  }
  function img(id, width, height) {
    if (id === void 0)
      id = '';
    if (width === void 0)
      width = 400;
    if (height === void 0)
      height = 400;
    var $receiver = document.createElement('img');
    var closure$id = id;
    var closure$width = width;
    var closure$height = height;
    $receiver.id = closure$id;
    $receiver.setAttribute('width', closure$width.toString() + 'px');
    $receiver.setAttribute('height', closure$height.toString() + 'px');
    return $receiver;
  }
  function canvas(id, width, height) {
    if (id === void 0)
      id = '';
    if (width === void 0)
      width = 400;
    if (height === void 0)
      height = 400;
    var $receiver = document.createElement('canvas');
    var closure$id = id;
    var closure$width = width;
    var closure$height = height;
    $receiver.id = closure$id;
    $receiver.setAttribute('width', closure$width.toString() + 'px');
    $receiver.setAttribute('height', closure$height.toString() + 'px');
    return $receiver;
  }
  function main$lambda$lambda() {
    preview();
  }
  function main$lambda$lambda$lambda(closure$uploadInput) {
    return function (it) {
      $(closure$uploadInput).click();
    };
  }
  function main$lambda(closure$selectImgDiv) {
    return function () {
      var id = void 0;
      id = '';
      var div_0 = document.createElement('div');
      if (!Kotlin.kotlin.text.isBlank_gw00vp$('section'))
        Kotlin.kotlin.dom.addClass_hhb33f$(div_0, ['section']);
      div_0.id = id;
      var closure$selectImgDiv_0 = closure$selectImgDiv;
      var $receiver = document.createElement('div');
      addClass($receiver, ['container']);
      $receiver.appendChild(strong('Kotlin badge generator'));
      var id_0 = void 0;
      id_0 = '';
      var div_1 = document.createElement('div');
      if (!Kotlin.kotlin.text.isBlank_gw00vp$('columns'))
        Kotlin.kotlin.dom.addClass_hhb33f$(div_1, ['columns']);
      div_1.id = id_0;
      var id_1 = void 0;
      id_1 = '';
      var div_2 = document.createElement('div');
      if (!Kotlin.kotlin.text.isBlank_gw00vp$('column'))
        Kotlin.kotlin.dom.addClass_hhb33f$(div_2, ['column']);
      div_2.id = id_1;
      div_2.appendChild(canvas('profile'));
      div_1.appendChild(div_2);
      $receiver.appendChild(div_1);
      $receiver.appendChild(closure$selectImgDiv_0);
      var $receiver_0 = document.createElement('div');
      $receiver_0.appendChild(img('preview'));
      var $receiver_1 = img('template');
      $receiver_1.setAttribute('src', 'kadge-template.png');
      $receiver_0.appendChild($receiver_1);
      addClass($receiver_0, ['column gone']);
      $receiver.appendChild($receiver_0);
      div_0.appendChild($receiver);
      return div_0;
    };
  }
  function main(args) {
    var $receiver = document.createElement('input');
    $receiver.id = 'upload';
    $receiver.setAttribute('type', 'file');
    $receiver.setAttribute('accept', 'image/*');
    addClass($receiver, ['upload-photo']);
    $($receiver).change(main$lambda$lambda);
    var uploadInput = $receiver;
    var $receiver_0 = document.createElement('span');
    $receiver_0.appendChild(document.createTextNode('Select image'));
    var uploadSpan = $receiver_0;
    var id = void 0;
    id = '';
    var div_0 = document.createElement('div');
    if (!Kotlin.kotlin.text.isBlank_gw00vp$('columns'))
      Kotlin.kotlin.dom.addClass_hhb33f$(div_0, ['columns']);
    div_0.id = id;
    var $receiver_1 = document.createElement('a');
    addClass($receiver_1, ['level-item button is-primary']);
    $receiver_1.appendChild(uploadSpan);
    $receiver_1.appendChild(uploadInput);
    $receiver_1.addEventListener('click', main$lambda$lambda$lambda(uploadInput));
    div_0.appendChild($receiver_1);
    var selectImgDiv = div_0;
    app(void 0, main$lambda(selectImgDiv));
  }
  var package$com = _.com || (_.com = {});
  var package$github = package$com.github || (package$com.github = {});
  var package$babedev = package$github.babedev || (package$github.babedev = {});
  package$babedev.app_nrw5xj$ = app;
  package$babedev.div_yxccol$ = div;
  package$babedev.strong_61zpoe$ = strong;
  package$babedev.text_61zpoe$ = text_0;
  package$babedev.img_3m52m6$ = img;
  package$babedev.canvas_3m52m6$ = canvas;
  package$babedev.main_kand9s$ = main;
  Kotlin.defineModule('kadge_main', _);
  main([]);
  return _;
}(typeof kadge_main === 'undefined' ? {} : kadge_main, kotlin);

//@ sourceMappingURL=kadge_main.js.map
