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

![Terraform logo by HashiCorp](./assets/hashicorp_terraform_logo.png)

[Terraform](https://www.terraform.io/) is an open-source infrastructure as code software tool developed by HashiCorp. It provides a consistent CLI workflow to manage hundreds of cloud services in configuration files. [Here](https://learn.hashicorp.com/tutorials/terraform/install-cli) is the official guide on how to install it.

Terraform is a tool that helps you manage various cloud infrastructure services coding configuration files where you can configure the ones needed. It has support for the main cloud providers out there like AWS, Azure, or GCP.

I will enumerate the main features it provides. There are plenty more, however, these are the minimum ones required to understand the tool and this article.
