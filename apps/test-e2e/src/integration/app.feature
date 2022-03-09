Feature: App

   Background:
    Given On the main page

   Scenario: Increment test
     When increment button is clicked 4 times
     Then It should display 4
     When The delayed reset is triggered
     Then It should display 0 after a delay
