# Language Switch Web App

This web application is a demonstration of language switching functionality, allowing users to change the displayed language dynamically. The language switch option is conveniently located in the footer of the website.

## Features

- **Language Switching**: Users can toggle between different languages using the switch option in the footer.
- **Dynamic UI Updates**: The entire user interface updates seamlessly based on the selected language.
- **Scalable Design**: Easy to add new languages by extending configuration files.

## Tech Stack

- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for building the server.
- **HTML/CSS**: Frontend design and structure.
- **JavaScript**: Logic for dynamic language switching.

## Installation

1. **Clone the repository**:

   ```sh
   git clone <repository-url>
   cd languageSwitch
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Run the server**:

   ```sh
   node server.js
   ```

4. **Access the application**:

   Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
language-switch-webapp/
│
├── server.js             # Main server file
├── views/                # Directory for EJS view files
│   ├── index.ejs         # Main view file
│   └── partials/         # Partial views (e.g., footer, header)
├── public/
│   ├── css/
│   │   └── styles.css    # CSS for styling the web app
│   ├── js/
│   │   └── script.js     # JavaScript for handling UI interactions
├── locales/
│   ├── en.json           # English language file
│   ├── es.json           # Spanish language file
│   └── fr.json           # French language file
└── package.json          # Project dependencies and scripts

```

## Adding a New Language

1. **Create a new JSON file** in the `locales` directory (e.g., `de.json` for German).

2. **Add translations** for all the keys used in the app.

3. **Update the frontend** to include the new language option in the footer switch.

## Usage

- **Language Switch**: To switch between languages, use the dropdown or button located in the footer of the application. The content will update dynamically based on the selected language.

## Dependencies

- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.

## Contributing

Feel free to submit issues or pull requests if you'd like to contribute to this project.

## License

This project is open source and available under the [MIT License](LICENSE).
