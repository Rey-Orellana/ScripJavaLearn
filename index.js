app.use((req, res, next) => {
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; script-src 'self' https://apis.google.com;"
    );
    next();
});