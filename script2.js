function openUrl() {
    const url = document.getElementById('url').value;
    document.getElementById('iframe').src = url.includes('http') ? url : `http://${url}`;
}