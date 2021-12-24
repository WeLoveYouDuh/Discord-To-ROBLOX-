const readline = require("readline");
const got = require("got");
const chalk = require("chalk");
const log = console.log;

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

process.title = "Discord ID -> ROBLOX Account | by vuax#0001";

const fart = async () => {
    readLine.question("Enter the user's Discord ID: ", async (res) => {
        console.clear();
        var loadingTimer = (function() {
            var y = ["\\", "|", "/", "-"];
            var x = 0;

            return setInterval(function() {
                process.stdout.write(chalk.blueBright("\r" + "- Requesting data " + y[x++]));
                x &= 3;
            }, 250);
        })();

        let apiData = await got(`https://verify.eryn.io/api/user/${res}`).catch(e => {
            clearInterval(loadingTimer);
            process.stdout.write(`\rUnable to retrieve any results for ${res}\n`);
        });
        
        String.from
        if (apiData) {
            jsn = JSON.parse(apiData.body);
            let apiData2 = await got(`https://users.roblox.com/v1/users/${jsn.robloxId}`).catch(e => {
                clearInterval(loadingTimer);
                console.log(chalk.blueBright("\rRetrieved some data for this user"));
                console.log(chalk.redBright`\t${"[*]"} ROBLOX ID: ${jsn.robloxId}\n\t${"[*]"} ROBLOX Username: ${jsn.robloxUsername}`);
            })

            clearInterval(loadingTimer);
            let jsn2;

            if (apiData2) {
                jsn2 = JSON.parse(apiData2.body);
            }
            console.log(chalk.green(`\nSuccessfully retrieved data for ID ${res}\n\t${"[*]"} ROBLOX ID: ${jsn.robloxId}\n\t${"[*]"} ROBLOX Username: ${jsn2.name ? `${jsn2.name} [${jsn.robloxUsername}]` : jsn.robloxUsername}\n\t${"[*]"} Banned: ${jsn2.isBanned} \n\t${"[*]"} Created At: ${jsn2.created ? (new Date(jsn2.created)).toLocaleDateString() : "NA"}\n\t${"[*]"} Description: ${jsn2.description.split("\n").join("\n\t - ")}`))
            }

    readLine.question("Click enter to restart.", () => {
        console.clear();
        fart()
        })
    })
}

fart();
