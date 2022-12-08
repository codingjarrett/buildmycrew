const renderCrewProfile = (crew) => {
    const crewProfile = [];

    for (let i = 0; i < crew.length; i++) {
        const shipmate = crew[i];
        const name = shipmate.getName();
        const id = shipmate.getId();
        const email = shipmate.getEmail();
        const role = shipmate.getRole();

        if (role === 'Manager') {
            const officeNumber = shipmate.getOfficeNumber();
            const firstMate = `
                <div class="col-md">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="name">${name}</h4>
                            <p class="role">First Mate</p>
                            <p class="id">Crew Member: ${id}</p>
                            <p class="email"><a href="mailto:${email}">${email}</a></p>
                            <p class="officeNumber">${officeNumber}</p>
                        </div>
                    </div>
                </div>
            `
            crewProfile.push(firstMate);
        } else if (role === 'Engineer') {
            const gitHub = shipmate.getGitHub();
            const shipwright = `
                <div class="col-md">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="name">${name}</h4>
                            <p class="role">Shipwright</p>
                            <p class="id">Crew Member: ${id}</p>
                            <p class="email"><a href="mailto:${email}">${email}</a></p>
                            <p class="gitHub"><a href="http://github.com/${gitHub}" target="_blank">${gitHub}</a></p>
                        </div>
                    </div>
                </div>
            `
            crewProfile.push(shipwright);
        } else {
            const school = shipmate.getSchool();
            const crewmate = `
                <div class="col-md">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="name">${name}</h4>
                            <p class="role">Crewmate</p>
                            <p class="id">Crew Member:${id}</p>
                            <p class="email"><a href="mailto:${email}">${email}</a></p>
                            <p class="school">${school}</p>
                        </div>
                    </div>
                </div>
            `
            crewProfile.push(crewmate);
        };
    };
    return crewProfile.join('');
};

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