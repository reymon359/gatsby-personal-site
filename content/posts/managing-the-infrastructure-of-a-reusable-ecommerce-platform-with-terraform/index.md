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

### Modules

Terraform provides modules that help us **reuse our Terraform code.** Our complex infrastructure is broken into multiple modules making it more reusable and simpler to maintain.

It is very easy to convert a given Terraform configuration into modules and Terraform has its eco-system for pre-built modules.

### Resources

Resources are the _key_ element in Terraform. Each of them describes a cloud service such as a computed instance, persistence system, or DNS record.

Here is a simple example of how we would define a resource we want to use in our infrastructure:

```hcl
terraform {
  required_providers {
    food = {
      source  = "hashicorp/food"
      version = "~> 1.0.4"
    }
  }
}

resource "food_tapas" "spanish_omelet" {
  ingredient_1 = "eggs"
  ingredient_2 = "onions"
  Ingredient_3 = "potatoes"
}
```

The language used in Terraform is the _HashiCorp Configuration Language (HCL)._ In the example above we first specify the cloud provider `food`. Then define a resource of the type `food_tapas` with the name `spanish_omelet`. Inside the resource block, we have the configuration arguments which for this delicious resource are the ingredients.

### Terraform Plan

Once all the infrastructure resources have been defined a **Plan** is run. Here Terraform checks the code for syntax errors, state verification, API authentication, and then outputs a summary of the changes.

Running `terraform plan` allows you to check if the plan to be executed for such configuration is the one you were expecting before changing the infrastructure.

Here is an example of the output summary we would get when running `terraform plan` with the example resource

```shell
$ terraform plan
An execution plan has been generated and is shown below.

Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # food_tapas.spanish_omelet will be created
  + resource "food_tapas" "spanish_omelet" {
        + id                = (known after apply)
        + ingredient_1      = "eggs"
        + ingredient_2      = "onions"
        + ingredient_3      = "potatoes"
    }

Plan: 1 to add, 0 to change, 0 to destroy.
```

### Terraform Apply

Once confirmed the summary of changes are the ones wanted, we execute them with `terraform apply`.

After running it successfully the console shows this output.

```shell
 Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
```

And that is an overall view of defining and creating your infrastructure resources in an _automated_ way. All through config files **removing the manual process.** 

![Terraform resource Spanish omelet from Casa Paco, Madrid](./assets/terraform_resource_spanish_omelet_from_casa_paco_madrid.jpeg)

## How we use it

Going back to our reusable ecommerce platform. Here is how we take advantage of Terraform’s features to improve our workflow.
