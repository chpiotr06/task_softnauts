# Welcome to Softnauts!

We're happy that You want to be with us!

## Short version:
1.   Apply CSS styles to component LoginForm, in accordance with design guidelines provided and conformance to current project structure.
2.   Connect LoginForm to external API server, to actually verify login credentials, and act on the response.
3.   We estimate that task can be finished within 2-3 hrs, but that's only assumption. No one is tracking Your time. (As one of our developers said, reading this description can take longer than actual work :) )
4.   When ready, commit everything to Your own git repository (github, bitbucket, others) and send us the link.

## Detailed version:

### Preparation
1.   Clone this repository to Your machine:
     -    `git clone https://bitbucket.org/softnauts/react-login-form.git`
2.   Install dependencies
     -    `npm install`
3.   Start the project
     -    `npm run start`
4.   Open `src/pages/LoginPage` folder. Your task should fit nicely into this folder. You won't have to modify anything else, but, of course, quick look at the rest of the project can help.
     -    (Maybe You will want to add something to `src/_variables.scss`? Depends on Your approach.)
5.   Get access to design files
     1.    Open this link: https://www.figma.com/file/5F61Igj0KiuYMz69FPPg54/Zadanie-React This is the Figma design suite. Create free account, to be able to view definitions and export resources.
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
1.    Open the design: https://www.figma.com/file/5F61Igj0KiuYMz69FPPg54/Zadanie-React
2.    In Your favorite code editor, open files `src/pages/LoginPage/LoginForm.jsx` and `src/pages/LoginPage/LoginForm.module.scss`. Modify these files, to make the form look like the design.
      -    Add missing elements, and apply CSS styles, using "CSS modules" design pattern. (Optional reading: https://css-tricks.com/different-ways-to-write-css-in-react/)
      -    You _have_ to implement semantic form elements. (&lt;form&gt;, &lt;fieldset&gt;, &lt;input type='submit /&gt;, &lt;label&gt;, etc.). Let's just assume that this project will be frequently used with screen readers and accessibility mode.
      -    To complete "Part 1" You won't have to modify other files except these two.
3.    Default "common sense" login form behavior is not included in the design, but You should still to implement it:
      -    Pressing "enter" on "username" field should focus "password" field, but "enter" on "password" field should submit the form.
      -    Semantic form elements are important. But "submit" obviously shouldn't trigger page reload! Fix it without changing &lt;input type="submit"&gt; to another type of HTML button.
      -    We don't have dedicated mobile design, but our form still should be responsive enough, to be usable on 400px wide mobile screens. More than half of our user base is mobile.
4.    You don't have to implement "forgotten password" or "create account" pages. Just point the links somewhere, randomly, we don't care. But still - please use &lt;Link&gt; components from react-router.

### Part 2 - connect to the API server and make the form interactive
1.    API server address is http://zadanie-react-api.wenus.softnauts.com. Open this link in the browser, and click on endpoint name, to read API documentation. You will get actual API endpoint address there, possible response formats and error codes.
2.    Your task is simple - refactor `onLoginAttempt` function from `LoginPage/index.jsx` file, and use it to send login/password to the API server. Read the response, and either:
      -    show error message to the user
      -    or, if login succeeded, redirect him to homepage (`/` route).
3.    You _may_ need to change something in form elements - pay attention to not break the design.
4.    Please, keep presentation separated from app logic. `LoginForm.jsx` component is responsible for rendering only, whereas `LoginPage/index.jsx` should contain business logic. You _may_ add other files if You want, but fit them inside `src/pages/LoginPage/*` dir.
5.    Correct API username/password combinations are:
      -    email: **admin@example.com** password: **zaq1@WSX**
      -    email: **user@example.com** password: **&lt;ki88pL&gt;**
6.    Keep in mind, there are more errors possible than just "Incorrect username or password", shown in the design. Check API don on the server.
      -    Our example API endpoint will sometimes be unreachable, to simulate network loss. You may expect timeouts, at about 1:6 ratio. As You don't have a design for network error feedback, use "flash messages" functionality, built into project. Example:
           -    `const {addMessage} = useDataset();` 
           -    ````
                useEffect(()=>{
                    addMessage('error','Server is offline, try again later');
                }, [])
                ````
                Paste this into the project and see what will happen.
7.    Again, skip "forgotten password" and "registration" functionality.

## Additional information:
1.  What we will look at:
    1.    If project compiles and runs,
    2.    If console has errors (it shouldn't :) )
    3.    If the login form looks like it should, and we can use it normally.
    4.    Code structure, cleanliness and Your design decisions (design patterns, conformance to project and React guidelines).
2.  You _have_ to use **Node >= 16**
3.  Please, write in English! (variable names, comments, commit messages - all of it)

## Submitting an assignment

1. If You have any thoughts, comments, future recommendations -  delete contents of this README.md file and put them here.
2. Push source code into Your own public repository (GitHub, BitBucket, whatever), and send us the link.
