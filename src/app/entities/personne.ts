export class Personne {
    private _num: number; 
    private _nom: string; 
    private _prenom: string;

    public get num(): number {
        return this._num;
    }

    public set num(num: number) {
        this._num = num;
    }

    public get nom(): string {
        return this._nom;
    }

    public set nom(nom: string) {
        this._nom = nom;
    }

    public get prenom(): string {
        return this._prenom;
    }

    public set prenom(prenom: string) {
        this._prenom = prenom;
    }


  constructor(_num: number, _nom: string, _prenom: string){
    this._num=_num; 
    this._nom=_nom; 
    this._prenom=_prenom;
  }

  
}
