@extends('auth.layout')

@section('main')

    <div class="peers ai-s fxw-nw h-100vh">
        <div class="peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style='background-image: url("images/bg.jpg")'>
            <div class="pos-a centerXY">
                <div class="bgc-white bdrs-50p pos-r" style='width: 120px; height: 120px;'>
                    <img class="pos-a centerXY" src="{{ asset('images/logo.png') }}" alt="">
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style='min-width: 320px;'>
            <h4 class="fw-300 c-grey-900 mB-40">S'inscrire</h4>
            <form method="POST" action="{{ route('register') }}">
                @csrf
                <div class="form-group">
                    <label class="text-normal text-dark">Nom de votre entreprise</label>
                    <input type="text" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus class="form-control" Placeholder='Supermarché Dina'>
                    @error('name')
                    <span style="display: block; margin: 10px 10px;" class="alert alert-warning" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label class="text-normal text-dark">Email </label>
                    <input type="email" class="form-control" Placeholder='name@email.com' name="email" value="{{ old('email') }}" required autocomplete="email">
                    @error('email')
                    <span style="display: block; margin: 10px 10px;" class="alert alert-warning" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label class="text-normal text-dark">Mot de passe</label>
                    <input type="password" class="form-control" placeholder="Password" name="password" required autocomplete="new-password">
                    @error('password')
                    <span style="display: block; margin: 10px 10px;" class="alert alert-warning" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label class="text-normal text-dark">Confirmer le mot de passe</label>
                    <input type="password" name="password_confirmation" required autocomplete="new-password" class="form-control" placeholder="Password">
                </div>
                <div class="form-group">
                    <button type="submit"  class="btn btn-primary">S'inscrire</button>
                </div>
            </form>
            <div >
                Vous avez deja un compte ? <a href="{{ route('login') }}" style="margin-left: 10px"><button class="btn btn-primary">Connectez-vous</button></a>
            </div>
        </div>
    </div>


@endsection

