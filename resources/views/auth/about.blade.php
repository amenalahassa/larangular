@extends('auth.layout')

@section('css')
    <link rel="stylesheet" href="{{ asset('css/component.css')}}">
@endsection

@section('main')

    <div class="peers ai-s fxw-nw h-100vh">
        <div class=" col-md-6 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r " style=''>
            <div class="bgc-white ">
                <h3 class="c-grey-900">A propos de {{ Auth::user()->name }}</h3>
                <div class="mT-30">
                    <form method="POST" action="{{ route('about.user') }}"  enctype=multipart/form-data >
                    @csrf
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputTel">Tel</label>
                                <input type="tel" pattern="^[0-9-+\s]*$" name="tel" class="form-control" id="inputTel" placeholder="+229 66666666" required>
                                @error('tel')
                                    <span style="display: block; margin: 10px 10px;" class="alert alert-warning" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputAdr">Adresse</label>
                                <input type="text" name="adr" class="form-control" id="inputAdr" placeholder="Gbegamey Rue 2099" required>
                                @error('adr')
                                <span style="display: block; margin: 10px 10px;" class="alert alert-warning" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="inputIMG">Photo de profl</label>
                                <input type="file"  style="display: none"  accept="image/*"   name="photo" id="file-2" class="inputfile inputfile-2" data-multiple-caption="{count} files selected" required />
                                <label style="display: block" for="file-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> <span>Choisir une image&hellip;</span></label>
                                @error('photo')
                                <span style="display: block; margin: 10px 10px;" class="alert alert-warning" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputTVA">Taux de la TVA (en %)</label>
                                <input type="number" name="tva" class="form-control" id="inputTVA" required min="1" value="18">
                                @error('tva')
                                <span class="alert alert-warning" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputDev">Devise</label>
                                <input type="text" name="devise" class="form-control" id="inputDev" required placeholder="$ ou USD">
                                @error('devise')
                                <span style="display: block; margin: 10px 10px;" class="alert alert-warning" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-2">
                                <label for="inputRef">Identifiant</label>
                                <input type="text" name="ref" class="form-control" placeholder="BME" pattern="[A-Za-z]{3}" id="inputRef" maxlength="3" minlength="3"  size="3" required>
                            </div>
                            @error('ref')
                            <span style="display: block; margin: 10px 10px;" class="alert alert-warning" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                            <p>*L'identifiant est un ensemble de trois lettres qui identifie de maniere unique vos factures. Il doit pour ce faire etre unique.</p>
                            <p>Ex: Si votre entreprise s'appelle Dina, vous aurez FAC/DIN/2020-10-02/0004 avec DIN pour DINA.</p>
                        </div>
                        <button type="submit" class="btn btn-primary">Continuer</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-6 peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style='min-width: 320px; background-image: url("images/bg.jpg")'>
            <div class="pos-a centerXY">
                <div class="bgc-white bdrs-50p pos-r" style='width: 120px; height: 120px;'>
                    <img class="pos-a centerXY" src="{{ asset('images/logo.png') }}" alt="">
                </div>
            </div>
        </div>
    </div>


@endsection

@section('js')
    <script src="{{ asset('js/custom-file-input.js') }}"></script>
@endsection
