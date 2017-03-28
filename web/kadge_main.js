if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kadge_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kadge_main'.");
}
var kadge_main = function (_, Kotlin) {
  'use strict';
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  function app(id, child) {
    if (id === void 0)
      id = 'app';
    var tmp$;
    var app_0 = (tmp$ = document.getElementById(id)) != null ? tmp$ : Kotlin.throwNPE();
    child(new Child(app_0));
    return app_0;
  }
  function src($receiver, value) {
    if (value === void 0)
      value = '';
    $receiver.setAttribute('src', value);
  }
  function width($receiver, value) {
    if (value === void 0)
      value = '';
    $receiver.setAttribute('width', value);
  }
  function height($receiver, value) {
    if (value === void 0)
      value = '';
    $receiver.setAttribute('height', value);
  }
  function Child(parent) {
    this.parent = parent;
  }
  Child.prototype.div_7h4oe2$ = function (id, className, width_0, child) {
    if (id === void 0)
      id = '';
    if (className === void 0)
      className = '';
    if (width_0 === void 0)
      width_0 = 0;
    var div = this.element_0('div');
    var $receiver = className;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver))
      addClass(div, [className]);
    var $receiver_0 = id;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver_0))
      div.id = id;
    if (width_0 !== 0)
      div.setAttribute('width', width_0.toString() + 'px');
    this.parent.appendChild(div);
    child(new Child(div));
  };
  Child.prototype.strong_xddp9w$ = function (child) {
    var strong = this.element_0('strong');
    this.parent.appendChild(strong);
    child(new Child(strong));
  };
  Child.prototype.canvas_ccskfk$ = function (id, className, width_0, height_0) {
    if (id === void 0)
      id = '';
    if (className === void 0)
      className = '';
    if (width_0 === void 0)
      width_0 = 300;
    if (height_0 === void 0)
      height_0 = 300;
    var $receiver = this.element_0('canvas');
    var closure$id = id;
    var closure$width = width_0;
    var closure$height = height_0;
    $receiver.id = closure$id;
    $receiver.setAttribute('width', closure$width.toString() + 'px');
    $receiver.setAttribute('height', closure$height.toString() + 'px');
    var canvas = $receiver;
    var $receiver_0 = className;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver_0))
      addClass(canvas, [className]);
    this.parent.appendChild(canvas);
  };
  function Child$a$lambda(closure$onclick) {
    return function (it) {
      closure$onclick();
    };
  }
  Child.prototype.a_juj0ph$ = function (id, className, onclick, child) {
    if (id === void 0)
      id = '';
    if (className === void 0)
      className = '';
    var a = this.element_0('a');
    var $receiver = id;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver))
      a.id = id;
    var $receiver_0 = className;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver_0))
      addClass(a, [className]);
    a.addEventListener('click', Child$a$lambda(onclick));
    this.parent.appendChild(a);
    child(new Child(a));
  };
  function Child$inputFile$lambda(closure$onchange) {
    return function () {
      closure$onchange();
    };
  }
  Child.prototype.inputFile_hgzy0z$ = function (id, className, onchange) {
    if (id === void 0)
      id = '';
    if (className === void 0)
      className = '';
    var $receiver = this.element_0('input');
    $receiver.setAttribute('type', 'file');
    $receiver.setAttribute('accept', 'image/*');
    var input = $receiver;
    var $receiver_0 = id;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver_0))
      input.id = id;
    var $receiver_1 = className;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver_1))
      addClass(input, [className]);
    $(input).change(Child$inputFile$lambda(onchange));
    this.parent.appendChild(input);
    return input;
  };
  function Child$img$lambda($receiver) {
  }
  Child.prototype.img_v32w2o$ = function (id, width_0, height_0, block) {
    if (id === void 0)
      id = '';
    if (width_0 === void 0)
      width_0 = 300;
    if (height_0 === void 0)
      height_0 = 300;
    if (block === void 0)
      block = Child$img$lambda;
    var $receiver = this.element_0('img');
    var closure$id = id;
    var closure$width = width_0;
    var closure$height = height_0;
    var closure$block = block;
    $receiver.id = closure$id;
    $receiver.setAttribute('width', closure$width.toString() + 'px');
    $receiver.setAttribute('height', closure$height.toString() + 'px');
    closure$block($receiver);
    var img = $receiver;
    this.parent.appendChild(img);
  };
  Child.prototype.span_xddp9w$ = function (child) {
    var span = this.element_0('span');
    this.parent.appendChild(span);
    child(new Child(span));
  };
  Child.prototype.text_61zpoe$ = function (text_0) {
    if (text_0 === void 0)
      text_0 = '';
    this.parent.appendChild(document.createTextNode(text_0));
  };
  Child.prototype.br = function () {
    this.parent.appendChild(this.element_0('br'));
  };
  Child.prototype.element_0 = function (name) {
    return document.createElement(name);
  };
  Child.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Child',
    interfaces: []
  };
  var uploadInput;
  function main$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.text_61zpoe$('Kotlin badge generator');
  }
  function main$lambda$lambda$lambda$lambda($receiver) {
    $receiver.strong_xddp9w$(main$lambda$lambda$lambda$lambda$lambda);
  }
  function main$lambda$lambda$lambda$lambda$lambda_0() {
    $(uploadInput).click();
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.text_61zpoe$('Select image');
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_0() {
    preview();
  }
  function main$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.span_xddp9w$(main$lambda$lambda$lambda$lambda$lambda$lambda);
    uploadInput = $receiver.inputFile_hgzy0z$('upload', 'upload-photo', main$lambda$lambda$lambda$lambda$lambda$lambda_0);
  }
  function main$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.a_juj0ph$('btn-upload', 'level-item button is-primary', main$lambda$lambda$lambda$lambda$lambda_0, main$lambda$lambda$lambda$lambda$lambda_1);
  }
  function main$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.canvas_ccskfk$('profile');
  }
  function main$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.div_7h4oe2$(void 0, 'box', void 0, main$lambda$lambda$lambda$lambda$lambda_2);
  }
  function main$lambda$lambda$lambda$lambda$lambda_3() {
    download();
  }
  function main$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.text_61zpoe$('Download image');
  }
  function main$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.a_juj0ph$('btn-download', 'level-item button is-primary', main$lambda$lambda$lambda$lambda$lambda_3, main$lambda$lambda$lambda$lambda$lambda_4);
  }
  function main$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    src($receiver, 'kadge-template.png');
  }
  function main$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.img_v32w2o$('preview');
    $receiver.img_v32w2o$('template', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda_5);
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.div_7h4oe2$(void 0, 'tile', void 0, main$lambda$lambda$lambda$lambda);
    $receiver.br();
    $receiver.div_7h4oe2$(void 0, 'tile', void 0, main$lambda$lambda$lambda$lambda_0);
    $receiver.br();
    $receiver.div_7h4oe2$(void 0, 'tile', void 0, main$lambda$lambda$lambda$lambda_1);
    $receiver.br();
    $receiver.div_7h4oe2$(void 0, 'tile', void 0, main$lambda$lambda$lambda$lambda_2);
    $receiver.div_7h4oe2$(void 0, 'gone', void 0, main$lambda$lambda$lambda$lambda_3);
  }
  function main$lambda$lambda($receiver) {
    $receiver.div_7h4oe2$(void 0, 'container', void 0, main$lambda$lambda$lambda);
  }
  function main$lambda($receiver) {
    $receiver.div_7h4oe2$(void 0, 'section', void 0, main$lambda$lambda);
  }
  function main$lambda_0(it) {
    return createPlaceholder();
  }
  function main(args) {
    app(void 0, main$lambda);
    window.onload = main$lambda_0;
  }
  var package$com = _.com || (_.com = {});
  var package$github = package$com.github || (package$com.github = {});
  var package$babedev = package$github.babedev || (package$github.babedev = {});
  package$babedev.app_cjyqka$ = app;
  package$babedev.src_46n0ku$ = src;
  package$babedev.width_46n0ku$ = width;
  package$babedev.height_46n0ku$ = height;
  package$babedev.Child = Child;
  Object.defineProperty(package$babedev, 'uploadInput', {
    get: function () {
      return uploadInput;
    },
    set: function (value) {
      uploadInput = value;
    }
  });
  package$babedev.main_kand9s$ = main;
  uploadInput = document.createElement('div');
  Kotlin.defineModule('kadge_main', _);
  main([]);
  return _;
}(typeof kadge_main === 'undefined' ? {} : kadge_main, kotlin);

//@ sourceMappingURL=kadge_main.js.map
