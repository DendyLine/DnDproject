import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import helmet from 'helmet';
import morgan from 'morgan';



const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000
    },
    resave: true
}));
app.use(cookieParser());


app.listen(port, () => {
    console.log(`App listening on the port ${port}`);
});