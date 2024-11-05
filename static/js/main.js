// Confirmar eliminación de tarea
function confirmDelete(event) {
    if (!confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
        event.preventDefault();
    }
}

// Cambiar color de las fechas límite según su proximidad
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const dueDates = document.querySelectorAll('.due-date');
    
    dueDates.forEach(date => {
        const dueDate = new Date(date.dataset.date);
        const diffDays = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
        
        if (diffDays < 0) {
            date.classList.add('text-danger');  // Vencida
        } else if (diffDays <= 3) {
            date.classList.add('text-warning'); // Próxima a vencer
        } else {
            date.classList.add('text-success'); // Con tiempo
        }
    });
});

// Filtrar tareas por categoría
document.getElementById('category-filter')?.addEventListener('change', function() {
    const category = this.value;
    const tasks = document.querySelectorAll('.task-card');
    
    tasks.forEach(task => {
        if (category === 'all' || task.dataset.category === category) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
});

// Marcar tarea como completada con animación
const completeButtons = document.querySelectorAll('.complete-task');
completeButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const taskCard = this.closest('.card');
        taskCard.style.transition = 'all 0.3s';
        taskCard.style.opacity = '0.5';
        taskCard.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            window.location.href = this.href;
        }, 300);
    });
});
