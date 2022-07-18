from django import template


register = template.Library()
n = 0

@register.filter(name='element')
def element(indexable, i):
    return indexable[i]


@register.filter(name='increase')
def increase():
    n+=1
    return n


