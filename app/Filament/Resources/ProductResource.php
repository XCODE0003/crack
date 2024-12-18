<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-building-storefront';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->required(),

                Forms\Components\RichEditor::make('description')
                    ->required(),


                Forms\Components\FileUpload::make('image')
                    ->required()
                    ->image(),
                Forms\Components\FileUpload::make('big_image')
                    ->required()
                    ->image(),

                Forms\Components\Select::make('category_id')
                    ->relationship('category', 'name')
                    ->required(),
                Forms\Components\Toggle::make('is_full_image')
                    ->required(),
                Forms\Components\Repeater::make('specifications')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required(),
                        Forms\Components\TextInput::make('value')
                            ->required(),

                    ]),
                Forms\Components\Repeater::make('slug')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required(),
                        Forms\Components\ColorPicker::make('color')
                            ->required(),

                    ]),
                Forms\Components\TextInput::make('download_file')
                    ->required(),
                Forms\Components\TextInput::make('download_link')
                    ->required(),
                Forms\Components\Textarea::make('seo_code'),
                Forms\Components\TextInput::make('alt_image'),
                Forms\Components\TextInput::make('size_file'),
                Forms\Components\TextInput::make('win_r_link')
                    ->required(),




            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title'),
                Tables\Columns\TextColumn::make('description'),
                Tables\Columns\ImageColumn::make('image'),
                Tables\Columns\ImageColumn::make('big_image'),
                Tables\Columns\TextColumn::make('category.name'),
                Tables\Columns\ToggleColumn::make('is_full_image'),

            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
