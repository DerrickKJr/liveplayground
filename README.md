# LivePlayground

## IMPORTANT
-Only push changes in the main branch
## How to setup gh-pages with react native
1) Run the command `npx create-expo-app app-name-here`
2) Navigate to the folder `cd app-name-here`
3) Run the command `npm install gh-pages`
4) Run these next commands to coorelate your project with github

    `git init`
   
   `git add .`

   `git branch -M main`

   `git remote add origin https://github.com/git-username-here/git-repo-name-here.git`

   `git push -u origin main`

   `npm add -d gh-pages`
5) Open the `package.json` file
6) Add `"homepage": "http://git-user-name-here.github.io/git-repo-name-here"`  under the `'name'`
7) Add `"deploy": "gh-pages -d web-build", predeploy": "expo export:web",` inbetween the brackets of `"scripts:"`
8) Open the `manifest.json` file
9) Add your site name to the `"start url"` inbetween the forward slash`/` and `?utm_source=web_app_manifest`
     *This is for users who add your site to their homepage
10) Only push the `manifest.json`
       *You may come across errors if u push the others
11) Run the command `npx expo export:web`
12) Run the command `npm run deploy`


## How to update webpage:
1) Commit changes
2) Push changes
3) Run the command `npm run deploy`
4) Wait minimum of 1 minutes for changes to take affect
