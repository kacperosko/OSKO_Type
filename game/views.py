from django.shortcuts import render
from django.template import RequestContext
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django import template
from django.urls import reverse
from django.views.generic import View
from .models import Text
import random
# Create your views here.
def index(request):
    context = {'segment': 'index'}

    html_template = loader.get_template('home/index.html')
    return HttpResponse(html_template.render(context, request))
    
def pages(request):
    context = {}
    try:
        load_template = request.path.split('/')[-1]

        if load_template == 'admin':
            return HttpResponseRedirect(reverse('admin:index'))
        context['segment'] = load_template

        html_template = loader.get_template('home/' + load_template)
        return HttpResponse(html_template.render(context, request))

    except template.TemplateDoesNotExist:
        try:
            load_template_2 = request.path.split('/')[-1]
            context['segment'] = load_template_2
            html_template = loader.get_template('home/' + load_template_2 + '.html')
            print(html_template)
            return HttpResponse(html_template.render(context, request))
        except:
            pass

        html_template = loader.get_template('home/page-404.html')
        return HttpResponse(html_template.render(context, request))

    except:
        html_template = loader.get_template('home/page-500.html')
        return HttpResponse(html_template.render(context, request))

class Game(View):
    def get(self, request):

        texts = Text.objects.all()

        text = random.choice([t.content for t in texts])
        # text = "Jestem Kacper"
        text  = text.split(" ")
        main_text = []
        for word in text:
            main_text.append(word)
            if text.index(word) == len(text)-1:
                pass
            else:
                main_text.append(" ")
        print(len(main_text))
        return render(request, 'home/game.html', {'text': main_text, 'n': range(len(main_text)), 'count':len(main_text)})
