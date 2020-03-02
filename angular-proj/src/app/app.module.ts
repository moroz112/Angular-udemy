import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ComponentsDataBindingComponent } from './assigments/components-data-binding/components-data-binding.component';
import { CockpitComponent } from './assigments/components-data-binding/cockpit/cockpit.component';
import { ServerElemmComponent } from './assigments/components-data-binding/server-elemm/server-elemm.component';
import { Assigment4Component } from './assigments/assigment4/assigment4.component';
import { GameControlComponent } from './assigments/assigment4/game-control/game-control.component';
import { OddComponent } from './assigments/assigment4/odd/odd.component';
import { EvenComponent } from './assigments/assigment4/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ComponentsDataBindingComponent,
    CockpitComponent,
    ServerElemmComponent,
    Assigment4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
