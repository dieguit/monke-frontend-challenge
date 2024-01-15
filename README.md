# Front End Technical Challenge

## Introduction

Welcome to the Frontend Challenge!

This application allows users to view a "Models Inventory" with a comprehensive list of all their models, and to view an Analysis data visualization of these models.

The following set of tasks is designed to resemble a simplified example of the challenges we tackle, simplified for time efficiency. The data, resembling real-world data, may require parsing and transformation for effective use.

`Tailwind CSS` and `Material UI - JOY` are included for your convenience. Feel free to utilize these or install your preferred tools.

We encourage you to write your best, production-quality, reusable, scalable, and maintainable code. Good luck!

## Tasks

### Inventory Page

The backend team has implemented a new endpoint `/models`, and you have recently added the `getModels` function in `src/api/getModels.ts`. Your tasks are as follows:

1. Display a list of cards, each representing a model from the response.
   a. Hovering over a card should display a blue border around it.
   b. Each card should link to `/analysis/{MODEL_NAME}`.
   c. Display the model's name on the left side of the card and its type (Classification or Regression) on the right.

### Analysis Page

1. Create a new Analysis page accessible via the route `/analysis/${MODEL_NAME}`.
2. Display the model's name prominently at the top of the page.
3. Incorporate a card that presents a NIVO bar chart with data from `getAnalysis` in `src/api/getAnalysis.ts`.
   a. The bars in the chart should be oriented horizontally.
   b. The bars should be grouped by origin (not stacked) with label values shown as percentages.
   c. Ensure the card does not exceed the height and width of the screen.
   d. The card should be responsive and scale appropriately on smaller screens, with scrolling enabled inside the card for screens that are too short or narrow.

## Notes from Diego

Hey! I was not sure if I'll be able to showcase and describe my thought process for the challenge, so here are some key points:

- I have added some tests, not 100% coverage but I think it covers a decent amount of scenarios (reusable component and a full page). They can be run using `npm run test`
- For the NIVO chart, I just created a full-screen layout (should use all available screen responsively). It resizes down to a breakpoint (just an arbitrary value that makes the graph readable) and then stops resizing and adds scrollbars.
- Created a data folder with the functions that are supposed to call an external API. They provide typing of the expected responses (data validation should be done here), map the values and provides the data components need.
- I decided to use react-query to manage data state and fetching, as I think it's a good production-ready solution.
