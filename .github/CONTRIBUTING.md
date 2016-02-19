# Guide on how to contribute to the project

## Git Team Workflow
Branches:

Master is the main branch, this is where the final project will exist.
Development is the 'staging' branch where changes have been made to the project, but they are not yet ready to be merged into the main project.

1. Create a new branch for what you're working on. For example, lets say I'm working on adding a user login system.
```
git checkout -b feature/user-login-system
```

2. Now that I have a branch to work on, I can make changes to the project.
```
git commit -m "Add a User model"

git commit -m "Creating User sign up form"
```

3. Make sure you're up to date with the latest development branch.
```
git checkout development
git pull
git checkout feature/user-login-system
git rebase development
```

4. Now if you're willing to make the project a lot more clean we can squash some commits into a single commit. This is sort of difficult for new git users, but it is a very good practice to learn and is used a lot in professional development.
```
git rebase -i development
```

5. An editor should open, I personally use vim for this (and all development for that matter). Lets combine all the commits into one by squashing every commit into the first.

You simply have to change the 'pick' in all of the commits but the top one to either 's' or 'squash'.
```
pick ae3ax3dc Add a User model
s 3v3a14x2ad8 Creating User sign up form
```

6. Now lets make the single commit message pretty!
```
 [#123456] The New User System
   * Add a User model
   * Creating User sign up form
```

7. Merge your newly created feature into the development branch, push it for your team, and then delete the local branch you created for the feature.
```
git checkout development
git merge feature/user-login-system
git push origin development
git branch -D feature/user-login-system
```

8. Repeat for all features and fixes. In the case of a fix just replace the word 'feature' with 'fix' in commits and every other context.

Now the team leader or project manager can decide on where to go from here. He could decide to merge 'development' with 'master' or make needed changes to the development branch, etc.
