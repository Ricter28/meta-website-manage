export class FileHelper {
    static generateBlobUrl(blob: Blob) {
        return URL.createObjectURL(blob);
    }

    static downloadFile(filePath) {
        var link = document.createElement('a');
        link.href = filePath;
        link.target = '_blank';
        link.download = filePath.split("/").pop().replace('%', '_');
        link.click();
    }

    static handleDownloadFile(url: string) {
        if (navigator.userAgent.indexOf("Firefox") !== -1) {
            if (url)
                FileHelper.downloadFile(url);
        } else {
            if (url && url.length !== 0)
                window.open(url, '_parent');
        }
    }
}