console.log("public presented");

const postCall = () => {
    const fname = document.querySelector("#first").value;
    const lname = document.querySelector("#last").value;

    fetch("/post-route", {
        method: "POST",
        body: JSON.stringify({
            fname, lname
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
            let teamList = "";
            data.forEach((member) => {
                teamList += `
                   <li>
                       <span>First name: ${member.fname}</span>
                       <div>
                       <span>Last name: ${member.lname}</span>
                   </li>
               `;
            });

            // use innerHTML to insert tempalte into the container
            container.innerHTML = teamList;
        });

}



document.querySelector("#team-form").addEventListener("submit", (e) => {
    e.preventDefault();
    postCall();
});
