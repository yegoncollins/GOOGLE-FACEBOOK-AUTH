
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const GOOGLE_CLIENT_ID = "705369780419-q1592d41e1s5uagh5ltkq6rth8r92ibb.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"



passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile)
  }
));

passport.serializeUser((user, done)=>{
    done(null,user)
})

passport.deserializeUser((user, done)=>{
    done(null,user)
})