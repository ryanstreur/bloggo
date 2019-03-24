---
title: "In-Dev Features"
date: 2017-12-21T21:58:12-08:00
lastmod: 2017-12-24T14:56:00-06:00
draft: true
BackgroundImageUrl: "/images/coast.jpg"
BackgroundY: "50%"
---

This is a place both for ideas for new features and research / speculation about how they might be implemented.

# Ideas

* svg which looks like a stylized version of the view of the earth from the moon, animated to simulate the rotation of both bodies, complete with rotation of the stars in the sky
* graphs, duh
* Non-garbage general styles
* Add lastmod to general information about each page
* better typography, font-sizes, spacing
    * So far I've just made the font bigger, but it's a start.
* Figure out how to float the damn footer at the bottom of the damn page. I've spent about ten minutes on it, but I was so infuriated that I couldn't do such a simple thing that I rage quit. For now I'll just try to make sure any page I publish has a lot of content, so that hopefully it will fill up the vertical space in any given viewport. 
* Star-Wars input field
* Programatically pull article reading data from IFTTT-populated google sheet

# TODO

* Only use google analytics when serving in production, not in the local environment. 
    * So far I'm just commenting it out and not checking that comment-out job in, but it's a start.
* Make sure the styles load faster to avoid the flash of the unstyled page on browsers which don't have my site cached.
* Accessibility - maybe run chrome's auditor
* Optimize my images for viewports of different sizes - ship smaller images for smaller viewports.
* Add pages for taxonomies - tags, categories, etc.
* Configure Deployment Process on AWS instead of DigitalOcean, just to learn it, as well as to see if I can set it up to deploy automatically based on pushing to github.

# DONE

* Configure it for hero elements and banner images and such. 
