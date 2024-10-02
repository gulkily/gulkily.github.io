---
layout: default
title: Sitemap
---
# Sitemap

## Pages

<ul>
  {% for page in site.pages %}
    {% if page.title %}
      <li><a href="{{ page.url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

## Blog Posts

<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}</li>
  {% endfor %}
</ul>
