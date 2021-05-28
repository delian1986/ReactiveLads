# Reactive Lads

A web application that allows browsing and filtering of VR Scans.

Project deployed at GitLab Pages - live at https://radkostanev.gitlab.io/ReactiveLads

You can either register a new account or use the following account:

`username: clara@example.com`
`password: claraexample`

> please note we're using free hosting and the initial request might take up to a minute to load

Backend deployed at Heroku - live at https://reactivelads.herokuapp.com/
You can clone it from https://github.com/delian1986/reactiveladsapi

![Alt text](https://github.com/delian1986/ReactiveLads/blob/master/Docs/example.gif)

## Team Members

- Aleksandar Ivanov - [GitHub](https://github.com/aleksandar-g-ivanov)
- Delyan Marinov - [GitHub](https://github.com/delian1986)
- Radko Stanev - [GitHub](https://github.com/radkostanev)
- Yordan Iliev - [GitHub](https://github.com/yordanihl)

## Project Description

#### Public Part

- The public part consists of register and login pages.

#### Private Part

- After a successful login, users are redirected to the main page which is split into two main parts: filters on the left-hand side and VR scans on the right-hand side. Users can use the filters as well as the search box to filter the VR scans.
- VR Scans are lazy-loaded - current viewport plus a small buffer is fetched.
- Favorites feature is also present which allows adding certain VR scans to a personal 'favorites' list for easy access later on.
- Users can save all currently selected filters using the 'presets' feature. Saving filters as presets allows one to go back to a previous filter selection simply by clicking on the desired preset.
- User details page is present and can be accessed by the top navigation menu. Users can edit their personal details like first and last name, email and profile picture.

## Technologies

- React
- React Router
- Redux
- Webpack
- Jest
- Enzyme
- Husky
- GitLab CI/CD Pipelines
- Cypress

## Notes

- Custom project configuration
- ESLint and Prettier integration (Husky used to execute both on pre commit stage)
- Testing integrated with CI
- PropTypes used for type checking
- Redux thunk used to handle async actions
- GitLab Issue Board used as a task tracking tool
- Code reviews before merge(pull requests merged only after having at least 2 approvals)
- Test coverage of above 95%

## Redux State Diagram

![Alt text](https://github.com/delian1986/ReactiveLads/blob/master/Docs/redux-chart.png)

## Main Components Diagram

![Alt text](https://github.com/delian1986/ReactiveLads/blob/master/Docs/main-components-diagram.png)
