document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'HabitTracker',
            description: 'Cross-platform habit tracker with KMP frontend (Android & iOS) and Go backend.',
            link: 'https://github.com/rtarik/HabitTracker',
            category: 'Mobile apps'
        },
        {
            title: 'GlobalRoom',
            description: 'Real-time chat app using KMP and Compose Multiplatform with a Go backend.',
            link: 'https://github.com/rtarik/GlobalRoom',
            category: 'Mobile apps'
        },
        {
            title: 'GlobalScout',
            description: 'Cross-platform country explorer built with KMP and Compose Multiplatform.',
            link: 'https://github.com/rtarik/GlobalScout',
            category: 'Mobile apps'
        },
        {
            title: 'WorkoutTracker',
            description: 'Native Android personal workout tracker.',
            link: 'https://github.com/rtarik/WorkoutTracker',
            category: 'Mobile apps'
        },
        {
            title: 'Chinese-reader',
            description: 'Web-based Chinese reading tool built with FastHTML and HTMX.',
            link: 'https://github.com/rtarik/chinese-reader',
            category: 'Misc'
        }
    ];

    const projectsGrid = document.getElementById('projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderProjects(filter = 'all') {
        projectsGrid.innerHTML = '';

        const filteredProjects = projects.filter(project => {
            return filter === 'all' || project.category === filter;
        });

        filteredProjects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-tag">${project.category}</div>
                <h4 class="project-title">${project.title}</h4>
                <p class="project-desc">${project.description}</p>
                <a href="${project.link}" target="_blank" class="project-link">
                    View on GitHub <span>→</span>
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
