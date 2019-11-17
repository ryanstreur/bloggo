---
title: "Dev Learning"
date: 2019-05-16T14:47:14-07:00
draft: false
toc: true
---

## Rationale - Why would I create this page?

I am trying to figure out how to write good software and what it means to be an effective software developer. There are others like me trying to ask the same questions. I want a place to organize and structure my thoughts. I also feel like these thoughts and resources may be useful to others, even if I don't have the time to structure them more thoroughly.

Of course there's an element of vulnerability in making these ideas public. Someone could read them and find my ability lacking. What they couldn't do is read them and find my curiosity lacking, so I'm fine with it.

## Software Development

- Question: What are the most effective patterns for growing software? What about for growing software organizations?
  - When creating a new project with limited resources (such that you may be better served by the lower complexity of a monolith) how can you write it to facilitate later separating functionality into separate services?
- Legacy code and technical debt
  - [Technical Debt, Martin Fowler, 2019](https://martinfowler.com/bliki/TechnicalDebt.html)
  - Working Effectively With Legacy Code, by Michael Feathers

### General Resources

- [Github Repo of Free Programming Ebooks](https://github.com/EbookFoundation/free-programming-books/blob/master/free-programming-books.md)
- [Repo: Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)

#### Books

- [A Philosophy of Software Design](https://www.amazon.com/Philosophy-Software-Design-John-Ousterhout/dp/1732102201)
- [Code Complete](https://www.worldcat.org/title/code-complete-a-practical-handbook-of-software-construction/oclc/841014254&referer=brief_results)
- [The Pragmatic Programmer](https://pragprog.com/)
- [Working Effectively with Legacy Code](https://www.worldcat.org/title/working-effectively-with-legacy-code/oclc/859641541&referer=brief_results)

### Stacks and Languages

#### JavaScript

- [Vanilla JS](http://vanilla-js.com/)
- [JS Github Topic](https://github.com/topics/javascript)
- Books
  - [Eloquent JavaScript](http://eloquentjavascript.net/)
  - JavaScript: The Good Parts
  - [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [Awesome Node.js](https://github.com/sindresorhus/awesome-nodejs)

#### TypeScript

- [TypeScript Documentation](https://www.typescriptlang.org/docs/home.html)

#### Front-End

- [HTML Github Topic](https://github.com/topics/html)
- [CSS Github Topic](https://github.com/topics/css)
- [Front-End Checklist](https://github.com/thedaviddias/Front-End-Checklist)
- [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist)
- [Performance best practices for Firefox front-end engineers](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Performance_best_practices_for_Firefox_fe_engineers)
- [Front-End Interview Handbook](https://github.com/yangshun/front-end-interview-handbook)
- [Web Fundamentals](https://developers.google.com/web/fundamentals/)
- [dypsilon's frontend-dev bookmarks](https://github.com/dypsilon/frontend-dev-bookmarks)

##### Frameworks

- [Ember](https://emberjs.com/)
- [Angular](https://angular.io/)
- [React](https://reactjs.org/)
- [Vue](https://vuejs.org/)
- MVC Server-Side-Rendered Frameworks

#### Server-Side

## Operating Systems

### Unix

1. [Unix Wikipedia Page](https://en.wikipedia.org/wiki/Unix)

### MVC Pattern

- [MVC Wikipedia Page](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
- [ASP.NET MVC (alphabet soup!)](https://dotnet.microsoft.com/apps/aspnet/mvc)

### Microservices architecture

- What are the best ways to associate different records with one another across multiple databases / persistence models (SQL/NoSQL/whatev)

## Development Practices

<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">One of my most controversial software opinions is that your sleep quality and stress level matter far, far more than the languages you use or the practices you follow. Nothing else comes close: not type systems, not TDD, not formal methods, not ANYTHING.<br><br>Allow me to explain why.</p>&mdash; Hillel (@hillelogram) <a href="https://twitter.com/hillelogram/status/1119709859979714560?ref_src=twsrc%5Etfw">April 20, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### TDD

- Question: Does it really result in higher-quality code? Where's the research on this?

### Agile

Seems industry-standard at this point, at least for all the organizations I'm aware of.

🔗

## Tools

### Shell

- [Art of the Command Line](https://github.com/jlevy/the-art-of-command-line)
- [Awesome MacOS Command Line](https://github.com/herrbischoff/awesome-macos-command-line)

### Git

If you're not already familiar with it, Git is the standard choice for software version control. It is incredibly powerful in the right hands and an agent of chaos in the wrong ones.

- [Git Docs](https://git-scm.com/doc)
- [Git Github Topic](https://github.com/topics/git)
- [Git Tips](https://github.com/git-tips/tips)
- [5 types of Git workflows](https://buddy.works/blog/5-types-of-git-workflows)
- [Atlassian - Comparing Git Workflows](https://www.atlassian.com/git/tutorials/comparing-workflows)

### Editors

VS Code is my current editor of choice. It has enough built-in functionality, sensible defaults, and plugin support for Vim-style keybindings. It is customizable enough that I can get it to do more or less what I want, but prescriptive enough that I don't have to worry about configuring every tiny piece of it like I would with emacs or vim.

Of course, emacs and vim have the advantage that you can run them as terminal editors. That's a big advantage when you want to remote into your server and avoid a large context switch when you jump into a different editor. That said, I don't do that very often, and basic vim (versus configured vim) is usually enough to get me where I'm going in headless environments. Tags and autocompletion are a great example of this.

Emacs' big advantage is org mode. There's just nothing like it on any platform.

### IDEs

- Gripe: complex IDEs tend to get significantly slower as projects grow, costing significant amounts of time. The complexity of large software projects is not just too much for human minds. It's also too much for some purpose-built machine minds.

## UX

### Accessibility

- [Lawsuits involving web accessibility](https://www.essentialaccessibility.com/blog/web-accessibility-lawsuits/)
- https://www.w3.org/WAI/fundamentals/accessibility-intro/
- https://en.wikipedia.org/wiki/Web_accessibility
- Lighthouse
