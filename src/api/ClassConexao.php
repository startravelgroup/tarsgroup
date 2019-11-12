<?php

abstract class ClassConexao {
    protected function conectarDB(){
        try{
            $con=new PDO("mysql:host=localhost;dbname=star_travel", "root", "");
            return $con;
        }catch(PDOException $Erro){
            return $Erro->getMessage();
        }
    }
}