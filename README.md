# Jaspreetsingh_Brar_AugFT22_JSS
# Memes Central

This is a web application that shows 100 pre retrieved memes from an api, to the guest users and has an authentication system powered via Passport.js, upon logging in the user can see the details of the memes. The viewed memes information is stored in local cookie to highlight the memes that user recently checked out.

# Packages Used

`"bootstrap": "^5.3.0-alpha1"`

`"cookie-parser": "~1.4.4"`

`"debug": "~2.6.9"`

`"dotenv": "^16.0.3"`

`"ejs": "^3.1.8"`

`"express": "^4.18.2"`

`"express-session": "^1.17.2"`

`"express-session-json": "^0.0.8"`

`"http-errors": "~1.6.3"`

`"morgan": "~1.9.1"`

`"passport": "^0.5.2"`

`"passport-local": "^1.0.0"`

`"request": "^2.88.2"`

# Installation

You can clone this repo by using :-

```
git clone <https://github.com/jaspreetsinghbrar/Jaspreetsingh_Brar_AugFT22_JSS/tree/main/jss-ca-1>
```

Navigate in to the repo folder and install all the required packages via NPM

```
npm i
```

# Initial Setup

Create an environment file .env in the project folder and save the following values. Set SECRET to a random long string consider using upper case letters and lower case letter combination with numbers and special characters.

```
MEMES_API=https://api.imgflip.com/get_memes
SECRET=
```

# Running the app

Run the application via

```
npm start
```

The application is running as expected if you see the following message `Server started successfully 🚀🚀🚀` and can be accessed at the following address.

```
http://localhost:3000/
```

# Session Storage

The user sessions are stored in `express-sessions.json` which will be generated in the project folder upon first start.
