from django.shortcuts import render, redirect
from django.http import HttpResponse
from myapp.models import Product
from django.contrib import messages
from rest_framework import viewsets, permissions
from myapp.serializers import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticated]



# Create your views here.
def delete(request, product_id):
    product = Product.objects.get(id=product_id)
    product.delete()
    messages.success(request, "Data delete successfully")
    return redirect("/db")

def update(request, product_id):
    if request.method == "POST":
        product = Product.objects.get(id=product_id)
        product.name = request.POST['name']
        product.price = request.POST['price']
        product.save()
        messages.success(request, "Data updated successfully")
        return redirect("/db")


    product = Product.objects.get(id=product_id)
    return render(request, "form_update.html", {"product":product})


def add(request):
    if request.method == "POST":
        name = request.POST['name']
        price = request.POST['price']

        product = Product.objects.create(name=name, price=price)
        product.save()
        messages.success(request, "Data added sucessfully")
        return redirect("/db")

    return render(request, "form_add.html")
 


def db(request):
    all_Products = Product.objects.all
    some_products = Product.objects.filter(price__gt=5000)
    return render(
        request,
        "db.html",
        {"all_products": all_Products, "some_products": some_products},
    )


def index(request):
    name = "น.ส.วิลาสินี สุตัญตี้งใจ"
    age = 21
    return render(request, "index.html", {"name": name, "age": age})


def hello(request):
    return HttpResponse("<h1>Hello</h1>")
