import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoedaService } from '../services/moeda.service';

@Component({
  standalone: true,
  selector: 'app-listar-moedas',
  templateUrl: './listar-moedas.component.html',
  styleUrls: ['./listar-moedas.component.css'],
  imports: [CommonModule],
})
export class ListarMoedasComponent {
  moedas: any[] = [
    ['USD', 'Dólar Americano'],
    ['BRL', 'Real Brasileiro'],
    ['EUR', 'Euro']
  ]

  constructor(private moedaService: MoedaService) {}

  ngOnInit() {
    this.moedaService.getMoeda().subscribe((data: any) => {
      this.moedas = data.suported_codes;
    })
  }
}
