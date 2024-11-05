# Task Manager

A robust and user-friendly task management system built with Flask and SQLAlchemy, allowing users to efficiently organize, track, and manage their daily tasks and projects.

## 🚀 Features

- **Task Management**: Create, edit, delete, and mark tasks as complete
- **Rich Task Details**: Each task includes:
  - Title
  - Detailed description
  - Category assignment
  - Due date tracking
  - Status monitoring
  - Creation timestamp
- **Organized Interface**: Tasks are displayed in chronological order
- **Status Tracking**: Monitor task progress from pending to completed
- **Category System**: Organize tasks by categories for better management

## 🛠️ Technologies

- **Backend**: Flask (Python web framework)
- **Database**: SQLite with SQLAlchemy ORM
- **Frontend**: HTML/CSS (Bootstrap for styling)
- **Date Management**: Python datetime
- **Version Control**: Git

## 📋 Requirements

```
Flask==2.3.3
Flask-SQLAlchemy==3.0.5
SQLAlchemy==2.0.20
```

## 🔧 Installation

1. Clone the repository
```bash
git clone https://github.com/CamiloVga/Task-Manager.git
cd Task-Manager
```

2. Create and activate a virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

3. Install dependencies
```bash
pip install -r requirements.txt
```

4. Initialize the database
```bash
python
>>> from app import db
>>> db.create_all()
>>> exit()
```

5. Run the application
```bash
python app.py
```

The application will be available at `http://localhost:5000`

## 🗃️ Database Structure

The Task model includes the following fields:
- `id`: Unique identifier
- `title`: Task title (required)
- `description`: Detailed task description
- `category`: Task category
- `due_date`: Task deadline
- `status`: Current status (pending/completed)
- `created_at`: Creation timestamp

## 🤝 Contributing

Feel free to fork this project, create a feature branch, and submit a Pull Request.

## 👨‍💻 Author

Created by [Camilo Vega](https://www.linkedin.com/in/camilo-vega-169084b1/) - AI Consultant

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---
⭐ If you find this project useful, please consider giving it a star on GitHub!
