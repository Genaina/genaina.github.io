---
    layout: categoria
    id: research
    collapse: true
    title: Research Projects
---
{% for project in site.data.rProjects %}
### {{project.title}}
{{project.content}}
{% endfor %}