

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


function copyToClipBoard(){
    let htmlCode = document.getElementById("htmlCode").innerText;
    let javascriptCode = document.getElementById("javascriptCode").innerText;
    let copyHtml = document.getElementById("copyHtml");
    let copyJavascript = document.getElementById("copyJavascript");

    copyHtml.onclick = function(){
        navigator.clipboard.writeText(htmlCode).then(()=>{
            (true)? alert('HTML Code Coppied succesfully') : alert('HTML Code Could Not copied');
        });
    }
    copyJavascript.onclick = function(){
        navigator.clipboard.writeText(javascriptCode).then(()=>{
            (true)? alert('Javascript Code Coppied succesfully') : alert('Javascript Code Could Not copied');
        });
    }
}

