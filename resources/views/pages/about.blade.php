@extends('pages.layout')


@section('css')
    <link rel="stylesheet" href="{{ asset('css/app.css')}}">
@endsection

@section('main')

    @verbatim

        <la-profil id = "main-app"></la-profil>

    @endverbatim


@endsection

@section('js')

    <script src="{{ asset('angular/dist/runtime.js') }}" defer></script>
    <script src="{{ asset('angular/dist/polyfills.js') }}" defer></script>
    <script src="{{ asset('angular/dist/styles.js') }}" defer></script>
    <script src="{{ asset('angular/dist/vendor.js') }}" defer></script>
    <script src="{{ asset('angular/dist/main.js') }}" defer></script>

@endsection



