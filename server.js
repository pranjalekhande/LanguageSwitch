import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import i18n from 'i18n';
import { engine } from 'express-handlebars';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));

i18n.configure({
  locales: ['en', 'es', 'fr', 'it'],
  directory: path.join(__dirname, 'locales'),
  defaultLocale: 'en',
  cookie: 'lang',
  queryParameter: 'lang',
});
app.use(i18n.init); 

const hbs = engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  // helpers: {
  //   eq: (a, b) => a === b,
   
  // },
});

app.engine('handlebars', hbs);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));