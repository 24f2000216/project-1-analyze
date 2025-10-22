document.getElementById('process-btn').addEventListener('click', function() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please upload a file.');
        return;
    }
    const reader = new FileReader();
    reader.onload = function(event) {
        const data = event.target.result;
        processData(data);
    };
    reader.readAsText(file);
});

function processData(data) {
    try {
        const jsonData = JSON.parse(data);
        document.getElementById('result-output').textContent = JSON.stringify(jsonData, null, 2);
        document.getElementById('result-section').style.display = 'block';
    } catch (error) {
        alert('Error processing file: ' + error.message);
    }
}
