console.log("public presented");

const postCall = () => {
    const favteam = document.querySelector("#favteam").value;
    const favplayer = document.querySelector("#favplayer").value;
    const favcomp = document.querySelector("#favcompetition").value;

    fetch("/post-route-team", {
        method: "POST",
        body: JSON.stringify({
            favteam, favplayer, favcomp
        }),
        headers: {
            'Content-Type': "application/json"
        }
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            // get the container - querySelector
            const container = document.querySelector(".team-container");

            // create template literal
            let teamListQ = "";
            data.forEach((member) => {
                teamListQ += `
                   <li>
                       <span>Favorite team: ${member.favteam}</span>
                       <div>
                       <span>Favorite player: ${member.favplayer}</span>
                       <div>
                       <span>Favorite competition: ${member.favcomp}</span>
                   </li>
               `;
            });

            // use innerHTML to insert tempalte into the container
            container.innerHTML = teamListQ;
        });

}



document.querySelector("#teamQ-form").addEventListener("submit", (e) => {
    e.preventDefault();
    postCall();
});
