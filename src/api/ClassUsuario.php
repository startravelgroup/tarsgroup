<?php
include ("ClassConexao.php");

class ClassUsuario extends ClassConexao{

    
    public function getUsuario(){



        $link = mysqli_connect("localhost", "root", "", "star_travel");
        $sql = "select * from client";

       
        $j=[];
        $i=[];

        $rs = mysqli_query($link, "select * from client where id = 1") or die ("Erro");

        while($l = mysqli_fetch_array($rs)){
            $j=[$i]=[
                "id"=>$l['id'],
                "login"=>$l['login'],
                "senha"=>$l['password']
            ];
            $i++;
        }

        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($j);

        // $bFetch=$this->conectarDB()->prepare("select * from usuario");
        // $bFetch->execute();

        // $j=[];
        // $i=[];

        // while($Fetch=$bFetch->fetch(PDO::FETCH_ASSOC)){
        //     $j[$i]=[
        //         "id"=>$Fetch['id'],
        //         "login"=>$Fetch['login'],
        //         "senha"=>$Fetch['senha']
        //     ];
        //     $i++;
        // }
        // header("Access-Control-Allow-Origin:*");
        // header("Content-type: application/json");

        // echo json_encode($j);
    }
}
