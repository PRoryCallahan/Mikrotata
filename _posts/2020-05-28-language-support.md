---
layout: post
title: A sample post outlining language support
date: 2020-05-28 20:00:00
author: Your Name
summary: We'll use this post to review Mikrotata's embedded Alpheios support...
---

## Greek Fonts

Mikrotata comes with New Athena Unicode in its `assets` folder and any text with `lang="grc"` will be displayed in this open-source font sponsored by the [Society for Classical Studies](https://classicalstudies.org/publications-and-research/nau-download). If you prefer to add your own Greek font, go to `css/custom/includes/_language.scss` and reference that font in `font-family`, not forgetting to update your source as well. For those using Alpheios to work with Arabic and other non-Latin alphabets, you might also use the same file to add preferred secondary fonts for those languages.

## Alpheios

Alpheios is installed on all pages using the `portfolio` layout. As with adding any script to a page, it adds a little to the load time. Confining it only to a layout where you would be displaying long-form text, you don't lose time loading blog posts and other pages where readers aren't looking to parse text. Still, Alpheios runs pretty fast compared to most scripts and if you want to add Alpheios functionality to your blog posts, you only need to go to `post.html` in your `_layouts` folder and add the liquid tag to include `portfolio.html` directly below your include of `head.html`.

**Essential:** in `_includes.portfolio.html` change clientId to `yourURL`

For more on embedding Alpheios and other features, see their [exhaustive list of video tutorials](https://alpheios.net/pages/tutorials/) outlining all the many things you can do with Alpheios in your site.

### Links to Alpheios

While any file using the `portfolio` layout will have Alpheios enabled for the page, you will still need to wrap your text inside a `div` marked with `alpheios-enabled` in its class. That is, `<div class="alpheios-enabled">your text</div>`.

### Disable Alpheios in Section

Hypothetically, you might have a very large section of text and inside that large text you have a small section of comments that you want ignored by Alpehios. Simply add an attribute of
`data-alpheios-ignore="all"` to that section.

### Designating target language

The table below outlines the ISO codes used in setting target language for a section. In either a `<div>` or `<span>`, you can designate this by adding `lang=` and then the ISO code.

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Language</th>
      <th scope="col">ISO Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Latin</td>
      <td>lat</td>
    <tr>
    <tr>
      <td>Ancient Greek</td>
      <td>grc</td>
    <tr>
    <tr>
      <td>Classical Arabic</td>
      <td>ara</td>
    <tr>
    <tr>
      <td>Persian</td>
      <td>per</td>
    <tr>
    <tr>
      <td>Ancient Ethiopic</td>
      <td>gez</td>
    <tr>
