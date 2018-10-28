---
title: "A Funny Thing About Lisp"
date: 2018-10-20T19:13:25-07:00
draft: true
---

I came across this passage in the lovely article about Lisp: [How Lisp Became God's Own Programming Language](https://twobithistory.org/2018/10/14/lisp.html), on Two-Bit History (I just found out about them!).

> The biggest change involved Lisp’s syntax. McCarthy had originally intended for the language to include something called “M-expressions,” which would be a layer of syntactic sugar that made Lisp’s syntax resemble Fortran’s. Though M-expressions could be translated to S-expressions—the basic lists enclosed by parentheses that Lisp is known for— S-expressions were really a low-level representation meant for the machine. The only problem was that McCarthy had been denoting M-expressions using square brackets, and the IBM 026 keypunch that McCarthy’s team used at MIT did not have any square bracket keys on its keyboard. So the Lisp team stuck with S-expressions, using them to represent not just lists of data but function applications too.

So the particular kind of keyboard was the reason for Lisp's peculiar decision to use all parentheses all the time, a decision lauded by some and lamented by others.
