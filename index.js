const core = require('@actions/core');
const github = require('@actions/github');

async function FillPRInfo(){
    var token = core.getInput("repoToken");
    console.log("Token="+token);

    var octokit = new github.getOctokit(token);
    const context = github.context;
    const prOwner = context.payload.repository.owner.login;
    
    

    var teams = await octokit.rest.teams.list({ org: "T4MyTestOrganization", });

    console.log(teams);

    // var groups = await octokit.rest.teams.getMembershipForUserInOrg({
    //     org,
    //     team_slug,
    //     username,
    //   });
}

FillPRInfo();