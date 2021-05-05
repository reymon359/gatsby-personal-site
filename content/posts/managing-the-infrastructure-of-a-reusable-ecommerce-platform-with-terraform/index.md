---
id: 'managing-the-infrastructure-of-a-reusable-ecommerce-platform-with-terraform'
title: 'Managing the infrastructure of a reusable ecommerce platform with Terraform'
description: 'Advice to manage the infrastructure of an ecommerce platform in Azure with Terraform.'
date: '2021-05-01'
author: 'Ramón Morcillo'
tags: ['Software Development', 'CICD', 'DevOps', 'Ecommerce', 'Terraform']
published: true
commentsUrl: https://github.com/reymon359/gatsby-personal-site/issues/460
featuredImage: './assets/denys-nevozhai-Zeu57mprpaI-unsplash.jpeg'
type: 'post'
url: 'none'
---

Setting up and maintaining the infrastructure for a [reusable ecommerce platform](https://ramonmorcillo.com/developing-a-reusable-ecommerce-platform/) with a microservice architecture is not an easy task. You have to provide every service with resources, keep track of them and update them when needed.

We use [Azure](https://azure.microsoft.com/en-us/) as our cloud provider to manage all those resources. **Every service uses different resources related to the business logic they handle. **Some of them work with a persistence layer and use resources like [Azure Cosmos DB](https://azure.microsoft.com/en-us/services/cosmos-db/) or [Azure Database for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql/) databases. Others provide an API to search among a catalog of products with [Azure Cognitive Search](https://azure.microsoft.com/en-us/services/search/).

And how do you keep track of all the resources that are being used?

Here is where [Terraform](https://www.terraform.io/) comes in handy.

## What is Terraform


