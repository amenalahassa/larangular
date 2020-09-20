@extends('auth.layout')

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
            <h4 class="fw-300 c-grey-900 mB-40">Login</h4>
            <form method="POST" action="{{ route('login') }}">
                @csrf
                <div class="form-group">
                    <label class="text-normal text-dark">Username</label>
                    <input type="email" class="form-control" placeholder="John Doe" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                </div>
                <div class="form-group">
                    <label class="text-normal text-dark">Password</label>
                    <input type="password" class="form-control" placeholder="Password" name="password" required autocomplete="current-password">
                </div>
                <div class="form-group">
                    <div class="peers ai-c jc-sb fxw-nw">
                        <div class="peer">
                            <div class="checkbox checkbox-circle checkbox-info peers ai-c">
                                <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }} id=" remember inputCall1" class="peer">
                                <label for="inputCall1" class=" peers peer-greed js-sb ai-c">
                                    <span class="peer peer-greed">Remember Me</span>
                                </label>
                            </div>
                        </div>
                        <div class="peer">
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>


@endsection
