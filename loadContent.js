


// Content loader
document.addEventListener('DOMContentLoaded', () => {
    // Load about content
    fetch('about.md')
        .then(response => response.text())
        .then(text => {
            document.getElementById('about-content').innerHTML = marked.parse(text);
        });

    // Load projects
    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            const container = document.getElementById('projects-container');
            projects.forEach(project => {
                const projectCard = `
                <div class="terminal-card glow-hover p-6 rounded-xl transition-all duration-300">
                    <div class="mb-4 flex justify-between items-start">
                        <div>
                            <h3 class="text-xl font-bold">${project.title}</h3>
                            <div class="text-primary text-sm">${project.subtitle}</div>
                        </div>
                        <div class="bg-primary/10 p-2 rounded-lg">
                            <i class="${project.icon} text-primary"></i>
                        </div>
                    </div>
                    <p class="text-gray-400 mb-6">
                        ${project.description}
                    </p>
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${project.tags.map(tag => 
                            `<span class="bg-dark text-xs px-3 py-1 rounded-full">${tag}</span>`
                        ).join('')}
                    </div>
                    <div class="text-xs text-gray-500">${project.year}</div>
                </div>`;
                container.innerHTML += projectCard;
            });
        });

    // Load blog content
    fetch('blogs.md')
        .then(response => response.text())
        .then(text => {
            document.getElementById('blogs-content').innerHTML = marked.parse(text);
        });

    // Load contact info
    fetch('contact.json')
        .then(response => response.json())
        .then(contacts => {
            const container = document.getElementById('contact-container');
            contacts.forEach(contact => {
                const contactIcon = `
                <a href="${contact.url}" target="_blank" class="contact-icon">
                    <i class="${contact.icon}"></i>
                    <span>${contact.name}</span>
                </a>`;
                container.innerHTML += contactIcon;
            });
        });

    // Add TryHackMe badge to certifications section
    const certificationsContainer = document.querySelector('#certifications .grid');
    certificationsContainer.innerHTML += `
    <div class="cert-terminal">
        <div class="flex items-start">
            <div class="bg-primary/10 p-3 rounded-lg mr-4">
                <i class="fas fa-shield-alt text-primary text-2xl"></i>
            </div>
            <div>
                <h4 class="text-xl font-bold">TryHackMe</h4>
                <p class="text-gray-400">Rank: Top 10%</p>
                <a href="https://tryhackme.com/p/1213297" target="_blank" class="mt-3 block">
                    <img src="https://tryhackme-badges.s3.amazonaws.com/1213297.png" 
                         alt="TryHackMe" 
                         class="mt-2 w-48 mx-auto">
                </a>
            </div>
        </div>
    </div>`;
});
