document.getElementById('openAndDownloadBtn').addEventListener('click', function() {
    // Create a new window or tab and set its location to the PDF file
    var pdfWindow = window.open('./timepass.pdf', '_blank');
    
    // Check if the window object is not null
    if (pdfWindow) {
        // Focus on the new window/tab
        pdfWindow.focus();
    } else {
        // If the window object is null, show an error message or fallback behavior
        alert('Popup blocked. Please allow popups to open the PDF.');
    }
});