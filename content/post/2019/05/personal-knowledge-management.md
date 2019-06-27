---
title: "Personal Knowledge Management"
date: 2019-05-09T09:28:37-07:00
draft: false
---

* What the hell am I looking for in a product? 
  * Will I ever be satisfied?
* Concepts and Requirements
  * Some of these I'm pretty sure are necessary. Others feel like they would be beneficial, but in a less well-defined sort of way.

# A review of my personal usage

# Ideas and Attempts

  * [The Memex](https://en.wikipedia.org/wiki/Memex)
    * [As We May Think](https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/)
  * The Personal Wiki
  * "The Brain"
  * Evernote
  * Zotero

# ADHD and Context Switching

I think a lot about what I'm forgetting.

I have struggled with focus all my life. I have ADHD, and I grew up in a pretty high-performance environment. I've mellowed a lot with age, but when I was younger I had a really hard time focusing my attention on anything that I wasn't super invested in.

I could lose hours reading a book while I had a homework assignment due the next day. Eventually it got bad enough that my mom made me stay at the dinner table until my homework was finished just to make sure I did it. I wasn't avoiding it because I was afraid of it, I think focusing on it was just physically painful for me. 

I'm not alone. I think a lot of people have trouble with the cost of context switching.

I want a tool which would enable users to intentionally direct the flow of personal information relevant to them. I want a unified application for quickly capturing thoughts and oughts, scheduling things, capturing articles and web pages for a read queue, saving citations and media, writing notes on citations and media. I also want the system to allow the user to relate those media and notes to concepts and research questions, and to relate those concepts and research questions to one-another in a way which expands the user's capacity for clear, structured thought. So far I have a few candidates for that tool among available software offerings, but all those candidates just fall a little short, which means I need to introduce more specialized tools to make up for it.

# Features

* Consistent keyboard shortcuts
* App should be totally navigable with keyboard
* Ability to quickly capture notes from the OS
* Ability to quickly capture resources from the browser (extension)
* Ability to store structured metadata about sources (citations, web pages, etc.)

# What is the best way to archive sources? Do we even want to?

# Comparison of Comercially-Available (Fragmented) Personal-Information-Management Software

## Evernote

Features

* Category-style hierarchical note organization (notebooks)
* Global tags

Advantages of Evernote

* Robust tag system

Disadvantages of Evernote

* No way to use Vim-style keybindings.
* Keyboard-only focus shifting between lists and notes has inconsistent and sometimes unclear keybindings.

## Notion

* Two main concepts: Pages and Databases
* Every row in a database is a page, and the user can decide what specific properties they want on that page.
* Each Database can be viewed in a variety of ways - as a kanban board, for example, or as a simple list of links, or even as a calendar (since you can assign dates to the notes in a database).
* Some databases have tags, but this just means that the tag is a property on the database like any other. 
* All properties of databases are local to that database. So, if you have multiple to-do notes or lists across Notion, there's not really a natural way to look at them all at once. There's no global tagging mechanism, either, since tags are properties of database notes, and database note properties are local to that database, not global to the workspace.
* Of the available options, Notion is one of my favorites.

## Org-Mode

Advantages

* Extremely robust full solution
* Huge variety of export formats

Disadvantages

* Zero mobile functionality
* Zero built-in quick-capture from outside the app (you'd need to write a shell script or something)

## Markdown

Advantages

* Best portability
* Vim editing experience

## Zotero

Organizational Features

* Hierarchical categories (global)
* Tags (global)

Advantages

* Browser extension provides great capacity for saving all kinds of Sources. It'll even automatically download the PDF of an academic article, AND create a citation with all the metadata, if you use the extension on an article page on a mainstream article database like Google Scholar or Elsevier.

Disadvantages

* Inflexible schema
* Lackluster UI

## Pocket

https://app.getpocket.com/

* Maintained by Mozilla
* Simple interface
* Wonderful reading experience
* Single-tasker

## Feedly

https://feedly.com/

* Excellent RSS reader
* Great source of input
* Limited to 100 RSS feeds on the free tier 😢
* Fine reading experience
* Premium features seem to be the best ones

## "The Brain"

https://www.thebrain.com/

* The UI is a little clunky
* The animations seem to slow down at a certain "brain" size
