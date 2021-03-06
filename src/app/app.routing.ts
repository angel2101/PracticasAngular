//importar modulos del router de angular
import { ModuleWithProviders, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//importar componentes
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegosComponent } from "./videojuego/videojuego.component";
import { CursoComponent } from "./curso/curso.component";
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from "./externo/externo.component";
import { ContactoComponent } from './contacto/contacto.component';

// Array de Rutas

const appRoutes: Routes = [
    {path : '' , component : HomeComponent},
    {path : 'home' , component : HomeComponent},
    {path : 'zapatillas' , component : ZapatillasComponent },
    {path : 'videojuego' , component : VideojuegosComponent},
    {path : 'curso' , component : CursoComponent},
    {path : 'externo' , component : ExternoComponent},
    {path : 'contacto' , component : ContactoComponent},
    {path : 'curso/:nombre/:followers' , component : CursoComponent},
    {path : '**' , component : HomeComponent}
];

// Exportar el modulo del Router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);