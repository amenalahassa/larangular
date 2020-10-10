@extends('layouts.auth')


@section('main')


    <!-- #Main ============================ -->
    <div class="peers ai-s fxw-nw h-100vh">
        <div class="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style='background-image: url("images/bg.jpg")'>
            <div class="pos-a centerXY">
                <div class="bgc-white bdrs-50p pos-r" style='width: 120px; height: 120px;'>
                    <img class="pos-a centerXY" src="images/logo.png" alt="">
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style='min-width: 320px;'>
            <h4 class="fw-300 c-grey-900 mB-40">Connection</h4>
            <form method="POST" action="{{ route('login') }}">
                @csrf
                <div class="form-group">
                    <label class="text-normal text-dark">Email</label>
                    <input type="email" class="form-control" Placeholder='name@email.com'  name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                    @error('email')
                        <span style="display: block; margin: 10px 10px;" class="alert alert-warning" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label class="text-normal text-dark">Mot de passe</label>
                    <input type="password" class="form-control" placeholder="Password" name="password" required autocomplete="current-password">
                    @error('password')
                        <span style="display: block; margin: 10px 10px;" class="alert alert-warning" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group">
                    <div class="peers ai-c jc-sb fxw-nw">
                        <div class="peer">
                            <div class="checkbox checkbox-circle checkbox-info peers ai-c">
                                <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }} id=" remember inputCall1" class="peer">
                                <label for="inputCall1" class=" peers peer-greed js-sb ai-c">
                                    <span class="peer peer-greed">Se rappeler de moi </span>
                                </label>
                            </div>
                        </div>
                        <div style="margin-left: 20px" class="peer">
                            <button type="submit" class="btn btn-primary">Connection</button>
                        </div>
                    </div>
                </div>
            </form>
            <div style="margin-top: 160px !important;">
                Vous n'avez pas encore de compte ? <a style="display: block; margin-top: 10px" href="{{ route('register') }}"><button class="btn btn-primary">Inscrivez-vous</button></a>
            </div>
        </div>
    </div>


@endsection
