function uploadImage() {
    var formData = new FormData();
    var fileInput = document.getElementById('imageInput');
    document.getElementById('APIresponce').innerHTML = 'scaning...';
    console.log("ok");
    formData.append('image', fileInput.files[0]);
    fetch('https://dlmodel-001-site1.btempurl.com/api/Model', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('APIresponce').innerHTML = 'Scaned image maybe have ' + data;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('APIresponce').innerHTML = 'try again later.';
    });
}
function previewImage() {
    var fileInput = document.getElementById('imageInput');
    var preview = document.getElementById('preview');
    if (fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var img = document.createElement('img');
            img.src = e.target.result;
            preview.innerHTML = '';
            preview.appendChild(img);
        };
        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = '';
    }
}