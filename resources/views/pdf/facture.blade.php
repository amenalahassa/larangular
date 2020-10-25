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
    <script  >
        {{ file_get_contents('js/app.js') }}
    </script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">


    <!-- Styles -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

{{--    <link rel="stylesheet"  href="{{ asset('css/app.css') }}">--}}

    <style>
        {{ file_get_contents('css/app.css') }}
    </style>
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

        @-webkit-keames sk-scaleout {
            0% { -webkit-transform: scale(0) }
            100% {
                -webkit-transform: scale(1.0);
                opacity: 0;
            }
        }

        @keames sk-scaleout {
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

        <main class=' main-content bgc-grey-100 '>

               <div id='row mainContent ' class="header">
                   <div class="col-md-12 about-ent">
                       <div class="bgc-white p-20 mB-20">
                           <table class="about-ent-table">
                               <tbody>
                               <tr>
                                   <td  >
                                       <img class="about-ent-logo" alt="" src="data:image/jpg;base64,{{ base64_encode(@file_get_contents(asset( $commande->profile_photo_path !== null ? 'storage/public/'. $commande->profile_photo_path : 'images/larangular.png'))) }}"/>
                                       <h4 class="about-ent-name" >{{ $commande->user->name}}</h4>
                                       <h6 > IFU {{ $commande->user->ifu}}</h6>
                                   </td>
                               </tr>
                               </tbody>
                           </table>
                       </div>
                   </div>
                   <div class="col-md-12 about-fac">
                       <div class="bgc-white p-20 mB-20">
                           <table class="about-fac-table ">
                               <tbody>
                               <tr>
                                   <td class="about-fac-clt">
                                       <h4>{{$commande->client->name}}</h4>
                                       <h6>{{$commande->adr}}</h6>
                                       <h6>{{$commande->tel}}</h6>
                                   </td>
                                   <td class="about-fac-this">
                                       <h4>{{$commande->ref}}</h4>
                                       <h6>{{ formatDateFrench(explode(" ", $commande->created_at)[0]) }} à {{ explode(" ", $commande->created_at)[1] }}</h6>
                                       <h6>{{ $commande->user->tel}}</h6>
                                       <h6>{{ $commande->user->adr}}</h6>
                                       <h6>{{ $commande->user->email}}</h6>
                                   </td>
                               </tr>
                               </tbody>
                           </table>
                       </div>
                   </div>
               </div>
               <div id='mainContent' class="data-table">
                   <div class="col-md-12">
                       <div class="bgc-white p-20 mB-20">
                           <table class="table table-bordered ">
                               <thead class="thead-dark">
                               <tr>
                                   <th scope="col">Article(s)</th>
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
                                       <td>{{ $product->prix . " " . $commande->user->devise}}  </td>
                                       <td>{{$product->qte * $product->prix . " " . $commande->user->devise }}</td>
                                   </tr>
                               @endforeach
                               <tr>
                                   <td colspan="3">Sous-Total</td>
                                   <td>{{ $commande->ssTotal() . " " . $commande->user->devise}}</td>
                               </tr>
                               <tr>
                                   <td colspan="3">Taux d'imposition</td>
                                   <td>{{$commande->user->tva . "%"}}</td>
                               </tr>
                               <tr>
                                   <td colspan="3">TVA</td>
                                   <td>{{ $commande->tva() . " " . $commande->user->devise }}</td>
                               </tr>
                               <tr>
                                   <td colspan="3">Net à payer</td>
                                   <td>{{ $commande->ssTotal() + $commande->tva() . " " . $commande->user->devise }}</td>
                               </tr>
                               <tr>
                                   <td colspan="3">Montant Espèce</td>
                                   <td>{{ $commande->monnaie . " " . $commande->user->devise}}</td>
                               </tr>
                               @if($commande->monnaie - ($commande->ssTotal() + $commande->tva()) > 0)
                                   <tr>
                                       <td colspan="3">Monnaie Rendu</td>
                                       <td>{{ $commande->monnaie - ($commande->ssTotal() + $commande->tva()) . " " . $commande->user->devise }}</td>
                                   </tr>
                               @else
                                   <tr>
                                       <td colspan="3">Monnaie dû par le client</td>
                                       <td>{{ abs($commande->monnaie - ($commande->ssTotal() + $commande->tva()) ) . " " . $commande->user->devise }}</td>
                                   </tr>
                               @endif
                               </tbody>
                           </table>
                       </div>
                   </div>
               </div>
               <div id='mainContent' class="footer">
                   <div class="col-md-12">
                       <div class="bgc-white p-20 mB-20">
                           <div>
                               {!!QrCode::size(50)->backgroundColor(255,255,204)->style('round')->generate($commande->ref); !!}
                           </div>
                           <p class="merci">Merci de nous avoir fait confiance. À bientôt.</p>
                       </div>
                   </div>
               </div>
        </main>
</body>
</html>
