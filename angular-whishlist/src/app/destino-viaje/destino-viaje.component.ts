import { Component, OnInit, Input, EventEmitter, Output, HostBinding } from '@angular/core';
import { DestinoViaje} from './../models/destino-viaje.model';
import { AppState } from '../app.module';
import { VoteUpAction, VoteDownAction } from 'src/assets/destinos-viajes.state.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destino: DestinoViaje | undefined;
  @Input('idx') position: number | undefined;
  @HostBinding('attr.class') cssClass ="col-md-4";
  @Output() clicked: EventEmitter<DestinoViaje>;

  constructor(private store: Store<AppState>) {
    this.clicked = new EventEmitter();
  }

  ngOnInit() {
  }

  ir() {
    this.clicked.emit(this.destino);
    return false;
  }

  voteUp(){
    this.store.dispatch(new VoteUpAction(this.destino))
    return false;
  }

  voteDown(){
    this.store.dispatch(new VoteDownAction(this.destino))
    return false;
  }
}
