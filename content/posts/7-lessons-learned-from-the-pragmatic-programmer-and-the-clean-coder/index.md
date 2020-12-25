---
id: '7-lessons-learned-from-the-pragmatic-programmer-and-the-clean-coder'
title: '7 lessons learned from The Pragmatic Programmer and The Clean Coder'
description: 'Software development and life lessons from the Pragmatic Programmer and the Clean Coder'
date: '2020-12-01'
author: 'Ramón Morcillo'
categories: ['Software Development']
tags: ['Software Development', 'Books', 'Learning']
published: true
commentsUrl: https://github.com/reymon359/gatsby-personal-site/issues/293
featuredImage: './pragmatic_programmer_and_clean_coder_book_covers.jpg'
thumbnail: './pragmatic_programmer_and_clean_coder_book_covers.jpg'
type: 'post'
url: 'none'
---

I recently finished reading both books: _The Pragmatic Programmer 20th Anniversary Edition_ (2019) and _The Clean Coder_ (2011) which are found on almost every “top 10 Software Development books” lists out there. My goal was to learn, improve, and get something a teacher from mine used to say: “_knowledge that can’t be obtained from just reading articles_.”

When you are developing software you may get stuck at a point where Youtube videos and Stackoverflow answers don’t help. You end up reaching for the official docs, or the source code of that technology to find the answer. The same thing happens when you want to understand the subject properly. **Articles fall short and reading well-known books is the best approach.**

These books focus not only on how to write code but on teaching you best practices for developing software and even useful life lessons. I’ll share some lessons I learned from them. 

## Table of Contents

- [Taking Responsibility](#Taking-Responsibility)
- [Testing](#Testing)
- [Teamwork](#Teamwork)
- [Estimating](#Estimating)
- [Tracer bullets](#Tracer-bullets)
- [Handling pressure](#Handling-pressure)
- [Refactoring](#Refactoring)
- [Main differences](#Main-differences)
- [Conclusions](#Conclusions)
- [Resources](#Resources)

## Taking Responsibility

As a software developer, you are responsible for the code you create and must ensure that it not only works now but will do in the best possible way for a long time (nothing lasts forever). The best way to make sure the code won’t fail is by testing it, having automated tests that you run each time you write new lines to be sure everything is still working.

> Take Responsibility. Responsibility is something you actively agree to.
> — The Pragmatic Programmer

Responsibility is not only related to coding, you have to **take responsibility for improving yourself** too and get better by scheduling time for it. 

> Professionals spend time caring for their profession. Presumably, you became a software developer because you are passionate about software and your desire to be a professional is motivated by that passion.
> — The Clean Coder

> Your knowledge and experience are your most important day-to-day professional assets.
> — The Pragmatic Programmer

![Responsibility](./responsibility.gif)

## Testing

The gravity of testing in software development is such that both books focus on this topic. 

You have to **look at tests as the first users of your code**, so they are the best feedback that guides your coding.

Practice [TDD Test Driven Development.](https://en.wikipedia.org/wiki/Test-driven_development) How? Three steps explanation:

1 Choose a feature to add and write a test that will pass after implementing it. Now, all tests but the new one should pass. 

2 Write the code required to pass it. 

3 Refactor the code, and check all tests still pass.

Thus said, it is important to look at the big picture and not to miss the main goal by writing too many tests.

> It is easy to become seduced by the green "tests passed" message, writing lots of code that doesn’t actually get you closer to a solution.
> — The Pragmatic Programmer

![Tests](./tests.gif)

There are three ways of testing: _First, During,_ and_ Never._ First (TDD) is the best one, During is a fallback when First is not useful, and Never is often called “Test Later” but sadly **in most cases Later means Never.**

> The need to test first forces you to think about "good design."
> — The Clean Coder

Having tests give you the confidence to refactor code more often because you have the tests to check if they still pass after the changes are done.

> Tests should be run as frequently as possible to provide maximum feedback and to ensure that the system remains continuously clean.
> — The Clean Coder

Use acceptance tests to _define when a requirement is done_ collaborating with the stakeholders.

Developers take the responsibility to ensure that tests are _always automated_ for a simple reason: **cost.**

Developers have to aim “QA should find nothing” as a goal by implementing different kinds of tests, in different measures from unit to exploratory ones.

![The Test Automation Pyramid - The Clean Coder](./the_test_automation_pyramid.png)

## Teamwork

When working on a team you have to be a "team player", communicate frequently, keep an eye out for your teammates, and execute your responsibilities as well as possible.

> Good communication is key to avoiding these problems. And by "good" we mean instant and frictionless. Frictionless means it’s easy and low-ceremony to ask questions, share your progress, your problems, your insights and learnings, and to stay aware of what your teammates are doing.
> — The Pragmatic Programmer

![[Source](https://unsplash.com/photos/iuqmGmst5Po)](./tobias-mrzyk-iuqmGmst5Po-unsplash.jpg)

Teams should be **small, less than 10-12 members**, where everyone knows and trusts each other. This team environment is **hard to achieve** therefore once you get it you have to **care for it changing the projects they work on rather than the members.**

> As team size grows, communication paths grow at the rate of O(n^2), where n is the number of team members. On larger teams, communication begins to break down and becomes ineffective.
> — The Pragmatic Programmer

> To form teams around projects is a foolish approach. Individuals are only on the project for a short time and therefore never learn how to deal with each other. Teams are harder to build than projects. Therefore, it is better to form persistent teams that move together from one project to the next and can take on more than one project at a time.
> — The Clean Coder

![[Source](https://unsplash.com/photos/Px3oXvVXRxc)](./tobias-mrzyk-Px3oXvVXRxc-unsplash.jpg)

Furthermore, great teams will face and solve issues together where each individual will provide their best. They _get things done as a unit_. In the end, they will be known for their performance and quality of work.

> Quality can come only from the individual contributions of all team members. Quality is built in, not bolted on.
> — The Pragmatic Programmer

> A gelled team can work miracles, anticipate each other, cover for each other, support each other, and demand the best from each other. They make things happen.
> — The Clean Coder

> Great project teams have a distinct personality. People look forward to meetings with them, because they know that they’ll see a well-prepared performance that makes everyone feel good. The documentation they produce is crisp, accurate, and consistent.
> — The Pragmatic Programmer

![[Source](https://unsplash.com/photos/wJK9eTiEZHY)](./natalie-pedigo-wJK9eTiEZHY-unsplash.jpg)

## Estimating



## Tracer bullets



## Handling pressure


## Refactoring


## Main differences



## Conclusions



## Resources



