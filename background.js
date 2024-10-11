chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => { 
    
    const url = new URL(downloadItem.url);
    const hostName = url.hostname.replace("www.", "");

    const folderPath = `${hostName}/${downloadItem.filename}`;

    suggest({filename: folderPath});
})