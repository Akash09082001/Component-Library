

function toggleContent(contentType) {
    let previewContent = document.getElementById('previewContent');
    let htmlContent = document.getElementById('htmlContent');
    let javascriptContent = document.getElementById('javascriptContent');
    let cardStatus = document.getElementById('card-status');

    if (contentType === 'preview') {
        previewContent.style.display = 'flex';
        htmlContent.style.display = 'none';
        javascriptContent.style.display = 'none';
        cardStatus.innerText = "Preview";
    } else if (contentType === 'html') {
        previewContent.style.display = 'none';
        htmlContent.style.display = 'flex';
        javascriptContent.style.display = 'none';
        cardStatus.innerText = "HTML + Tailwind CSS";
    } else if (contentType === 'javascript') {
        previewContent.style.display = 'none';
        htmlContent.style.display = 'none';
        javascriptContent.style.display = 'flex';
        cardStatus.innerText = "Javascript";
    }

};


function copyToClipBoard() {
    let htmlCode = document.getElementById("htmlCode").innerText;
    let javascriptCode = document.getElementById("javascriptCode").innerText;
    let copyHtml = document.getElementById("copyHtml");
    let copyJavascript = document.getElementById("copyJavascript");
    let htmlAlert = document.getElementById("htmlSpan");
    let javascriptAlert = document.getElementById("javascriptSpan");

    copyHtml.onclick = function () {
        navigator.clipboard.writeText(htmlCode).then(() => {
            htmlAlert.style.display = 'flex';
            htmlAlert.innerHTML = "HTML Code Coppied Succesfully";

            setTimeout(function () {
                htmlAlert.style.display = 'none';
            }, 3000);
        }).catch(() => {
            htmlAlert.innerHTML = "HTML Code Couldn't Copied";
        });
    }
    copyJavascript.onclick = function () {
        navigator.clipboard.writeText(javascriptCode).then(() => {
            javascriptAlert.style.display = 'flex';
            javascriptAlert.innerHTML = "Javascript Code Coppied Succesfully";

            setTimeout(function () {
                javascriptAlert.style.display = 'none';
            }, 3000);
        }).catch(() => {
            javascriptAlert.innerHTML = "Javascript Code Couldn't Copied";
        });
    }
}

