# Deployment Instructions for Achievements & Skills

## Problem
The achievements and skills data was seeded to your **local database**, but your frontend is fetching from the **production API** at `https://sarbazcvbackend.vercel.app`.

## Solution Options

### Option 1: Deploy Backend with Seeded Data (Recommended)

Since your backend is already deployed on Vercel, you need to seed the production database:

1. **Make sure your backend code is pushed to Git:**
   ```bash
   cd back
   git add .
   git commit -m "Add achievements and skills seeding"
   git push
   ```

2. **Redeploy on Vercel** (it should auto-deploy if connected to Git)

3. **Seed the production database:**
   - You can run the seed script locally but it will connect to production:
   ```bash
   cd back
   node seedData.js
   ```
   This works because your `.env` file has the production MongoDB credentials.

### Option 2: Use Localhost for Development

If you want to test locally first:

1. **Start your backend server:**
   ```bash
   cd back
   npm run dev
   ```

2. **Update frontend API URLs temporarily:**
   - In `AddProject.jsx` and `About.jsx`, change:
   ```javascript
   // From:
   'https://sarbazcvbackend.vercel.app/bin/achievements'
   
   // To:
   'http://localhost:5050/bin/achievements'
   ```

3. **Test locally**, then change back to production URLs before deploying

### Option 3: Create Environment Variables (Best Practice)

Create a `.env` file in the `front` directory:

```env
VITE_API_URL=http://localhost:5050
```

For production, use:
```env
VITE_API_URL=https://sarbazcvbackend.vercel.app
```

Then update your fetch calls to use:
```javascript
fetch(`${import.meta.env.VITE_API_URL}/bin/achievements`)
```

## Current Status

✅ Database seeded successfully with:
- 6 achievements
- 8 skill categories

✅ Backend routes working correctly

✅ Frontend components ready to display data

❌ Data not showing because frontend is calling production API but data is in local database

## Quick Fix

**Run this command to seed production database:**
```bash
cd back
node seedData.js
```

This will populate your production MongoDB with all the achievements and skills data, and your dashboard will immediately start showing the data!
