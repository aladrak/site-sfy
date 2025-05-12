const sections = ['1', '2', '3', '4'];
const sectionCount = sections.length;

// Переключение шаблона
function showPage(templateId) {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const template = document.getElementById(templateId);
    if (template) {
        const clone = template.content.cloneNode(true);
        content.appendChild(clone);
    } else {
        content.innerHTML = "<p>Страница не найдена</p>";
    }
}

function getCurrentSection() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("p") || "home";
}

function navigate(section) {
    const url = new URL(window.location.href.split('?')[0]);
    url.searchParams.set("p", section);

    window.history.pushState({}, '', url.toString());
    showPage("tpl-" + section);
    // updateNavButtons();
}

function prevPage() {
    const current = getCurrentSection();
    const index = sections.indexOf(current);
    if (index > 0) {
        navigate(sections[index - 1]);
    }
}

function nextPage() {
    const current = getCurrentSection();
    const index = sections.indexOf(current);
    if (index < sections.length - 1) {
        navigate(sections[index + 1]);
    }
}

// При загрузке
window.addEventListener("DOMContentLoaded", () => {
    navigate(getCurrentSection());
});

window.addEventListener("popstate", () => {
    navigate(getCurrentSection());
});