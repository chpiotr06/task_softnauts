# Welcome to Softnauts!

## Your task:
1.   Create and style component LoginForm, in accordance with design guidelines provided.
2.   Connect that form to external API server, to actually verify login credentials, and act on the response.
3.   Commit everything, upload it to Your own git repository (github, bitbucket, others) and send us the link.

### Preparation
1.   Clone this repository to Your machine:
     -    `git clone https://krzysztoflagan@bitbucket.org/softnauts/react-login-form.git`
2.   Install dependencies
     -    `npm install`
3.   Start the project
     -    `npm run start`
4.   Get access to design files
     1.    Open this link: https://www.figma.com/file/5F61Igj0KiuYMz69FPPg54/Zadanie-React?node-id=2%3A222 This is the Figma design suite. Create free account, to be able to view definitions and export resources.
     2.    Zoom out somewhat, to be able to see all three screens. This is the design You have to implement.
           1.    Look at the first screen, named "Login page - initial", this is how we expect the login form to look.
           2.    Second screen, "typing state", is almost identical, except that fields font color is darker, because user typed something. Your form should also act like that.
           3.    Third screen, "error state" - this is how we expect LoginForm to look, if email/password don't match.
     3.    Click on one element to select it
           1.    ...and then, hover your mouse over another one. You will see information, how exactly these two are placed in relation to each other.
           2.    on the right panel, You will see selected element's exact CSS rules.
           3.    on the left panel, You can navigate the element tree
     4.    Select "!" icon, near error message on the third screen
           1.    right panel has three tabs. Open "Export" tab, expand the menu, select "SVG" format, and "export". This way You can get resources needed to complete the task.
     5.    (Yes, at Softnauts, we love Figma :) )
### Part 1 - implement a web design
1.    We provided simple application skeleton and basic project structure.
2.    In Your favorite editor, open `src/pages/LoginPage/LoginForm.jsx`. You will have to modify this file, and the `LoginForm.module.scss` file, to make it look like the design.
      - we used "CSS modules" design pattern, but You can switch to styled components if You want. Just keep in mind, we frown upon polluting global css scope.
      - (Optional reading: https://css-tricks.com/different-ways-to-write-css-in-react/)
3.    To complete "part 1" You won't have to modify other files, but You can if You want, that's not a mistake.
4.    Some elements are currently missing from `LoginForm.jsx`, for example error message. Don't forget to add them, and remember, that not everything is visible from the start.
5.    You don't have to implement "forgotten password" or "create account" pages. Just point the links somewhere, randomly, we don't care.

### Part 2 - connect to the API server
1.    API server address is http://zadanie-react-api.wenus.softnauts.com. Open this link in the browser, to read API documentation. You will get actual API endpoint address there.
2.    Your task is simple - send login/password from the form to API endpoint, read the response, and either:
      -    show error message to the user
      -    or, if login succeeded, redirect him to homepage (`/` route).
3.    Correct email/password combinations are:
      -    email: **admin@example.com** password: **zaq1@WSX**
      -    email: **user@example.com** password: **<ki88pL>**
4.    Keep in mind, there are more possible errors than just "Incorrect username or password", shown in the design.
      -    Our example API endpoint will sometimes be unreachable, to simulate network loss. You may expect timeouts or API crashes, at about 1:5 ratio.
      -    As You don't have a design for this, prepare visual feedback for the user, on Your own.
5.    Again, do neither "forgotten password" nor "registration" pages.

## Additional information:
1. What we will look at:
    1.    If project compiles and runs,
    2.    If console has errors (it shouldn't :) )
    3.    If the login form looks like it should, and if we can use login functionality.
    4.    Code structure, cleanliness and Your design decisions (SOLID, design patterns, and/or conformance to React guidelines).
2.  You can add any library You want, remove our code, anything.
    1. Of course, these modifications should be sane.
    2. But if You do something "strange" and successfully defend it at the meeting - a big plus!
3.  You _have_ to use **Node >= 16**
4.  Please, write in English! (variable names, comments, commit messages - all of it)

## Submitting an assignment

1. If You have any thoughts, comments, future recommendations -  delete contents of this README.md file and put them here.
2. Push source code into Your own public repository (GitHub, BitBucket, whatever), and send us the link.
