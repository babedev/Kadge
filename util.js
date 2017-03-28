function preview() {
    var file = $("#upload")[0].files[0]

    if (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            $('#preview').attr('src', e.target.result);

            createProfileImage();
        };
    }
}

function createProfileImage() {
    var size = 300;
    var img1 = document.getElementById('preview');
    var img2 = new Image();
    img2.src = 'kadge-template.png';

    var canvas = document.getElementById('profile');
    var context = canvas.getContext('2d');

    canvas.width = size;
    canvas.height = size;

    context.drawImage(img1, 0, 0, size, size);
    context.drawImage(img2, 0, 0, size, size);
}

function createPlaceholder() {
    var size = 300;
    var img1 = new Image();

    img1.onload = function() {
        var canvas = document.getElementById('profile');
        var context = canvas.getContext('2d');

        canvas.width = size;
        canvas.height = size;

        context.drawImage(img1, 0, 0, size, size);
    };

    img1.src = 'placeholder.png';
}