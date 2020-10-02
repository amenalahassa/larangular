<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="/">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">


    <!-- Styles -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <style>
        #loader {
            transition: all 0.3s ease-in-out;
            opacity: 1;
            visibility: visible;
            position: fixed;
            height: 100vh;
            width: 100%;
            background: #fff;
            z-index: 90000;
        }

        #loader.fadeOut {
            opacity: 0;
            visibility: hidden;
        }

        .spinner {
            width: 40px;
            height: 40px;
            position: absolute;
            top: calc(50% - 20px);
            left: calc(50% - 20px);
            background-color: #333;
            border-radius: 100%;
            -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
            animation: sk-scaleout 1.0s infinite ease-in-out;
        }

        @-webkit-keyframes sk-scaleout {
            0% { -webkit-transform: scale(0) }
            100% {
                -webkit-transform: scale(1.0);
                opacity: 0;
            }
        }

        @keyframes sk-scaleout {
            0% {
                -webkit-transform: scale(0);
                transform: scale(0);
            } 100% {
                  -webkit-transform: scale(1.0);
                  transform: scale(1.0);
                  opacity: 0;
              }
        }
    </style>
</head>
<body class="app">


        <!-- ### $App Screen Content ### -->
        <main class='main-content bgc-grey-100'>
            <div id='mainContent'>
                <div class="col-md-12">
                    <div class="bgc-white p-20 mB-20">
                        <div class="row">
                            <h5 class="col-md-9 c-grey-900 mB-20">Listes des articles facturés</h5>
                        </div>
                        <table class="table table-bordered ">
                            <thead class="thead-dark">
                            <tr>
                                <th scope="col">Description</th>
                                <th scope="col">Quantité</th>
                                <th scope="col">Prix unitaire</th>
                                <th scope="col">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($commande->products as $product)
                                <tr >
                                    <th scope="row">{{ $product->article->libelle }}</th>
                                    <td>{{$product->qte }}</td>
                                    <td>{{ $product->prix }} fr </td>
                                    <td>{{$product->qte * $product->prix }} fr</td>
                                </tr>
                            @endforeach
                            <tr>
                                <td colspan="3">Sous-Total</td>
                                <td>{{ $commande->ssTotal() }} fr</td>
                            </tr>
                            <tr>
                                <td colspan="3">Taux d'imposition</td>
                                <td>18%</td>
                            </tr>
                            <tr>
                                <td colspan="3">TVA</td>
                                <td>{{ $commande->tva() }} fr</td>
                            </tr>
                            <tr>
                                <td colspan="3">Net à payer</td>
                                <td>{{ $commande->ssTotal() + $commande->tva() }} fr</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>


<script src="{{ asset('angular/dist/runtime.js') }}" defer></script>
<script src="{{ asset('angular/dist/polyfills.js') }}" defer></script>
<script src="{{ asset('angular/dist/styles.js') }}" defer></script>
<script src="{{ asset('angular/dist/vendor.js') }}" defer></script>
<script src="{{ asset('angular/dist/main.js') }}" defer></script>

</body>
</html>
