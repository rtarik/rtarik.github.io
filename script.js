document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'SpectralNN',
            description: 'Paint aware color mixing library for Kotlin and Javascript.',
            linkText: 'View project',
            link: 'https://rtarik.github.io/spectralnn-paint-mixer/',
            tags: ['Misc']
        },
        {
            title: 'Pinball Architect',
            description: '2D Pinball game and Board Editor built with KMP and Compose Multiplatform.',
            linkText: 'View project',
            link: 'https://rtarik.github.io/PinballArchitect/',
            tags: ['Mobile apps', 'Games']
        },
        {
            title: 'HabitTracker',
            description: 'Cross-platform habit tracker with KMP frontend (Android & iOS) and Go backend.',
            linkText: 'View on GitHub',
            link: 'https://github.com/rtarik/HabitTracker',
            tags: ['Mobile apps']
        },
        {
            title: 'GlobalRoom',
            description: 'Real-time chat app using KMP and Compose Multiplatform with a Go backend.',
            linkText: 'View on GitHub',
            link: 'https://github.com/rtarik/GlobalRoom',
            tags: ['Mobile apps']
        },
        {
            title: 'GlobalScout',
            description: 'Cross-platform country explorer built with KMP and Compose Multiplatform.',
            linkText: 'View on GitHub',
            link: 'https://github.com/rtarik/GlobalScout',
            tags: ['Mobile apps']
        },
        {
            title: 'WorkoutTracker',
            description: 'Native Android personal workout tracker.',
            linkText: 'View on GitHub',
            link: 'https://github.com/rtarik/WorkoutTracker',
            tags: ['Mobile apps']
        },
        {
            title: 'Chinese-reader',
            description: 'Web-based Chinese reading tool built with FastHTML and HTMX.',
            linkText: 'View on GitHub',
            link: 'https://github.com/rtarik/chinese-reader',
            tags: ['Misc']
        },
        {
            title: 'Pinball',
            description: 'Retro-style arcade pinball game built with Vanilla JS and custom physics.',
            linkText: 'View project',
            link: 'https://rtarik.github.io/pinball-js/',
            tags: ['Games']
        }
    ];

    const projectsGrid = document.getElementById('projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderProjects(filter = 'all') {
        projectsGrid.innerHTML = '';

        const filteredProjects = projects.filter(project => {
            return filter === 'all' || project.tags.includes(filter);
        });

        filteredProjects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';

            const tagsHtml = project.tags.map(tag => `<div class="project-tag">${tag}</div>`).join('');
            
            card.innerHTML = `
                <div class="project-tags-container">${tagsHtml}</div>
                <h4 class="project-title">${project.title}</h4>
                <p class="project-desc">${project.description}</p>
                <a href="${project.link}" target="_blank" class="project-link">
                    ${project.linkText} <span>→</span>
                </a>
            `;
            projectsGrid.appendChild(card);
        });
    }

    // Initial render
    renderProjects();

    // Event Listeners for Filters
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            renderProjects(filterValue);
        });
    });
});
