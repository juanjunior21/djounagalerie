/**
 * TodoApp Class - Gestion complète des tâches avec Local Storage
 */
class TodoApp {
    constructor() {
        this.todos = this.loadFromStorage() || [];
        this.filter = 'all';
        this.sort = 'date-new';
        this.currentPriority = 'medium';
        this.currentCategory = 'personal';

        this.setupEventListeners();
    }

    /**
     * Configure les écouteurs d'événements
     */
    setupEventListeners() {
        // Input et bouton ajouter
        const taskInput = document.getElementById('taskInput');
        const addBtn = document.getElementById('addBtn');

        addBtn.addEventListener('click', () => this.addTodo());
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });

        // Filtres et tri
        document.getElementById('filterSelect').addEventListener('change', (e) => {
            this.filter = e.target.value;
            this.render();
        });

        document.getElementById('sortSelect').addEventListener('change', (e) => {
            this.sort = e.target.value;
            this.render();
        });

        document.getElementById('prioritySelect').addEventListener('change', (e) => {
            this.currentPriority = e.target.value;
        });

        document.getElementById('categorySelect').addEventListener('change', (e) => {
            this.currentCategory = e.target.value;
        });

        // Boutons d'action
        document.getElementById('exportBtn').addEventListener('click', () => this.exportTodos());
        document.getElementById('clearCompletedBtn').addEventListener('click', () => this.clearCompleted());
        document.getElementById('clearAllBtn').addEventListener('click', () => this.clearAll());
    }

    /**
     * Ajoute une nouvelle tâche
     */
    addTodo() {
        const input = document.getElementById('taskInput');
        const text = input.value.trim();

        if (!text) {
            alert('Veuillez entrer une tâche !');
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: this.escapeHtml(text),
            completed: false,
            priority: this.currentPriority,
            category: this.currentCategory,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        this.todos.unshift(newTodo);
        this.saveToStorage();
        input.value = '';
        this.render();
    }

    /**
     * Toggle l'état de complétion d'une tâche
     */
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            todo.updatedAt = new Date().toISOString();
            this.saveToStorage();
            this.render();
        }
    }

    /**
     * Modifie une tâche
     */
    editTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (!todo) return;

        const newText = prompt('Modifier la tâche :', this.unescapeHtml(todo.text));
        if (newText !== null && newText.trim()) {
            todo.text = this.escapeHtml(newText.trim());
            todo.updatedAt = new Date().toISOString();
            this.saveToStorage();
            this.render();
        }
    }

    /**
     * Supprime une tâche
     */
    deleteTodo(id) {
        if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
            this.todos = this.todos.filter(t => t.id !== id);
            this.saveToStorage();
            this.render();
        }
    }

    /**
     * Filtre et trie les tâches
     */
    getFilteredAndSortedTodos() {
        let filtered = this.todos.filter(todo => {
            if (this.filter === 'active') return !todo.completed;
            if (this.filter === 'completed') return todo.completed;
            return true;
        });

        // Tri
        filtered.sort((a, b) => {
            switch (this.sort) {
                case 'date-new':
                    return new Date(b.createdAt) - new Date(a.createdAt);
                case 'date-old':
                    return new Date(a.createdAt) - new Date(b.createdAt);
                case 'priority':
                    const priorityOrder = { high: 1, medium: 2, low: 3 };
                    return priorityOrder[a.priority] - priorityOrder[b.priority];
                case 'name':
                    return a.text.localeCompare(b.text);
                default:
                    return 0;
            }
        });

        return filtered;
    }

    /**
     * Affiche les tâches
     */
    render() {
        const todoList = document.getElementById('todoList');
        const emptyState = document.getElementById('emptyState');
        const filtered = this.getFilteredAndSortedTodos();

        todoList.innerHTML = '';

        if (filtered.length === 0) {
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
            filtered.forEach(todo => {
                const li = this.createTodoElement(todo);
                todoList.appendChild(li);
            });
        }

        this.updateStats();
    }

    /**
     * Crée un élément de tâche
     */
    createTodoElement(todo) {
        const li = document.createElement('div');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

        const priorityLabel = {
            high: '🔴 Haute',
            medium: '🟡 Moyenne',
            low: '🟢 Basse'
        };

        const categoryLabel = {
            personal: '👤 Personnel',
            work: '💼 Professionnel',
            shopping: '🛍️ Shopping',
            health: '🏥 Santé',
            other: '📌 Autre'
        };

        const createdDate = new Date(todo.createdAt);
        const formattedDate = createdDate.toLocaleDateString('fr-FR', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        li.innerHTML = `
            <input 
                type="checkbox" 
                class="todo-checkbox" 
                ${todo.completed ? 'checked' : ''}
                onchange="todoApp.toggleTodo(${todo.id})"
            >
            <div class="todo-content">
                <p class="todo-text">${todo.text}</p>
                <div class="todo-meta">
                    <span class="todo-date">${formattedDate}</span>
                    <span class="todo-priority ${todo.priority}">${priorityLabel[todo.priority]}</span>
                    <span class="todo-category">${categoryLabel[todo.category]}</span>
                </div>
            </div>
            <div class="todo-actions">
                <button class="todo-btn edit" onclick="todoApp.editTodo(${todo.id})" title="Modifier">✏️</button>
                <button class="todo-btn delete" onclick="todoApp.deleteTodo(${todo.id})" title="Supprimer">🗑️</button>
            </div>
        `;

        return li;
    }

    /**
     * Met à jour les statistiques
     */
    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const active = total - completed;
        const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

        document.getElementById('totalCount').textContent = total;
        document.getElementById('activeCount').textContent = active;
        document.getElementById('completedCount').textContent = completed;
        document.getElementById('progressPercent').textContent = `${percent}%`;
        document.getElementById('progressBar').style.width = `${percent}%`;
    }

    /**
     * Supprime les tâches complétées
     */
    clearCompleted() {
        if (confirm('Supprimer toutes les tâches complétées ?')) {
            this.todos = this.todos.filter(t => !t.completed);
            this.saveToStorage();
            this.render();
        }
    }

    /**
     * Supprime toutes les tâches
     */
    clearAll() {
        if (confirm('Êtes-vous sûr de vouloir supprimer TOUTES les tâches ? Cette action est irréversible !')) {
            if (confirm('Dernière confirmation : supprimer définitivement tout ?')) {
                this.todos = [];
                this.saveToStorage();
                this.render();
            }
        }
    }

    /**
     * Exporte les tâches en JSON
     */
    exportTodos() {
        if (this.todos.length === 0) {
            alert('Aucune tâche à exporter !');
            return;
        }

        const dataStr = JSON.stringify(this.todos, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `mes-taches-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }

    /**
     * Sauvegarde dans le localStorage
     */
    saveToStorage() {
        localStorage.setItem('djounagalerie_todos', JSON.stringify(this.todos));
    }

    /**
     * Charge depuis le localStorage
     */
    loadFromStorage() {
        try {
            const data = localStorage.getItem('djounagalerie_todos');
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Erreur lors du chargement des données :', e);
            return [];
        }
    }

    /**
     * Échappe les caractères HTML
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Décode les caractères HTML
     */
    unescapeHtml(text) {
        const div = document.createElement('div');
        div.innerHTML = text;
        return div.textContent;
    }
}

// Variable globale pour accès facile dans le HTML
let todoApp;
