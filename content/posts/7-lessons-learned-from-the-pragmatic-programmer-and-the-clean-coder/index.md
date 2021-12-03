---
id: '7-lessons-learned-from-the-pragmatic-programmer-and-the-clean-coder'
title: '7 lessons learned from The Pragmatic Programmer and The Clean Coder'
description: 'Software development and life lessons from the Pragmatic Programmer and the Clean Coder'
date: '2020-12-29'
author: 'Ramón Morcillo'
tags: ['Software Development', 'Books', 'Learning']
published: true
commentsUrl: https://github.com/reymon359/gatsby-personal-site/issues/337
featuredImage: './pragmatic_programmer_and_clean_coder_book_covers.jpg'
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

1. Choose a feature to add and write a test that will pass after implementing it. Now, all tests but the new one should pass. 
2. Write the code required to pass it.
3. Refactor the code and check all tests still pass.

Thus said, it is important to look at the big picture and not to miss the main goal by writing too many tests.

> It is easy to become seduced by the green "tests passed" message, writing lots of code that doesn’t actually get you closer to a solution.
> — The Pragmatic Programmer

![Tests](./tests.gif)

There are three ways of testing: _First, During,_ and _Never._ First (TDD) is the best one, During is a fallback when First is not useful, and Never is often called “Test Later” but sadly **in most cases Later means Never.**

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

This lesson, like the majority from both books, is as important in software development as in real life. The more you practice and develop it, the more intuitive will be your ability to determine the feasibility of any task. 

First, I want to clarify what _estimating_ means by sharing The Clean Coder definition of an estimate which refers to it as a _probability distribution._

> An estimate is not a number. An estimate is a _probability distribution,_ the likelihood of completion.
> — The Clean Coder

To help you understand it, here is a figure of the likelihood of completion of a task for the next 11 days.

![Probability distribution, the likelihood of completion. Source: The clean coder](./probability_distribution.png)

One of the basics to make great estimations is to **have proper knowledge of what you are estimating.** 

> The first part of any estimation exercise is building an understanding of what’s being asked. You need to have a grasp of the scope of the domain.
> — The Pragmatic Programmer

Don’t estimate alone, **communicate with other people to be as accurate as possible.**

> The most important estimation resource you have are the people around you. They can see things that you don’t. They can help you estimate your tasks more accurately than you can estimate them on your own.
> — The Clean Coder

> A basic estimating trick that always gives good answers: ask someone who’s already done it.
> — The Pragmatic Programmer

When asked for an estimation choose the units that better reflect the accuracy you intend to convey. This Estimation times scale from The Pragmatic Programmer may help you.

| Duration      | Quote estimate in                    |
| ------------- |:------------------------------------:|
| 1–15 days     | Days                                 |
| 3–6	weeks   | Weeks                                |
| 8–20	weeks   | Months                               |
| 20+	weeks   | Think hard before giving an estimate |

Although Business likes to view estimates as commitments, remember that **an estimate is just a guess therefore no commitment is implied.** 

> A commitment is something you must achieve. If you commit to getting something done by a certain date, then you simply have to get it done by that date. Professionals don’t make commitments unless they know they can achieve them. Missing a commitment is an act of dishonesty only slightly less onerous than an overt lie.
> — The Clean Coder

Thus said, to help Business measuring requirements and making appropriate plans you have to **remove the requirement’s ambiguity before estimating.** Afterwards, **keep them updated about the progress.** 

> The trick to managing lateness is early detection and transparency. Regularly measure your progress against your goal. Be as honest as you can about all dates. Do not incorporate hope into your estimates!
> — The Clean Coder

Do not reinvent the wheel, use well-known estimation techniques for tasks. Here I made a summary of some techniques mentioned in both books.

- [PERT](https://reymon359.github.io/book-sentences/#/The%20Clean%20Coder/index?id=pert)
- [Wideband Delphi](https://reymon359.github.io/book-sentences/#/The%20Clean%20Coder/index?id=wideband-delphi)
- [Flying Fingers](https://reymon359.github.io/book-sentences/#/The%20Clean%20Coder/index?id=flying-fingers)
- [Planning Poker](https://reymon359.github.io/book-sentences/#/The%20Clean%20Coder/index?id=planning-poker)
- [Affinity Estimation](https://reymon359.github.io/book-sentences/#/The%20Clean%20Coder/index?id=affinity-estimation)
- [Trivariate Estimates](https://reymon359.github.io/book-sentences/#/The%20Clean%20Coder/index?id=trivariate-estimates)
- [The Law of Large Numbers](https://reymon359.github.io/book-sentences/#/The%20Clean%20Coder/index?id=the-law-of-large-numbers)

The more experience you have on a certain project the better you will estimate its tasks. Therefore don’t worry if the first estimates you make are not as accurate as they could be. It is an incremental process as with every long term goal you want to achieve. 

Like one of my favorite quotes states:

> There is only **one** way to **eat an elephant**: a **bite at a time**.
> — Desmond Tutu

However, there is no way you can eat such cuteness

![Elephant](./elephant.gif)

## Tracer bullets

Tracer bullets are a special kind of bullet used in movies to mark the path they’ve taken as feedback for the shooter to aim better the next time. Therefore, the main goal of Tracer Bullet Development is to "shoot" new features into the project and get quick feedback to "aim" better on the next ones.

> Tracer development is consistent with the idea that a project is never finished: there will always be changes required and functions to add. It is an incremental approach.
> — The Pragmatic Programmer

![Tracer Bullets. Source: The Pragmatic Programmer](./tracer_bullets.png)

This method helps developers to focus on the main features to be implemented so others can be built on. In addition, it serves as **proof the architecture is compatible and feasible** by providing a functional and demonstrable skeleton to work from the beginning of the development process.

> Look for the important requirements, the ones that define the system. Look for the areas where you have doubts, and where you see the biggest risks. Then prioritize your development so that these are the first areas you code.
> — The Pragmatic Programmer

![[Source](https://unsplash.com/photos/Ys78stblUyY)](./outer-digit-Ys78stblUyY-unsplash.jpg)

Lastly, **Tracer Bullet Development should not be confused with prototyping.** The code from prototypes isn’t supposed to be part of the project whereas the code from the tracer bullets isn’t thrown away. It works and is improved each iteration with new features.

> Prototyping generates disposable code. Tracer code is lean but complete, and forms part of the skeleton of the final system. Think of prototyping as the reconnaissance and intelligence gathering that takes place before a single tracer bullet is fired.
> — The Pragmatic Programmer

## Handling pressure

I liked this one as well since it helps you outside software development too. Soon or later you will be under pressure, and the best tricks to handling it are to **avoid it when you can, and weather it when you can’t.**

> The best way to stay calm under pressure is to avoid the situations that cause pressure.
> — The Clean Coder

![Avoiding](./avoiding.gif)

You mainly **avoid it by managing commitments, keeping clean, and following your disciplines.** 

The best way to manage commitments is by _saying no_ to those which deadlines you aren’t sure to meet. Keeping clean basically means to have no mess on your systems, code, and design.

> The way to go fast, and to keep the deadlines at bay, is to stay clean. Professionals do not succumb to the temptation to create a mess in order to move quickly. “Quick and dirty” is an oxymoron. Dirty always means slow!
> — The Clean Coder

**Follow disciplines you truly believe in and stick to them all the time** no matter the situation. Crisis times will come, and it’s when you have to pay attention to how you behave because if you follow your disciplines means you believe in them. Changing your behavior and not following them would mean you don’t truly believe in your normal behavior, and you have to shift those disciplines to improve it.

> If you keep your code clean during normal times but make messes in a crisis, then you don’t really believe that messes slow you down. If you pair in a crisis but don’t normally pair, then you believe pairing is more efficient than non-pairing.
> — The Clean Coder

![[Source](https://unsplash.com/photos/YBuVjp5Mtrw)](./federico-lancellotti-YBuVjp5Mtrw-unsplash.jpg)

Choose disciplines that you feel comfortable following in a crisis. _Then follow them all the time._ Following these disciplines is the best way to avoid getting into a crisis. Don’t change your behavior when the crunch comes. If your disciplines are the best way to work, then they should be followed even in the depths of a crisis.

However, you can’t avoid pressure always so you have to learn how to get through it. **You weather it by staying calm, communicating, following your disciplines, and getting help.**

To stay calm **don’t panic,** manage your stress, and think the problem through to find the best possible outcome. Then go for it at a steady pace, _eating an elephant way-_ **communicating** all the time with your team and superiors to let them know when you are in trouble to get input and guidance. This way there won’t be any unexpected surprises in the end.

![Communication is the key. [Source](https://anstesters.org/the-art-of-communication-an-important-soft-skill-in-software-testing/)](./good_communication_is_the_key_to_success.jpg)

> Avoid creating surprises. Nothing makes people more angry and less rational than surprises. Surprises multiply the pressure by ten.
> — The Clean Coder

In the same way you relied on your disciplines to avoid pressure, you should also rely on them when the moment gets tough. In fact, these times you have to pay special attention to them and neither question nor abandon them.

The communication tip includes **asking for help** from teammates to pair, superiors, or internet sites and forums. 

Don't forget to be there for others too when they are under pressure and need help.

> When the heat is on, find an associate who is willing to pair program with you. You will get done faster, with fewer defects. Your pair partner will help you hold on to your disciplines and keep you from panicking.
> — The Clean Coder

![Pairing](./pairing.gif)

## Refactoring

The term _Refactoring_ is defined by Martin Fowler as a:

> Disciplined technique for restructuring an existing body of code, altering its internal structure without changing its external behavior.
> — Martin Fowler

Sometimes you will find code that does not feel right and should be fixed or improved, and you have to keep in mind the best moment to do so is **now**, when you find it.

**It is inevitable, a program’s code needs to grow, evolve, and improve.** To do so, some decisions must be rethought, and the code has to be changed therefore be sure to have it covered with **automated tests** to guarantee that the external behavior does not change.

> Rather than construction, software is more like gardening—it is more organic than concrete. You plant many things in a garden according to an initial plan and conditions. You constantly monitor the health of the garden, and make adjustments as needed.
> — The Pragmatic Programmer

![Bob gardening](./bobs_burger_gardening.gif)

When should you refactor the code? Here is a list of situations that qualify to do so:

- Remove **code duplication.**
- Making some parts of the code more **orthogonal.**
- **Update** code and/or documentation outdated.
- To improve **performance.**

And here are Martin Fowler tips on how to refactor without doing more harm than good:

1. _Don’t try to refactor and add functionality at the same time._
2. _Make sure you have good tests before you begin refactoring. Run the tests as often as possible._
3. _Take short, deliberate steps: move a field from one class to another, split a method, rename a variable. Refactoring often involves making many localized changes that result in a larger-scale change._

The most important thing to keep in mind is that **refactoring is not a certain task, it is a habit** that, as with most things in life, is easier to do while the issues are small, as an ongoing activity while coding. **The less you refactor now the greater time you’ll have to invest to fix the problem down the road.**

![Cat refactoring](./cat_refactoring.gif)

> Refactoring as "a growth." Removing it requires invasive surgery. You can take it out while it is still small. Or, you could wait while it grows and spreads—but removing it then will be both more expensive and more dangerous. Wait even longer, and you may lose the patient entirely.
> — The Pragmatic Programmer

## Main differences

![Differences](./differences.gif)

I did not want this lecture to be a comparison but although they focus on similar subjects, the content, and the way they are narrated are not the same. Here are the main impressions I got from them not related to the content itself that can help you have an idea of what to expect while reading them.

- The Clean Coder speaks about the developer in a more day by day at work way, with references to common situations that are given in such an environment like the relationship with sales or business people, working in a team, or saying no to clients. The developer at the Pragmatic Programmer isn’t that much pictured into job situations, rather it grants an overview of the field structuring the book on advice: _topics and tips_, for any situation.  
- The Clean Coder refers to the figure of the Software Developer as a _Professional Programmer_ while The Pragmatic Programmer uses the totally unexpected term _Pragmatic Programmer_.
- In general terms, The Clean Coder has a more subjective sense since it tells more personal experiences from the author whereas The Pragmatic Programmer feels more objective focusing mostly on the advice themselves.
- The Pragmatic Programmer contains more code examples in different programming languages than the Clean Coder which helps you understand the concepts discussed.

## Conclusions

Keep in mind that these are just the personal impressions and lessons I got from reading the two titles. The books have much more to offer, and the best thing you can do is read both yourself to form your own opinion and conclusions. 

If you are interested in software development, want to get better but think they are too similar and don’t have time to read both, think twice, each will bring you different knowledge and best practices for your career. 

Having said that, if you still want to go the lazy way, I made this [open-source project with the core sentences from them](https://github.com/reymon359/book-sentences).

[![[Book Sentences Project](https://github.com/reymon359/book-sentences)](./book_sentences.png)](https://github.com/reymon359/book-sentences)

## Resources

The main resources are both books which you can find easily on the internet and [the project](https://github.com/reymon359/book-sentences/) where I noted down the sentences I found most important from them.

