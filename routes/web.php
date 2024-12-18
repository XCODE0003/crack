<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Category;
use App\Models\Product;
use App\Models\Slider;
use Illuminate\Http\Request;
use App\Models\Updates;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $categories = Category::with(['products' => function ($query) {
        $query->limit(4);
    }])->get();
    $sliders = Slider::all();
    return Inertia::render('main', [
        'categories' => $categories,
        'title' => 'Главная',
        'sliders' => $sliders
    ]);
});

Route::get('/category/{id}', function ($id, Request $request) {
    $category = Category::find($id);
    $currentPage = $request->get('page', 1);
    $perPage = 8;

    $allProducts = collect();
    for ($i = 1; $i <= $currentPage; $i++) {
        $products = $category->products()
            ->paginate($perPage, ['*'], 'page', $i);
        $allProducts = $allProducts->concat($products->items());
    }

    $products = new \Illuminate\Pagination\LengthAwarePaginator(
        $allProducts,
        $products->total(),
        $perPage,
        $currentPage,
        ['path' => $request->url()]
    );

    return Inertia::render('products', [
        'category' => $category,
        'products' => $products,
        'title' => $category->full_name
    ]);
});

Route::get('/updates', function () {
    $updates = Updates::all();
    return Inertia::render('updates', [
        'title' => 'Software Updates and Bug Fixes - Latest Patches and News',
        'updates' => $updates
    ]);
});
Route::get('/privacy', function () {

    return Inertia::render('privacy');
});
Route::get('/contacts', function () {
    return Inertia::render('contacts');
});
Route::get('/information', function () {
    return Inertia::render('information');
});
Route::get('/faq', function () {

    return Inertia::render('faq', [
        'title' => 'How to Install Software - FAQ for Safe Download'
    ]);
});
Route::get('/product/{id}', function ($id) {
    $product = Product::find($id);
    $category = $product->category;
    $products = Product::query()->limit(5)->inRandomOrder()->get();
    return Inertia::render('product', [
        'product' => $product,
        'category' => $category,
        'products' => $products,
        'title' => $product->title
    ]);
});
