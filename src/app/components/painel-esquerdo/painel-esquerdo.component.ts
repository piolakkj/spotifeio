import {ChangeDetectionStrategy, Component, inject, OnInit} from "@angular/core";
import {SpotifyService} from "../../services/spotify.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-painel-esquerdo',
  standalone: true,
  imports: [],
  templateUrl: './painel-esquerdo.component.html',
  styleUrl: './painel-esquerdo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PainelEsquerdoComponent implements OnInit {

  ngOnInit(): void {}


}