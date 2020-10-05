@extends('pages.layout')


@section('css')
    <link rel="stylesheet" href="{{ asset('css/app.css')}}">
@endsection

@section('main')

    <div class="masonry-item bd p-20">
        <div class="profil-img-div">
            <div>
                <img class=""  src="{{ asset(Auth::user()->img !== "" ? 'storage/'. Auth::user()->img : 'images/larangular.png') }}" alt="">
                <div class="peer profil-img-edit ">
                    <a href="" class="btn btn-danger card-icon bdrs-50p p-15 lh-0">
                        <i class="fa fa-edit"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="row gap-20">
            <div class='col-md-3'>
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Nom de l'entreprise</h6>
                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer card-value peer-greed">
                                <p>{{ Auth::user()->name }}</p>
                            </div>
                            <div class="peer">
                                <a href="" class="btn btn-danger card-icon bdrs-50p p-15 lh-0">
                                    <i class="fa fa-edit"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='col-md-3'>
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Adresse</h6>
                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer card-value peer-greed">
                                <p>{{ Auth::user()->adr }}</p>
                            </div>
                            <div class="peer">
                                <a href="" class="btn btn-danger card-icon bdrs-50p p-15 lh-0">
                                    <i class="fa fa-edit"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='col-md-3'>
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Email</h6>
                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer card-value peer-greed">
                                <p>{{ Auth::user()->email }}</p>
                            </div>
                            <div class="peer">
                                <a href="" class="btn btn-danger card-icon bdrs-50p p-15 lh-0">
                                    <i class="fa fa-edit"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='col-md-3'>
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Tel</h6>
                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer card-value peer-greed">
                                <p>{{ Auth::user()->tel }}</p>
                            </div>
                            <div class="peer">
                                <a href="" class="btn btn-danger card-icon bdrs-50p p-15 lh-0">
                                    <i class="fa fa-edit"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="divider-profil">
        <div class="row gap-20">
            <div class='col-md-3'>
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Devise</h6>
                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer card-value peer-greed">
                                <p>{{ Auth::user()->devise }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='col-md-3'>
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Tva</h6>
                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer card-value peer-greed">
                                <p>{{ Auth::user()->tva . "%" }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='col-md-3'>
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Identifiant des factures</h6>
                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer card-value peer-greed">
                                <p>{{ Auth::user()->ref }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='col-md-3'>
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Nombre de factures delivrées</h6>
                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer card-value peer-greed">
                                <p>{{ Auth::user()->facture->count() }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row gap-20">
            <div class='col-md-3'>
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Nombre d'articles vendus</h6>
                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer card-value peer-greed">
                                <p>{{ Auth::user()->totalArticles()}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='col-md-3'>
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Chiffre d'affaire TTC</h6>
                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer card-value peer-greed">
                                <p>{{ Auth::user()->totalFactureCA() . " " . Auth::user()->devise}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='col-md-3'>
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">TVA collectées</h6>
                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer card-value peer-greed">
                                <p>{{ (Auth::user()->totalFactureCA() - Auth::user()->totalFactureCAHT() ) . " " . Auth::user()->devise }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='col-md-3'>
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Total dû par les clients</h6>
                    </div>
                    <div class="layer w-100">
                        <div class="peers ai-sb fxw-nw">
                            <div class="peer card-value peer-greed">
                                <p>{{ Auth::user()->totalDu() . " " . Auth::user()->devise }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection


