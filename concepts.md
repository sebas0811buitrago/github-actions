# GitHub Actions Concepts

## Context:

# https://docs.github.com/en/actions/reference/workflows-and-actions/contexts

## Events:

## Skip workflows :

https://docs.github.com/en/actions/how-tos/manage-workflow-runs/skip-workflow-runs

## Job Artifacts

Artifacts are assets to be distributed, representing the output of a job (App binary, website files).

**Use cases:**

- Save artifacts and provide them for download
- Save artifacts and use them in subsequent jobs

## Job outputs:

Jobs can ouput values, and those values ve available for others jobs

## Caching :

use the cache github action in all the places need it, for example
for `npm ci` you should use it before the step, and add the cache step in all the places you want to reuse the cache

The cache is even store between different workflow executions
