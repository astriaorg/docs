# list all available commands
default:
    @just --list

run:
    npm run docs:dev

lint-md:
    markdownlint-cli2 "**/*.md" "#node_modules" "#docs/markdown-examples.md" "#.github" --config .markdownlint.json

fix-md:
    markdownlint-cli2 "**/*.md" "#node_modules" "#docs/markdown-examples.md" "#.github" --fix --config .markdownlint.json
