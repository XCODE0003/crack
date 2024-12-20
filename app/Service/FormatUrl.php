<?php

namespace App\Service;

class FormatUrl
{
    public function format(string $url): string
    {
        // Приводим URL к нижнему регистру
        $url = mb_strtolower($url);

        // Заменяем пробелы на дефисы
        $url = str_replace(' ', '-', $url);

        // Удаляем все специальные символы
        $url = preg_replace('/[^a-z0-9\-]/', '', $url);

        // Удаляем множественные дефисы
        $url = preg_replace('/-+/', '-', $url);

        // Удаляем начальные и конечные дефисы
        $url = trim($url, '-');

        return $url;
    }
    public function unformat(string $url): string
    {
        return str_replace('-', ' ', $url);
    }
}
