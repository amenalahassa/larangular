@extends('pages.layout')

@section('main')

    @verbatim

        <la-facture-liste></la-facture-liste>

    @endverbatim

@endsection


@section('js')

    <script src="{{ asset('angular/dist/runtime.js') }}" defer></script>
    <script src="{{ asset('angular/dist/polyfills.js') }}" defer></script>
    <script src="{{ asset('angular/dist/styles.js') }}" defer></script>
    <script src="{{ asset('angular/dist/vendor.js') }}" defer></script>
    <script src="{{ asset('angular/dist/main.js') }}" defer></script>

@endsection
