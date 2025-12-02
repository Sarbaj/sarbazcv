# Admin Dashboard Guide

## Overview
The admin dashboard now includes full management for:
- Projects
- Contact Messages
- Achievements (Journey Timeline)
- Skills Categories

## Accessing the Dashboard
Navigate to: `/bin/auth/dashboard` (requires login)

## Features

### 1. Projects Tab
- Add, edit, and view projects
- Upload project images
- Manage project details (name, specialty, description, link)

### 2. Messages Tab
- View contact form submissions
- Delete messages
- Expand/collapse long messages

### 3. Achievements Tab
- Manage journey timeline items
- Add achievements with icons (emojis)
- Edit/delete existing achievements
- Displayed on the About page

### 4. Skills Tab
- Manage skill categories
- Add multiple skills per category
- Set category icons (emojis)
- Highlight important categories
- Displayed on the About page

## Database Seeding

To populate the database with initial data:

```bash
cd back
npm run seed
```

This will:
- Clear existing achievements and skills
- Insert 6 default achievements
- Insert 8 default skill categories

## API Endpoints

### Achievements
- `GET /bin/achievements` - Get all achievements
- `POST /bin/achievements` - Add new achievement
- `PUT /bin/achievements/:id` - Update achievement
- `DELETE /bin/achievements/:id` - Delete achievement

### Skills
- `GET /bin/skillcategories` - Get all skill categories
- `POST /bin/skillcategories` - Add new skill category
- `PUT /bin/skillcategories/:id` - Update skill category
- `DELETE /bin/skillcategories/:id` - Delete skill category

## Data Structure

### Achievement
```json
{
  "icon": "🏆",
  "title": "Achievement Title",
  "description": "Achievement description..."
}
```

### Skill Category
```json
{
  "icon": "💻",
  "title": "Category Name",
  "skills": ["Skill 1", "Skill 2", "Skill 3"],
  "isHighlighted": false
}
```

## Frontend Integration

The About page (`/about`) automatically fetches and displays:
- Achievements in the "My Journey" timeline section
- Skills in the "My Skills" section

If no data is found in the database, it falls back to hardcoded default content.
