module.exports {
    generateHtml(teamProfileArr) {
        const holdHtmlArr = [];
        const htmlHeaderAndTitleBar = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${teamProfileArr[0]}</title>
            <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
            <link rel = "preconnect" href = "https://fonts.gstatic.com">
            <link href = "https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Spartan&display=swap" rel = "stylesheet">
            <link rel="stylesheet" href="../src/styles.css">
        </head>
        <body>
            <div class= "title-bar">
                <h1>${teamProfileArr[0]}</h1>
            </div>
        
            <div class= "card-container">`;

            holdHtmlArr.push(htmlHeaderAndTitleBar);

            for (let i=1; i < teamProfileArr.length; i++){
                
            }


        
    }
}