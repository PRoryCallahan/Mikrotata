---
layout: post
title: A sample post outlining language support
author: Patrick Callahan
summary: We'll use this post to work out Elachista's display of multiple languages...
---
## Latin

## Greek

## Alpheios

Alpheios is installed on all pages using the `portfolio` layout. This way you don't lose time loading blog posts and other pages where readers aren't looking to parse text.

in `_includes.portfolio.html` change clientId to `yourURL`

Links to Alpheios

```
<div class="alpheios-enabled"
```

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
  </tbody>
</table>

### Disable Alpheios in Section

`data-alpheios-ignore="all"`
