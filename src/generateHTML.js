const generateHTML = (crew) => {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
        <script src="style.css"></script>
    </head>
    <body>
        <header>
            <h2>Our Pirate Crew</h2>
        </header>
        <div class="col-md-11 m-5">
            <div class="row">
                ${renderCrewProfile(crew)}
            </div>
        </div>
    </body>
</html>
    `
};

module.exports = generateHTML;