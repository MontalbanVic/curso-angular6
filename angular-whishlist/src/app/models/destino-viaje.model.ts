import {v4 as uuid} from 'uuid';

export class DestinoViaje {
	
	selected: boolean = false;
	servicios:string[];
	id = uuid();
	constructor(public nombre:string, public imagenUrl:string, public votes: number = 0) {
		this.servicios = ['pileta', 'desayuno'];
	}
	
	isSelected(){
		return this.selected;
	}
	setSelected(s: boolean){
		this.selected = s;
	}
	voteUp(){
		this.votes++;
	}
	voteDown(){
		this.votes--;
	}
}