from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from articles.models import Article
from .serializers import ArticleSerializer

# Create your views here.

@api_view(["GET"])
def show_articles(request):
    #data = {"name" : "Clifford Silindana", "age" : 24, "profession" : "Developer, Entrepreneur, Investor"}
    data = Article.objects.all()
    serialized_data = ArticleSerializer(data, many = True)
    return Response(serialized_data.data)

@api_view(["GET"])
def show_article(request, id):
    data = Article.objects.get(pk = id)
    serialized_data = ArticleSerializer(data, many = False)
    return Response(serialized_data.data)

@api_view(["POST"])
def create_article(request):
    serialized_data = ArticleSerializer(data = request.data)

    if serialized_data.is_valid():
        serialized_data.save()
        return Response(serialized_data.data)

@api_view(["PUT"])
def update_article(request, id):
    article = Article.objects.get(pk = id)
    data = request.data
    serialized_data = ArticleSerializer(instance = article, data = data)

    if serialized_data.is_valid():
        serialized_data.save()
    return Response(serialized_data.data)

@api_view(["DELETE"])
def delete_article(request, id):
    data = Article.objects.get(pk = id)
    data.delete()
    return Response("Article was deleted")
    
    