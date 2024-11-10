document.getElementById('open_comment_box').addEventListener('click', function () {
    var textboxContainer = document.getElementById('textbox_container');
    if (textboxContainer.classList.contains('hidden')) {
        textboxContainer.classList.remove('hidden');
    } else {
        textboxContainer.classList.add('hidden');
    }
});
