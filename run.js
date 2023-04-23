const childProcess = require("child_process")
const path = require("path")

const projectList = {
    home: {
        path: path.join(__dirname, "./home"),
        command: "npm run dev"
    },
    news: {
        path: path.join(__dirname, "./news"),
        command: "npm run serve"
    },
    user: {
        path: path.join(__dirname, "./user"),
        command: "npm run start"
    },
}

Object.values(projectList).forEach(({path, command}) => {
    childProcess.spawn(`cd ${path} && ${command}`, {stdio: "inherit", shell: true})
})
