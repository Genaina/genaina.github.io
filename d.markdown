---
layout: categoria
id: artifacts
collapse: true
title: Artifacts
---
{% for artifact in site.data.artifacts %}
- <a href="{{artifact.link}}">{{artifact.title}}</a>
{% endfor %}
