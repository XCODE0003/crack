<?php

namespace App\Http\Middleware;

use Closure;
use Inertia\Inertia;
use App\Models\Category;

class ShareCategories
{
    public function handle($request, Closure $next)
    {
        Inertia::share('categories', function () {
            return Category::all();
        });

        return $next($request);
    }
}
