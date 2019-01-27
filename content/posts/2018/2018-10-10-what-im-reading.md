---
title: "What I'm Reading This Week"
date: 2018-10-10T08:34:12-07:00
draft: false
tags:
  - links
---

* Clara Artschwager writes for The Cut about how texting makes relationships [more complicated and distracting](https://www.thecut.com/2018/10/its-complicated-dating-without-texting.html).
* Tabarrok, Marginal Revolution, Amazon's wage hike was [not as generous](http://marginalrevolution.com/marginalrevolution/2018/10/amazon-minimum-wage.html) as they (and Sen. Sanders) claimed.
* HBR - [The Problem of Visibility for Women in Engineering, and How They Manage It](https://hbr.org/2018/10/the-problem-of-visibility-for-women-in-engineering-and-how-they-manage-it)
* CJR - [Do Journalists pay too much attention to twitter?](https://www.cjr.org/the_media_today/journalists-on-twitter-study.php)
* Cal thinks we are [spending too much time on email](http://calnewport.com/blog/2018/10/09/the-average-user-checks-email-5-6-hours-per-weekday-this-is-not-good/)
* These OregonLive contributors are [stoked about the City Club](http://www.oregonlive.com/opinion/index.ssf/2018/10/opinion_city_club_is_stepping.html)

Bonus - This is one way to write a word counter in erlang, assuming your word boundaries happen at spaces!

```erl
word_count({N, [32 | T]}) -> word_count({N + 1, T});
word_count({N, [_ | T]}) -> word_count({N, T});
word_count({N, ""}) -> N;
word_count(String) -> word_count({1, string:trim(String)}).
```
