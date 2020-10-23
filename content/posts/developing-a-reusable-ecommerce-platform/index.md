---
id: 'developing-a-reusable-ecommerce-platform'
title: 'Developing a reusable ecommerce platform'
description: 'Process and lessons learned from the development of a reusable ecommerce platform.'
date: '23/10/2020'
author: 'Ramón Morcillo'
categories: ['??']
tags: ['??']
published: true
commentsUrl: https://github.com/reymon359/gatsby-personal-site/issues/??
featuredImage: ''
thumbnail: ''
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
