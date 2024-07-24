module.exports = {
    env: {
        browser: true,
        node: false,
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    overrides: [
        {
            files: ["*.ts"],
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
                "@typescript-eslint/no-empty-function": "warn",
                "@typescript-eslint/explicit-function-return-type": "error",
            },
        },
    ],
    rules: {
        "no-constant-binary-expression": "error",
        "no-unused-expressions": "error",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: false,
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
            },
        ],
    },
    settings: {},
    extends: [],
}
