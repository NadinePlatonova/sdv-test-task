# MarTech Test Task

A single-page application with a registration form. After signing up, a popup appears with the message "Thank you...".

## Used technologies

This project was created with [Create React App](https://github.com/facebook/create-react-app).

**Stack:**

- HTML;
- CSS;
- JavaScript, React.

## Completed tasks

1. To make up the page according to the [Figma layout](https://www.figma.com/file/OFhxh3RHOPL7tvxCpITcmj/UX-5285?node-id=0%3A1).
2. The layout should be adaptive.
3. Clicking on SIGN UP should open a popup with a registration form.
4. The button with a cross should close the popup. The same thing should happen when pressing Esc with the popup open.
5. The form's submit should register with a PUT request for a resource https://api.dating.com/identity, with a body:

```
        {
        "email": "my@example.com",
        "password": "12345678"
        }
```

6. After successful registration, the text Thank You... from the layout should be displayed.
7. Javascript should be in a separate file and loaded without blocking rendering.
8. To upload the code to a public git repository.
9. If the server needs to be built and started to open the page, the instruction should be at the root of the repository in the file README.md.

## Steps to run the application locally

Open your local directory in the terminal and clone the repository from GitHub there:

```bash
cd <path to your folder>
git clone https://github.com/NadinePlatonova/sdv-test-task.git
```

Open the project directory in the terminal:

```bash
cd sdv-test-task
```

To view the application in your browser run:

```bash
npm run start
```

To build the application for production to the `build` folder run:

```bash
npm run build
```
