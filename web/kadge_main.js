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
    if (app_0 != null) {
      child(new Child(app_0));
    }
  }
  function src($receiver, value) {
    if (value === void 0)
      value = '';
    $receiver.setAttribute('src', value);
  }
  function Child(parent) {
    this.parent = parent;
  }
  Child.prototype.div_te3j54$ = function (id, className, child) {
    if (id === void 0)
      id = '';
    if (className === void 0)
      className = '';
    var div = document.createElement('div');
    var $receiver = className;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver))
      addClass(div, [className]);
    var $receiver_0 = id;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver_0))
      div.id = id;
    this.parent.appendChild(div);
    child(new Child(div));
  };
  Child.prototype.strong_xddp9w$ = function (child) {
    var strong = document.createElement('strong');
    this.parent.appendChild(strong);
    child(new Child(strong));
  };
  Child.prototype.canvas_3m52m6$ = function (id, width, height) {
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
    var canvas = $receiver;
    this.parent.appendChild(canvas);
  };
  function Child$a$lambda(closure$onclick) {
    return function (it) {
      closure$onclick();
    };
  }
  Child.prototype.a_szydz1$ = function (className, onclick, child) {
    if (className === void 0)
      className = '';
    var a = document.createElement('a');
    var $receiver = className;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver))
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
    var $receiver = document.createElement('input');
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
  Child.prototype.img_v32w2o$ = function (id, width, height, block) {
    if (id === void 0)
      id = '';
    if (width === void 0)
      width = 400;
    if (height === void 0)
      height = 400;
    if (block === void 0)
      block = Child$img$lambda;
    var $receiver = document.createElement('img');
    var closure$id = id;
    var closure$width = width;
    var closure$height = height;
    var closure$block = block;
    $receiver.id = closure$id;
    $receiver.setAttribute('width', closure$width.toString() + 'px');
    $receiver.setAttribute('height', closure$height.toString() + 'px');
    closure$block($receiver);
    var img = $receiver;
    this.parent.appendChild(img);
  };
  Child.prototype.span_xddp9w$ = function (child) {
    var span = document.createElement('span');
    this.parent.appendChild(span);
    child(new Child(span));
  };
  Child.prototype.text_61zpoe$ = function (text_0) {
    if (text_0 === void 0)
      text_0 = '';
    this.parent.appendChild(document.createTextNode(text_0));
  };
  Child.prototype.br = function () {
    this.parent.appendChild(document.createElement('br'));
    this.parent.appendChild(document.createElement('br'));
  };
  Child.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Child',
    interfaces: []
  };
  var uploadInput;
  function main$lambda$lambda$lambda$lambda($receiver) {
    $receiver.text_61zpoe$('Kotlin badge generator');
  }
  function main$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.canvas_3m52m6$('profile');
  }
  function main$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.div_te3j54$(void 0, 'column', main$lambda$lambda$lambda$lambda$lambda);
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
  function main$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.a_szydz1$('level-item button is-primary', main$lambda$lambda$lambda$lambda$lambda_0, main$lambda$lambda$lambda$lambda$lambda_1);
  }
  function main$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    src($receiver, 'kadge-template.png');
  }
  function main$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.img_v32w2o$('preview');
    $receiver.img_v32w2o$('template', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda_2);
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.strong_xddp9w$(main$lambda$lambda$lambda$lambda);
    $receiver.br();
    $receiver.div_te3j54$(void 0, 'columns', main$lambda$lambda$lambda$lambda_0);
    $receiver.div_te3j54$(void 0, 'columns', main$lambda$lambda$lambda$lambda_1);
    $receiver.div_te3j54$(void 0, 'column gone', main$lambda$lambda$lambda$lambda_2);
  }
  function main$lambda$lambda($receiver) {
    $receiver.div_te3j54$(void 0, 'container', main$lambda$lambda$lambda);
  }
  function main$lambda($receiver) {
    $receiver.div_te3j54$(void 0, 'section', main$lambda$lambda);
  }
  function main(args) {
    app(void 0, main$lambda);
  }
  var package$com = _.com || (_.com = {});
  var package$github = package$com.github || (package$com.github = {});
  var package$babedev = package$github.babedev || (package$github.babedev = {});
  package$babedev.app_cjyqka$ = app;
  package$babedev.src_46n0ku$ = src;
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
