const content = document.getElementById("content");
const home_btn = document.getElementById("home");
const about_btn = document.getElementById("about");
const project_btn = document.getElementById("projects");
const contact_btn = document.getElementById("contact");
const cv_btn = document.getElementById("cv");

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

function get_home() {
    switch_lang = true;
    cv_btn.innerText = "CV";
    get_and_set_content("home.html")
}

function get_about() {
    switch_lang = true;
    cv_btn.innerText = "CV";
    get_and_set_content("about.html")
}

async function get_project() {
    switch_lang = true;
    cv_btn.innerText = "CV";
    await get_and_set_content("projects.html")
    await get_and_execute_script("projects.js");
}

function get_contact() {
    switch_lang = true;
    cv_btn.innerText = "CV";
    get_and_set_content("contact.html")
}

let switch_lang = true;
function get_cv() {
    const lang_get = switch_lang ? "cv-eng.html" : "cv-nor.html";
    cv_btn.innerText = switch_lang ? "CV - English" : "CV - Nor";
    get_and_set_content(lang_get);
    switch_lang = !switch_lang;
}

home_btn.addEventListener('click', get_home);
about_btn.addEventListener('click', get_about);
project_btn.addEventListener('click', get_project);
contact_btn.addEventListener('click', get_contact);
cv_btn.addEventListener('click', get_cv);

//get_home();
get_cv();