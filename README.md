# **Project Description** 

We designed a web application using `Git` and `GitHub`. Each student made a local Git and GitHub accounts and then linked them, before performing tasks. *Student 1* and *Student 2* had their own roles as the repository's Author and Collaborator, respectively. While performing all the tasks screenshots were saved for the sake of evidence in the word file. The whole web application runs only using **HTML**, **JAVA** and **CSS** files.



## **Team Members**

| Role      | Name         | Roll No.    | GitHub                                              |
| --------- | ------------ | ----------- | --------------------------------------------------- |
| Student 1 | Abdul Hadi   | BSDSF25A049 | [chhadi3121-dev](https://github.com/chhadi3121-dev) |
| Student 2 | Farhan Sajid | BSDSF25A029 | [farhan-sajid-6](https://github.com/farhan-sajid-6) |



## **Features**

- A  *Task Title*  box, to enter tasks.

- A  *Description*  box, to enter description about it.

- Then a `Add Task` button for adding new tasks.

- And a `Search` box, for searching tasks (case-insensitive).

  

  

  ## **Technologies**

  - HTML

  - JAVA

  - CSS

  - Git

  - GitHub

    

    

    ## **Git Workflow**

    

    1. Git and GitHub account `linked` together. After that  *Student 1*  made first **commit** and pushed **main** to GitHub.
    2. All the features were developed using their **own feature branch**, such that(`feature/task-form`, `feature/task-style`, `feature/task-search`).
    3. Every branch was first **pushed** to GitHub and then merged into `main` through a **pull request**, after being reviewed by the other student.
    4. On GitHub, 3 issues were created. The issue #1  **~~Implement Task Search~~**  was *closed*,  by `pulling a request` and then merging it in `main`.
    5. A merge conflict in `README.md` was created on purpose. **Student 1** updated a line in `README.md` on the `main` branch and then **Student 2** edited the exact same line in `README.md` on a feature branch. This triggered the **merge conflict** and was then resolved manually by removing **conflict markers** from `README .md` .
    6. The commands **`stash`, `restore`, `reset`** and **`revert`** were demonstrated.
    7.  In the end **tagged  `v1.0.0`** and a GitHub **release** were created.

  

  

  ## **Branches**

  | Branch                | Purpose                                                      |
  | --------------------- | ------------------------------------------------------------ |
  | `main`                | Contains a merged-stable code, only updated through pull requests. |
  | `feature/task-form`   | A development branch used for searching purposes.            |
  | `feature/task-style`  | A development branch for receiving user's task input.        |
  | `feature/task-search` | This branch allows the developer to design the visual appearance of the web app. |

  

  

  

## **Git Commands Demonstrated**

- **Repository Setup**: `git init`, `git clone`, `git config --global`

- **Inspection & History**: `git status`, `git log --oneline --graph --all`, `git show`, `git blame`

- **Staging & Commit**: `git add .`, `git commit -m "msg"`, `git diff --staged`

- **Branching & Switching**: `git branch -a`, `git switch -c `, `git switch main`

- **Remote Collaboration**: `git fetch`, `git pull origin main`, `git push -u origin `,`git remote-v`

- **Undo Operations**: `git restore `, `git reset --soft HEAD~1`, `git revert `

- **Tagging**: `git tag `, `git push origin `, `git push --tag`



## GitHub Features Demonstrated

- A **`Public` repository** on GitHub connected to the local project on developer's computer.
- **Feature branches** pushed to public repository.
- **Issues** (`3` created, `1` closed through a pull request)
- **Pull requests** `(#4 merging task input, #5 merging style, #6 merging search)` with descriptions.
- **Code review**: Comments, Replies and an Approval.
- **Merging** `pull requests.`
- **Merge** `conflict.`
- **Tag** `v1.0.0` and a GitHub **release**.
- A Contributor graph showing both students.





## How to Run



- **Clone the repository**

```bash
git clone https://github.com/chhadi3121-dev/student-task-manager.git
```



- **Move to the project directory**

```bash
cd student-task-manager
```


- **Open in browser**

   Then open `index.html` in any web browser (double-click the file)


## **Screenshots**

![Task1](Task1.png)

![Task2](Task2.png)

![Task3](Task3.png)

![Task4](Task4.png)

![Task5](Task5.png)

![Task6](Task6.png)

![Task7](Task7.png)

![Task8](Task8.png)

![Task9](Task9.png)

![Task10](Task10.png)

![Task10-2.0](Task10-2.0.png)

![Task11](Task11.png)

![Task12](Task12.png)

![Task13](Task13.png)

![Task14](Task14.png)

![Task15](Task15.png)

![Task16](Task16.png)

![Task16-2.0](Task16-2.0.png)

![Task17](Task17.png)

![Task18](Task18.png)

![Task19](Task19.png)

![Task19-2.0](Task19-2.0.png)

![Task19-2.1](Task19-2.1.png)

![Task20](Task20.png)

![Task20-2.0](Task20-2.0.png)

![Task21](Task21.png)

![Task22](Task22.png)

![Task23](Task23.png)

![Task23-2.0](Task23-2.0.png)

![Task24](Task24.png)

![Task24-2.0](Task24-2.0.png)

![Task25](Task25.png)

![Task26](Task26.png)

![Task27](Task27-2.0.png)

![Task28](Task28.png)

![Task28-2.0](Task28-2.0.png)

![Task29](Task29.png)

![Task30](Task30.png)

![Task30-2.0](Task30-2.0.png)

![Task30-2.1](Task30-2.1.png)

![Task30-2.2](Task30-2.2.png)


## Version History

| Version | Date | Description |
|---|---|---|
| v1.0.0 | 2026-10-04 | First stable release: task form, responsive styling and task search |

### v1.0.0 - Initial Release
- Added the task input form (title, description and Add Task button)
- Added styling for layout, buttons, task cards and mobile screens
- Added task search that filters by title or description
- Tag: `v1.0.0`, published as a GitHub Release

## Contributors

- **Abdul Hadi** ([@chhadi3121-dev](https://github.com/chhadi3121-dev)): Project setup, task form, task search, Issues, release and tagging.
- **Farhan Sajid** ([@farhan-sajid-6](https://github.com/farhan-sajid-6)): Task style, code reviews, merge-conflict, Pull Request approval/merge.

# FINAL SUBMISSION CHECKLIST

- [x] Git installed and configured

- [x] Local repository initialized

- [x] Multiple meaningful commits created

- [x] Branches created and used

- [x] GitHub repository created and connected

- [x] Feature branches pushed

- [x] At least 3 GitHub Issues created

- [x] At least 3 Pull Requests completed

- [x] Code reviews completed

- [x] At least one merge conflict created and resolved

- [x] git stash demonstrated

- [x] git restore demonstrated

- [x] git reset demonstrated

- [x] Git tag v1.0.0 created
- [x] GitHub Release created
- [x] Both students contributed
- [x] All required screenshots inserted
- [x] Screenshots have captions and explanations
- [x] Final application screenshot included
- [x] Final GitHub screenshot included
- [x] Final Git history screenshot included
- [x] Final questions answered
