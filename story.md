### User story

1. Search for recipe
2. update the number of servings
3. bookmark recipes
4. create my own recipes
5. persistence of bookmarks over restarting web browser

### Features

1. Search for recipe
   - search functionality -> input field
   - display results
   - pagination
   - display recipe with cooking time, servings and ingredients
2. update the number of servings
   - change servings functionality
     - update all ingredients according to current number of servings
3. bookmark recipes
   - display list of all bookmarked recipes
4. create my own recipes
   - user can upload own recipes
   - user recipes get automatically bookmarked
   - user can only see their own recipes, not recipes from other users
5. persistence of bookmarks over restarting web browser
   - localStorage
   - on page load, read saved bookmarks from localStorage and display

### MVC ARCHITECTURE

1. Structure
   - code organization and division
     - modules
     - classes
     - functions
2. Maintainability
   - the project is never really done
   - we'll need to make changes
3. Expandability
   - add new features
4. use pre-built frameworks with well-established architecture patterns
   - MVC
   - MVP
   - Flux
   - et c.
5. Components of any architecture
   1. Business Logic
      - solves business problem
      - directly related to what business does and wwhat it needs
   2. State management
      - stores all the data about the application
      - should be the **single source of truth**
      - UI should be kept in sync with the state
        - the most difficult task in the works! Redux to the rescue!
      - state libraries exist
   3. HTTP library
      - making and receiving AJAX requests (JSON > XML)
      - optional, but almos always necessary in real-world apps
   4. Application Logic /router/
      - code that is only concerned about the implementation of application itself
      - handles navigation and UI events
   5. Presentation Logic /UI Layer/
      - concerned about the visible part of the application
      - displays the application state
6. SOC
   - Separation of Components
   - do not mix any of those components
   - Model and View are completely stand-alone, with zero code connection
7. MVC
   1. Model
      - application data
      - state
      - business logic
      - http library
   2. View
      - presentation logic
   3. Controller
      - application logic
        - handling events, like clicks
        - dispateches tasks to models and views
        - controls and orchestrates this entire action
        - the only place where functions and methods are called
      - bridge between model and view
