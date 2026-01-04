# Conventional Commits Guidelines

This document outlines the types and structure for commit messages, following the Conventional Commits specification. This standard helps create an explicit commit history, which makes it easier for everyone to understand the changes and for automated tools to parse the history.

## Commit Message Structure

A commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Commit Types and Their Meanings

*   **feat**: A new feature for the user.
*   **fix**: A bug fix for the user.
*   **chore**: Routine tasks, maintenance, or other changes that don't affect `src` or `test` files (e.g., `package.json` updates, build process changes).
*   **docs**: Documentation-only changes.
*   **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc.).
*   **refactor**: A code change that neither fixes a bug nor adds a feature (e.g., restructuring existing code).
*   **perf**: A code change that improves performance.
*   **test**: Adding missing tests or correcting existing tests.
*   **build**: Changes that affect the build system or external dependencies (e.g., `npm`, `yarn`).
*   **ci**: Changes to CI configuration files and scripts.
*   **revert**: Reverts a previous commit.

## Examples

*   `feat(authentication): add user login functionality`
*   `fix(api): handle empty response from external service`
*   `chore: update dependencies to latest versions`
*   `docs: add API reference to README`
*   `style: format all TypeScript files`
