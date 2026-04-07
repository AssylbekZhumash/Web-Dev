from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = list(Product.objects.values(
        'id', 'name', 'price', 'description', 'count', 'is_active', 'category_id'
    ))
    return JsonResponse(products, safe=False)

def product_detail(request, id):
    try:
        product = Product.objects.values(
            'id', 'name', 'price', 'description', 'count', 'is_active', 'category_id'
        ).get(id=id)
        return JsonResponse(product)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

def category_list(request):
    categories = list(Category.objects.values('id', 'name'))
    return JsonResponse(categories, safe=False)

def category_detail(request, id):
    try:
        category = Category.objects.values('id', 'name').get(id=id)
        return JsonResponse(category)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

def category_products(request, id):
    products = list(Product.objects.filter(category_id=id).values(
        'id', 'name', 'price', 'description', 'count', 'is_active', 'category_id'
    ))