document.getElementById('jumpButton').addEventListener('click', function() {
    const code = document.getElementById('codeInput').value;
    if (code) {
        window.location.href = `./person/${code}.html`;
    } else {
        alert('请输入有效的代码');
    }
});