<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Client;
use App\Models\Commande;
use App\Models\Product;
use Illuminate\Http\Request;

class FactureController extends Controller
{
    public function index ()
    {
        return view('pages.welcome');
    }


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

        $cmd = Commande::create([
           'client_id' => $cmd_client,
           'tel' => $client['tel'],
           'adr' => $client['adresse'],
           'monnaie' => $client['monnaie'],
            'ss-total' => $total,
            'tva' => $this->tva($total)
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
        return ($total * 18) / 100;
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
