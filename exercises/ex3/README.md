# Exercise 3 - Adding a TypeScript Fiori Elements app

## Adding a TypeScript-based SAP Fiori Elements template to our project with SAP Fiori Tools

👉 Open the "Command Palette"

![CAP Project - Sample Handlers](images/1.png)

👉 Open the "Fiori Application Generator"

![CAP Project - Sample Handlers](images/2.png)

👉 Select the "List Report Page" template and click "Next"

![CAP Project - Sample Handlers](images/3.png)

👉 As datasource select "Use a Local CAP Project"

👉 Select the right CAP Project (the one in the workspace folder, not the solution folder!)

![CAP Project - Sample Handlers](images/4.png)

👉 As OData Service, select the "AuthorService" and click "Next"

![CAP Project - Sample Handlers](images/5.png)

👉 Select the "Authors" as main entity

👉 Ensure the navigation entity is set to "None"

👉 Set option "Automatically add table columns to the list ... " to "No" (the base project already provides annotations to properly create a UI)

![CAP Project - Sample Handlers](images/6.png)

👉 Set following project attributes

| Attribute | Value |
| -------- | ------- |
| Module name | authors |
| Application title | Authors |
| Description | Display Authors |
| Add deployment configuration to MTA project | No (not needed for this workshop, since we're not focussing on the build / deployment process) |
| Add FLP configuration | Yes (important, this will be used in exercise 4 to test the application in the local launchpad) |
| Configure advanced options | Yes (allows us to select TypeScript) |
| Add code assist libraries to your project | Yes (enables code completion during development) |
| Generation of this application can update the CAP project to use NPM workspaces and an associated CDS plugin library (cds-plugin-ui5) | Yes (enables the UI5 tooling plugin for CAP, which will enable live transpilation of the TypeScript source code during development) |
| Enable TypeScript | Yes |

👉 Go to the next step by clicking "Next"

![CAP Project - Sample Handlers](images/7.png)

👉 Set following Fiori Launchpad Configuration

| Attribute | Value |
| -------- | ------- |
| Semantic Object | Authors |
| Action | display |
| Title | Authors |
| Subtitle | display |

👉 Click "Finish" to start the actual application generation

![CAP Project - Sample Handlers](images/8.png)

👉 Wait for the application generation to finish

![CAP Project - Sample Handlers](images/9.png)

## Running our project again with TypeScript & our newly created app

👉 Explore the generated project, notice that the project is properly generated using TypeScript (Component.ts & tsconfig.json files present)

![CAP Project - Sample Handlers](images/10.png)

👉 Open up a new terminal window (or re-use one if you still have one open)

![CAP Project - Sample Handlers](images/11.png)

👉  We're all set to launch our project & start testing our fullstack application with TypeScript, launch the project again by running the watch command and wait for the server to start.

    cds-ts watch

👉 Notice that the CDS watch command now outputs some additional information from the cds-ui5-plugin (live reload & live transpilation enabled)

![CAP Project - Sample Handlers](images/12.png)

👉 Open the CAP Service & open the generated application

![CAP Project - Sample Handlers](images/13.png)

👉 Try-out the application

![CAP Project - Sample Handlers](images/14.png)