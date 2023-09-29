

function toggleContent(contentType) {
    let previewContent = document.getElementById('previewContent');
    let htmlContent = document.getElementById('htmlContent');
    let javascriptContent = document.getElementById('javascriptContent');
    let cardStatus = document.getElementById('card-status');

    if (contentType === 'preview') {
        previewContent.style.display = 'flex';
        htmlContent.style.display = 'none';
        javascriptContent.style.display = 'none';
        cardStatus.innerText= "Preview";
    } else if (contentType === 'html') {
        previewContent.style.display = 'none';
        htmlContent.style.display = 'flex';
        javascriptContent.style.display = 'none';
        cardStatus.innerText= "HTML + Tailwind CSS";
    }else if(contentType === 'javascript') {
        previewContent.style.display = 'none';
        htmlContent.style.display = 'none';
        javascriptContent.style.display = 'flex';
        cardStatus.innerText= "Javascript";
    }

};


