document.getElementById("datetime1").defaultValue = "2017-07-20T11:42";
document.getElementById("datetime2").defaultValue = "2017-07-20T11:42";

openNewTaskPopup = function() {
    document.getElementById('new_task_popup').style.display = "block";
}
openSettingsPopup = function() {
    document.getElementById('settings_popup').style.display = "block";
}

closeNewTaskPopup = function() {
    document.getElementById('new_task_popup').style.display = "none";
}

closeSettingsPopup = function() {
    document.getElementById('settings_popup').style.display = "none";
}

document.getElementById("close_new_task_popup").onclick = closeNewTaskPopup;
document.getElementById("close_settings_popup").onclick = closeSettingsPopup;

window.onclick = function(event) {
    if (event.target == document.getElementById('new_task_popup')) {
        closeNewTaskPopup();
    } else if (event.target == document.getElementById('settings_popup')) {
    	closeSettingsPopup();
    }

    //todo: $('.close').onclick = function(){ $('popup').style.display = "none"; }
}
