export class DestinoViaje {
	private selected: boolean = false;
	public servicios: string [];
    id: any;
	constructor(public nombre: string, public u:string) {
		this.servicios = ['pileta', 'desayuno'];
	}
	isSelected(): boolean{
		return this.selected;
	}
	setSelected(s: boolean){
		this.selected = s;
	}
}