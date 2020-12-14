import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, offType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import { DestinoViaje } from './destino-viaje.model';
import {HttpClientModule} from '@angular/common/http';

// ESTADO

export interface DestinosViajesState {
    items: DestinoViaje[];
    loading: Boolean;
    favorito: DestinoViaje;
}

expor
export function initializeDestinosViajesState() {
    return {
        items: [],
        loading: false,
        favorito: null
    };
}

// ACCIONES

export enum DestinosViajesActionTypes {
    NUEVO_DESTINO = '[Destinos Viajes] Nuevo',
    ELEGIDO_FAVORITO = '[Destinos Viajes] Favorito',
    VOTE_UP = '[Destinos Viajes] Vote Up',
    VOTE_DOWN = '[Destinos Viajes] Vote Down',
    INIT_MY_DATA = '[Destinos Viajes] Init My Data'
}

export class NuevoDestinoAction implements Action {
    type = DestinosViajesActionTypes.NUEVO_DESTINO;
    constructor(public destino: DestinoViaje) {}
}

export class ElegidoFavoritoAction implements Action {
    type = DestinosViajesActionTypes.ELEGIDO_FAVORITO;
    constructor(public destino: DestinoViaje) {}
}

export class VoteUpAction implements Action {
    type = DestinosViajesActionTypes.VOTE_UP;
    constructor(public destino: DestinoViaje) {}
}

export class VoteDownAction implements Action {
    type = DestinosViajesActionTypes.VOTE_DOWN;
    constructor(public destino: DestinoViaje) {}
}

export class InitMyDataAction implements Action {
    type = DestinosViajesActionTypes.INIT_MY_DATA;
    constructor(public destinos: string[]) {}
}

export type DestinosViajesActions = NuevoDestinoAction | ElegidoFavoritoAction | VoteUpAction | VoteDownAction;

// REDUCERS

export function reducerDestinosViajes(
    state: DestinosViajesState,
    action: DestinosViajesActions
): DestinosViajesState {
    switch (action.type) {
        case DestinosViajesActionTypes.INIT_MY_DATA: {
            const destinos: string[] = (action as InitMyDataAction).destinos;
            return {
                ...state,
                items: destinos.map((d) => new DestinoViaje(d, ''))
            };
        }
        case DestinosViajesActionTypes.NUEVO_DESTINO: {
            return {
                ...state,
                items: [...state.items, (action as NuevoDestinoAction).destino]
            };
        }
        case DestinosViajesActionTypes.ELEGIDO_FAVORITO: {
            state.items.forEach(x => x.setSelected(false));
            const fav: DestinoViaje = (action as ElegidoFavoritoAction).destino;
            fav.setSelected(true);
            return{
                ...state,
                favorito: fav
            };
        }
        case DestinosViajesActionTypes.VOTE_UP{
            const d: DestinoViaje = (action as VoteUpAction).destino;
            d.VoteUp();
            return {...state };
        }
        case DestinosViajesActionTypes.VOTE_DOWN{
            const d: DestinoViaje = (action as VoteDownAction).destino;
            d.VoteDown();
            return {...state };
        }
    }
}


