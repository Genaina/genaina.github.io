---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
    layout: categoria
    collapse: true
    id: student
    title: Students
---
{% for period in site.data.students %}
## {{period.period}}
{% for category in period.categories %}
### {{category.title}}
{% for member in category.members %}
- {{member.name}}
{% endfor %}
{% endfor %}
{% endfor %}

