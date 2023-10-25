# FiestR

Learn how to build apps with React and React Native.

---

## Contents

- [Overview](#overview)
- [Outline](#outline)
- [Setup](#setup)
- [Recipes](#recipes)

---

## Overview

This seminar is designed to demonstrate the essentials of building UI components with React and React Native.

The seminar begins with an introduction to React components and applications. Next, we will examine hooks, patterns, and routing. Finally, we pivot to React Native, discussing key elements of the framework for iOS applications.

Pre-Requisites: Attendees should have some experience with programming in general and working knowledge and practical experience of Modern JavaScript. Some React experience is a plus.

---

### Objectives

After this course, you will be able to:
* Understand what React is and what problem it solves
* Explore the basic architecture of a React component
* Gain deeper knowledge of React.js components and JSX
* Utilize React Hooks
* Employ React Routing to build Larger Apps
* Discuss the differences between React and React Native
* Build and deploy a non-trivial React Native application

---

### Duration

This course will be delivered in 3 days

<br/>

---

## Outline

* Introduction to React
  - The Virtual DOM
  - Creating a React App
  - Managing Component State

* Working with Components
  - Working with JSX
  - Classes vs Hooks
  - Understanding and Passing Props
  - Handling Events

* Hooks
  - Technical Architecture and Complaints
  - Useful built-in hooks
  - Simple custom hooks

* Managing State
  - Options and Tradeoffs
  - Hand-rolled State
  - Introduction to Zustand
  - Routing


* Overview: React Native
  - Introduction to React Native
  - Configuration the Environment
  - Working with Native Components

* Working with Core Native Components
  - View
  - Text
  - Image
  - ScrollView
  - TextInput
  - Navigation and Routing in React Native

* Building for iOS
  - Navigating Xcode
  - Running and Debugging the Simulator
  - Working with the Platform Module
  - Integrating Native Modules into your Application

---

## Setup

Everything works with npm and node-- any recent version should be fine.

#### Chose one of the options below. Then, to test that your setup is working:

1. Open a terminal
2. Navigate to the repository
3. Install dependencies:
   ```shell
   npm install
   ```
4. Run the project
   ```shell
   npm run dev
   ```

<!-- If everything works right, you'll see something like this:
<img src='.assets/screenshot.bazel-run.png'> -->

<br/>
<br/>

### Option 1: Github CodeSpaces

With just a free account, you can run VSCode (or some version thereof) with Docker in your browser.

#### Advantages

- Zero installation

#### Disadvantages

- Takes a _while_ to download container images
- Free version limits time an space
- It's a hassle to view artifacts-- e.g. test coverage reports

#### Steps:

1. In a browser, navigate to https://github.com/bathcat/fiestr
2. Click **Code** > **Codespaces** > **Create codespace on main**

<!-- <img src='.assets/screenshot.codespaces.0.png'>
<img src='.assets/screenshot.codespaces.1.png'> -->
<br/>
<br/>

### Option 2: Docker (with VSCode)

Docker abstracts all software requirements, and VSCode works really well with containers. Read up on [Developing Inside a Container](https://code.visualstudio.com/docs/devcontainers/containers)

#### Advantages

- Less configuration
- Repeatable environment setup
- Artifacts live on your local filesystem

#### Disadvantages

- Takes a _while_ to set up the environment
- You need Docker
- If your favorite editor _isn't_ VSCode, you'll need to play around getting that set up

#### Tools

1. [Docker](https://www.docker.com/get-started/)
2. [VSCode](https://code.visualstudio.com/)
3. [Remote Development extension pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

#### Steps

1. Clone repo
2. Open in VSCode
3. **F1** > **Dev Containers: Reopen in Container**

<!-- <img src='.assets/screenshot.reopen-in-container.png'> -->

<br/>
<br/>

### Option 3: On the Metal

There's nothing magical about this setup: it's node and npm and a couple less-important bits for debugging and code coverage. So if you don't want to mess with containers, that's ok too.

#### Advantages

- Everything is local
- No messing with containers
- Use your favorite IDE
- No time wasted downloading container images

#### Disadvantages

- I only tested this on Windows
- Weird stuff might happen if our versions are different

#### Tools

1. [Node](https://nodejs.org/en)
2. Your favorite text editor


#### Steps

1. Clone repo
2. Open in your favorite editor

<br/>
<br/>

