# Colby Hill Portfolio

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![Actions Status](https://github.com/colbyhill21/PersonalWebsite/workflows/CI/badge.svg)](https://github.com/colbyhill21/PersonalWebsite/actions)

This is the repository for my website. Hosted at `https://www.colby-hill.com`

## Tools and Technologies

I designed the website using Adobe XD and developed it using Angular, HTML5, and CSS3. I leveraged numerous AWS services including S3, Route 53, Cloudfront, ACM, CodeBuild, CodePipeline, and CloudTrail to handle the website's storage, hosting, content delivery, certificate management, and CI/CD.

## Continuous Integration and Deployment

This repository is currently configured to automatically run testing and deploy to my S3 bucket upon each commit. This is handled using AWS's CodeBuild and CodePipeline services.

## Getting  started

First, run `npm install` in the project root directory to install all dependencies.
Then run `ng serve -o` which will build and then launch a server that will automatically open your default browser

## How to add a component

Since there are multiple modules in this project, you have to use the `--module` tag for the Angular-CLI to add a component.
`ng g c component-name --module app`

## License

This software is licensed under the MIT License.
See the [License](./LICENSE.md) for more information.
