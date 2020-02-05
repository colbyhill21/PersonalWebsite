This is the repository for my personal website. I designed and developed it using Angular, HTML, and CSS! 
I leveraged numerous AWS services including S3, Route 53, Cloudfront, ACM, CodeBuild, CloudTrail, and CodePipeline to handle the website's storage, hosting, content delivery, certificate management, and CI/CD. I am using Route 53 to manage the hosted zone for the domain which is `https://www.colby-hill.com` and Cloudfront for global content delivery. Additionally I am using CodePipeline and CodeBuild to automatically build, and deploy upon every commit to this repository.



### Screenshot of the homepage on Desktop:
<img src="https://i.imgur.com/aFEZjei.png" height="400" alt="Screenshot of the UI of the homepage">

### Screenshot of the homepage from Mobile:
<img src="https://i.imgur.com/540FFTZ.jpg" height="400" alt="Screenshot of the UI of the homepage">

## Development server

Run `ng serve -o` for a dev server.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## How to get started
just run `npm install` in the project root directory

## How to add a component
`ng g c component-name --module app`