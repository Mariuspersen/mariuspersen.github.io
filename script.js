const content = document.getElementById("content");
const home_btn = document.getElementById("home");
const about_btn = document.getElementById("about");
const project_btn = document.getElementById("projects");
const contact_btn = document.getElementById("contact");

let play_warships;

async function get_and_set_content(content_sel) {
    const res = await fetch(content_sel);
    const text = await res.text();
    content.innerHTML = text;
}

async function get_and_execute_script(script_sel) {
    const res = await fetch(script_sel);
    const text = await res.text();
    const scriptElement = document.createElement("script");
    scriptElement.textContent = text;
    content.appendChild(scriptElement);
}

function get_and_set_home_content() {
    get_and_set_content("home.html")
}

function get_and_set_about_content() {
    get_and_set_content("about.html")
}

async function get_and_set_project_content() {
    await get_and_set_content("projects.html")
    await get_and_execute_script("projects.js");
}

function get_and_set_contact_content() {
    get_and_set_content("contact.html")
}

home_btn.addEventListener('click', get_and_set_home_content);
about_btn.addEventListener('click', get_and_set_about_content);
project_btn.addEventListener('click', get_and_set_project_content);
contact_btn.addEventListener('click', get_and_set_contact_content);

get_and_set_home_content("home.html");