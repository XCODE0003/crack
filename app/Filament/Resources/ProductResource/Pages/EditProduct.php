<?php

namespace App\Filament\Resources\ProductResource\Pages;

use App\Filament\Resources\ProductResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditProduct extends EditRecord
{
    protected static string $resource = ProductResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    // public function afterSave(): void
    // {
    //     $data = $this->data;
    //     $product = $this->record;

    //     if (isset($data['download_file'])) {
    //         $file = $data['download_file'];
    //         $path = storage_path('app/public/' . reset($file));
    //         $file_size = filesize($path);

    //         if ($file_size >= 1048576) {
    //             $formatted_size = number_format($file_size / 1048576, 2) . ' MB';
    //         } else {
    //             $formatted_size = number_format($file_size / 1024, 2) . ' KB';
    //         }

    //         $product->size_file = $formatted_size;
    //         $product->save();
    //     }
    // }
}