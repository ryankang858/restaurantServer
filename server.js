const express = require("express");
const app = express();
const port = 8425;
const fs = require("fs");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("./public"));

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get("/team", function (req, res) {
    res.send("Spurs tied 2-2 to Brentford");
});

app.get("/read-team", function (req, res) {
    fs.readFile(path.join(__dirname, "team.txt"), "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
        res.send(data);
    });
});

app.get("/write-team/:team", function (req, res) {
    const writeData = req.params.team

    fs.writeFile(path.join(__dirname, "team.txt"), writeData, (err, data) => {
        res.send("data successfully written");
    });
});

app.get("/append-team/:team", function (req, res) {
    const appendData = req.params.team

    fs.appendFile(path.join(__dirname, "team.txt"), appendData, (err) => {
        if (err) throw err;
        res.send("data successfully written");
    });
});

app.get("/send-team-file", function (req, res) {
    res.sendFile(path.join(__dirname, "team.html"), () => {
        console.log("Success!!");
    });
});

app.get("/send-player-file", function (req, res) {
    res.sendFile(path.join(__dirname, "player.html"), () => {
        console.log("Success!!");
    });
});

app.get("/send-sushi-file", function (req, res) {
    res.sendFile(path.join(__dirname, "sushi.html"), () => {
        console.log("Success!!");
    });
});

app.get("/send-pizza-file", function (req, res) {
    res.sendFile(path.join(__dirname, "pizza.html"), () => {
        console.log("Success!!");
    });
});

app.get("/send-ny-pizza-file", function (req, res) {
    res.sendFile(path.join(__dirname, "ny.html"), () => {
        console.log("Success!!");
    });
});

app.get("/send-chicago-pizza-file", function (req, res) {
    res.sendFile(path.join(__dirname, "chicago.html"), () => {
        console.log("Success!!");
    });
});

app.get("/send-italian-pizza-file", function (req, res) {
    res.sendFile(path.join(__dirname, "italy.html"), () => {
        console.log("Success!!");
    });
});

app.post("/post-route", function (req, res) {
    fs.readFile(path.join(__dirname, "/db/data.json"), "utf8", (err, data) => {
        if (err) throw err;
      
        const memberList = JSON.parse(data);

        memberList.push(req.body);

        
        fs.writeFile(path.join(__dirname, "/db/data.json"), JSON.stringify(memberList), (err, data) => {
            res.json(memberList);
        });
    });
});

app.get("/send-team-q", function (req, res) {
    res.sendFile(path.join(__dirname, "teamQ.html"), () => {
        console.log("Success!!");
    });
});

app.post("/post-route-team", function (req, res) {
    fs.readFile(path.join(__dirname, "/db/team.json"), "utf8", (err, data) => {
        if (err) throw err;
      
        const teamList = JSON.parse(data);

        teamList.push(req.body);

        
        fs.writeFile(path.join(__dirname, "/db/data.json"), JSON.stringify(teamList), (err, data) => {
            res.json(teamList);
        });
    });
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`);

});