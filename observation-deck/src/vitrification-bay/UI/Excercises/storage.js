
const currentUser = localStorage.getItem("user");

const userInfoKey = 'exercises-user-info';

const excercises = [
    '4.Js101.Sarge',
    '7.Css',
    '4.Js101.TheLeftie',
    '8.TheHunterAndTheHunted'
];

function getUsersInfoFromStorage() {
    let usersInfo = localStorage.getItem("userInfoKey")
    if (usersInfo === null)
        usersInfo = [];
    else
        usersInfo = JSON.parse(usersInfo);
    return usersInfo;
}

function toggleStatus(excercise) {
    let info = getUserInfo();
    if (!info) return;
    if (info.finished.includes(excercise)) {
        info.finished = info.finished.filter(a => a !== excercise);
    }
    else
        info.finished.push(excercise);
    console.log(usersInfo);
}

function isDone(excercise) {
    let info = getUserInfo();
    return info.finished.includes(excercise);
}
const usersInfo = []
function getUserInfo() {
    var userInfo = usersInfo.find(a => a.user === currentUser)
    if (!userInfo) {
        userInfo = { user: currentUser, finished: [] }
        usersInfo.push(userInfo);
    }
    return userInfo;
}

export { excercises, toggleStatus, isDone }