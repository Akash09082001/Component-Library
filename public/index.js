

function toggleContent(contentType) {
    let previewContent = document.getElementById('previewContent');
    let htmlContent = document.getElementById('htmlContent');
    let javascriptContent = document.getElementById('javascriptContent');
    
    if (contentType === 'preview') {
        previewContent.style.display = 'flex';
        htmlContent.style.display = 'none';
        javascriptContent.style.display = 'none';
    } else if (contentType === 'html') {
        previewContent.style.display = 'none';
        htmlContent.style.display = 'flex';
        javascriptContent.style.display = 'none';
    }else if(contentType === 'javascript') {
        previewContent.style.display = 'none';
        htmlContent.style.display = 'none';
        javascriptContent.style.display = 'flex';
    }

};


