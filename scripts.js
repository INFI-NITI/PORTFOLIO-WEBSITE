document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        project.addEventListener('click', () => {
            // Here, you can add functionality to load project details.
            // For example, you could show a modal or redirect to a project details page.
            alert(`Loading details for ${project.querySelector('h3').textContent}`);
        });
    });
});
