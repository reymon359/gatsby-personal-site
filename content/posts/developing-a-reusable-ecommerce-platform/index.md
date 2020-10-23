---
id: 'developing-a-reusable-ecommerce-platform'
title: 'Developing a reusable ecommerce platform'
description: 'Process and lessons learned from the development of a reusable ecommerce platform.'
date: '2020-10-23'
author: 'Ramón Morcillo'
categories: ['??']
tags: ['??']
published: true
commentsUrl: https://github.com/reymon359/gatsby-personal-site/issues/153
featuredImage: './rachel-lees-WlhzJkBvNDo-unsplash.jpg'
thumbnail: './rachel-lees-WlhzJkBvNDo-unsplash.jpg'
type: 'post'
url: 'none'
---

This is a story about my team's hard work developing not a single ecommerce platform, but a reusable one for different owners, keeping the same codebase, look and feel, but being highly customizable. I will conclude with what we learned from it which I believe can be a useful learning resource for other software developers out there and to ourselves in future projects.

I will try to focus on the relevant parts as much as possible to make it easier to understand. Having said this, a bit of domain is needed to go through this lecture.

## Table of Contents

Context
The first MVP
Implementing GraphQL
Architecture and Tech Stack
The second MVP
Conclusion and lessons learned
Greetings

## Context

The client we were developing the platform for was an eLearning company which was composed of 3 main sub-companies. 

For the past few years, the sub-companies had been operating mostly independently but now they were trying to create a standardized way of doing things, and grow together in the best way.

The project was an ambitious one. Creating an ecommerce platform that would work for all the sub-companies wasn’t easy to design, neither to implement given a large number of unsolved doubts it had, which made it very hard to estimate. 

![Doubts gif](./doubts.gif)

## The first MVP

To tackle this difficult challenge, we started from the bottom, with one of the 3 sub-companies, let’s call it sub-company H, in fact, it wasn’t one of the main sub-companies, it was a sub-company from a sub-company. To explain it better, if we name the 3 main sub-companies L, N, and P, then H was a sub-company of N. 

Being a sub-sub-company didn’t mean the platform would be simpler to develop, quite the opposite actually given all the features proposed for the MVP. 

![Main company structure](./main_company_structure.jpg)

While the main goal for it was the user being able to purchase a product, quite obvious indeed, there were too many dependencies with other services to accomplish this simple, at first sight, MVP. 

Part of the product and orders information came from another team’s domain, the Integrations team, I will call it team _In_, I would have called it team I (capital i) but it could be misunderstood with an l (non-capital L) or a 1 (number one). They communicated with [Swell](https://www.swell.is/) and Klopotek, an ecommerce system where we stored the product's information along with the order’s status. 

The discounts were also provided by team _In’s_, to which we had to subscribe and then calculate the final product price according to the user info and privileges before displaying it. 

To make product content like images or descriptions accessible and customizable for the client we retrieved it through [Contentful](https://www.contentful.com/), a content platform where clients were able to manage it in an easy way. 

We managed the payment with [Stripe](https://stripe.com/), a payments service, and then we communicated with team _In_ to update the order status on Swell.

The service available for the user to authenticate should be agnostic to the owner and reusable on all sub-companies. It had to be provided by another team, yet in the end, we actually developed it ourselves.

And to put the icing on the cake we also had to implement the user tracking with [Segment](https://segment.com/), a popular service to collect user events from web & mobile apps.

Here is a simple diagram of what I have been describing which might make it easier to understand. I have grouped the microservices architecture in just _Backend_ and _Frontend_ to keep it simple.

![MVP Architecture overview](./mvp_architecture_overview.jpg)
