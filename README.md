# Infigrit - E-Class Website

This repository contains the local replica and updated version of the Infigrit (formerly Ganitha Kulam) E-Class website.

## How to Launch the Website
This is a static HTML/CSS/JS website hosted locally via a simple Node.js HTTP server. 

**Prerequisites:**
- Ensure you have [Node.js](https://nodejs.org/en/) installed on your machine.

**Running the Site:**
1. Open up your terminal (Command Prompt, PowerShell, Git Bash, etc.).
2. Navigate to this directory (`c:\Data\Antigravity\eclass`).
3. Run the following command to start the server:
   ```bash
   node server.js
   ```
4. Open your web browser and navigate to exactly: `http://localhost:4600`
5. The home page will be displayed automatically. 

## Version Control and Restoring v1

This repository is tracked via Git. The initial pristine version of the fully-implemented Phase 6 updates has been committed under the message **"eclass version v1"**.

### How to View the Commit History
To view the commit history and find the v1 commit hash, run:
```bash
git log --oneline
```

### How to Restore "v1" Back
If you ever make experimental changes to the code that break the website, or you just want to return to the original completed version provided by the AI, you can easily discard your uncommitted changes or restore the repository to the `v1` state.

**Option A: Discard Current Unsaved/Uncommitted Changes (Reset to exactly the latest commit)**
If you broke something and haven't committed the bad code yet, run:
```bash
git reset --hard HEAD
```

**Option B: Revert completely to the v1 commit**
If you have made multiple commits over time and want to jump back in time to the original v1 state permanently:
1. Find the commit hash for the "eclass version v1" commit using `git log`. (It will look something like `a1b2c3d`)
2. Run a hard reset to that specific commit:
   ```bash
   git reset --hard <commit-hash>
   ```
   *(Warning: This permanently erases any commits that came after it).*

**Option C: Temporarily View v1 without erasing the future**
To just look at the old code without erasing your newer commits:
```bash
git checkout <commit-hash>
```
To return back to your main timeline:
```bash
git checkout main
```
