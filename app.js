const express = require('express');
const { reduceRight } = require('lodash');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog')

// express app
const app = express();

// connect to MongoDB
const dbURI = 'mongodb+srv://nakedadmin:OrangeGummybear05@learnnode.018cg.mongodb.net/learnNode?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('connected to db');
        // only listening to request after the backend connection established
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });

//register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews'); if you wanna set your views folder named 'myviews'

//middle ware and static files
app.use(express.static('public'));
// take url encoded information and parse them into our blog object content
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

//routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    // res.send('<p> about me </p>');
    res.render('about', {title: 'About'});
});

//redirect
app.get('/about-us', (req, res) => {
    // res.send('<p> about me </p>');
    res.redirect('about', {title: 'About'});
});

//blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1 }) // descending order new->old
        .then((result) => {
            res.render('index', {
                title: 'All Blogs',
                blogs: result
            })
        })
        .catch((err) => {
            console.log(err);
        });
});

app.post('/blogs', (req, res) => {
    //using middle ware that parse our info to readable form
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/blogs/create', (req, res) => {
    // res.send('<p> about me </p>');
    res.render('create', {title: 'Create'});
});

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    Blog.findById(id)
    .then((result) => {
        res.render('details', {blog: result, title: 'Blog detail'});
    })
    .catch((err) => {
        console.log(err);
    });
});

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' })
        })
        .catch((err) => {
            console.log(err);
        });
});

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/single-blog', (req, res) => {
    Blog.findById('62717dce64e5899fb14f070d')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
})

//404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});