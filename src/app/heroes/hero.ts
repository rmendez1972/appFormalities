export class Hero {
	public id_direccion:number;
	private nombre:String;
	public id_unidadadministrativa:number;
  	constructor(public a:number, public b: String,public c:number ){
  		this.id_direccion=a;
  		this.nombre=b;
  		this.id_unidadadministrativa=c;
  	}
}
