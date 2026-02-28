# 🚀 Deploy Dev-nandan Laboratory Website to GitHub Pages

## ✅ Prerequisites
- GitHub account
- Node.js installed (already done if you built the project)

---

## 📋 Step-by-Step Instructions

### **Step 1: Initialize Git**
Open terminal in your project folder and run:

```bash
git init
git add .
git commit -m "Initial commit - Dev-nandan Pathology Laboratory"
git branch -M main
```

### **Step 2: Create GitHub Repository**
1. Go to https://github.com/new
2. Repository name: `dev-nandan-lab` (or your preferred name)
3. Visibility: **Public**
4. **DO NOT** check "Add README", ".gitignore", or "license"
5. Click **Create repository**

### **Step 3: Connect to GitHub**
Replace `YOUR_USERNAME` with your GitHub username and run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/dev-nandan-lab.git
git push -u origin main
```

### **Step 4: Update Repository Name in vite.config.ts**
If your repository name is different from `dev-nandan-lab`, update the `base` path in `vite.config.ts`:

```typescript
base: '/your-repo-name/', // Must match your GitHub repository name
```

### **Step 5: Enable GitHub Pages**
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**
5. That's it! The workflow will automatically deploy.

### **Step 6: Wait for Deployment**
1. Go to **Actions** tab in your GitHub repository
2. You'll see a workflow running (green checkmark when done)
3. Once complete, your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/dev-nandan-lab/
   ```

---

## 🔄 Update Your Website Later

Whenever you make changes:

```bash
git add .
git commit -m "Update website content"
git push
```

GitHub Actions will automatically rebuild and deploy your changes!

---

## 🎨 Customize Your Website

Edit `src/App.tsx` - everything is in the `CONFIG` object at the top:

- **Brand name, phone, email, address**
- **Colors** (already set to your logo colors)
- **Services** (add/remove/edit)
- **Tests with prices**
- **Process steps**
- **Testimonials**
- **Stats**

Then commit and push to see changes live!

---

## 📊 Your Website Stats
- **Build Size**: 423 KB (125 KB gzipped)
- **Load Time**: < 2 seconds
- **Mobile Responsive**: ✅
- **Animations**: ✅
- **No Backend Required**: ✅

---

## 🆘 Troubleshooting

### Site shows 404?
- Wait 1-2 minutes after deployment
- Check that `base` path in `vite.config.ts` matches your repo name
- Ensure repository is **Public**

### Workflow failed?
- Check **Actions** tab for error details
- Make sure `node-version` is compatible (currently set to 20)
- Try running `npm run build` locally first

### Changes not showing?
- Hard refresh: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache
- Check if workflow completed successfully

---

## 🎉 Success!

Your Dev-nandan Pathology Laboratory website is now live on GitHub Pages!

**URL**: `https://YOUR_USERNAME.github.io/dev-nandan-lab/`

Share it with your patients! 🏥✨
