import { DestinoViaje } from './destino-viaje.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { NuevoDestinoAction, ElegidoFavoritoAction } from 'src/assets/destinos-viajes.state.model';

export class DestinosApiClient {
	constructor(private store: Store<AppState>) {
	}
	add(d: DestinoViaje){
        this.store.dispatch(new NuevoDestinoAction(d));
	}


    elegir(d: DestinoViaje) {
        this.store.dispatch(new ElegidoFavoritoAction(d));
    }
}