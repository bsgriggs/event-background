## Event Background
A version of the Mendix Events widget that can execute actions when the browser tab is not active

**Note: for PWA applications, the server worker will only run the event when the tab is inactive IF the delay is set to 0.**

![config](https://raw.githubusercontent.com/bsgriggs/event-background/refs/heads/media/config.png)

## Features
- Run an event when a component renders with an optional delay
- A debug mode to be able to see when the events are running in the console

## Usage
1. Add the widget to a page
2. Configure the amount of delay
3. Configure the event to be executed
4. Run the project

## Issues, suggestions and feature requests

## Development and contribution

1. Clone the repository into a folder inside your test project directory - like `{project}/pluggableWidgets`
2. Add `pluggableWidgets/` to your test project's .gitignore
3. Install NPM package dependencies by using: `npm install`.
4. Run `npm run dev` to watch for code changes. On every change:
    - the widget will be bundled
5. When changes are complete, run `npm run lint:fix ; npm run release` to bundle the widget
    - the bundle will be included in a `dist` folder in the root directory of the project
