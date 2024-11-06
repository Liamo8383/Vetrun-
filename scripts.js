// Function to open the Discord link in a new tab
function openDiscordLink() {
    window.open('https://discord.gg/CWUETVtkqu', '_blank');
}

// Function to show specific sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}
