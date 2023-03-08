module.exports = {
    env: {
        browser: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            extends: [
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
            ],
            rules: {
                "@typescript-eslint/array-type": [
                    "error",
                    {
                        default: "generic",
                    },
                ],
                "no-undef": "off",
                "no-unused-vars": "off",
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    {
                        argsIgnorePattern: "^_",
                        varsIgnorePattern: "^_",
                    },
                ],
                "@typescript-eslint/no-empty-function": "warn",
            },
        },
    ],
    rules: {},
    settings: {},
    extends: ["turbo"],
}
