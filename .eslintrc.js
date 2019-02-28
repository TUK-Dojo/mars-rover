module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "import/no-extraneous-dependencies": ["error", { "devDependencies": ["**/test/**/*.js"] }],
        "no-console": ["error", { allow: ["warn", "error", "log"] }]
    }
};