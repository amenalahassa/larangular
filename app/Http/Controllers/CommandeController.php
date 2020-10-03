<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Client;
use App\Models\Commande;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommandeController extends Controller
{

    public function findArticle (Request $request)
    {
        $articles = Article::where('libelle', 'like',  '%'.$request->data['item'].'%')->get();
        return response()->json(['data' => $articles], 200);
    }


    public function findClient (Request $request)
    {
        $clients = Client::where('name', 'like',  '%'.$request->data['item'].'%')->get();
        return response()->json(['data' => $clients], 200);
    }


    public function saveCmd (Request $request)
    {
        $client = $request->data['item']['client'];
        $products = $request->data['item']['products'];

        $cmd_client = null;

        $l_client = Client::where('name', $client['name'])->get();

        if(count($l_client) > 0) {
            $cmd_client = $l_client[0]->id;
        }
        else
        {
            $l_client = Client::create([
                'name' => ucfirst($client['name'])
            ]);
            $cmd_client = $l_client->id;
        }

        $total = $this->ssTotal($products);

        $count = Commande::where('created_at', 'like', date("Y-m-d")."%")->get()->count();

        $cmd = Commande::create([
            'client_id' => $cmd_client,
            'user_id' => Auth::id(),
            'tel' => $client['tel'],
            'adr' => $client['adresse'],
            'monnaie' => $client['monnaie'],
            'ssTotal' => $total,
            'tva' => $this->tva($total),
            'ref' => 'FAC/'. Auth::user()->ref . '/' . date("Y-m-d") . '/' . str_pad($count + 1, 4, '0', STR_PAD_LEFT),
        ]);
        $this->createProduct($products, $cmd->id);

        return response()->json(['data'=>$cmd->id], 200);
    }


    private function ssTotal ($products)
    {
        $sstotal = 0;
        foreach ($products as $product)
        {
            $sstotal += $product['qte'] * $product['prix'];
        }
        return $sstotal;
    }

    private function tva ($total)
    {
        return ($total * Auth::user()->tva) / 100;
    }

    private function createProduct ($products, $cmd_id)
    {
        foreach ($products as $product)
        {
            $article = Article::where('libelle', $product['lib'])->get();
            $id = null;

            if(count($article) > 0) {
                $id = $article[0]->id;
            }
            else
            {
                $article = Article::create([
                    'libelle' => ucfirst($product['lib']),
                ]);
                $id = $article->id;
            }

            Product::create([
                'commande_id' => $cmd_id,
                'article_id' => $id,
                'prix' => $product['prix'],
                'qte' => $product['qte']
            ]);
        }
    }


}
